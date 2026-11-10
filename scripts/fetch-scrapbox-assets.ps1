$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot '../references/scrapbox'
$staging = $null
$assets = @(
  @{ Name = 'index.js'; Url = 'https://scrapbox.io/assets/index.js' },
  @{ Name = 'app.css'; Url = 'https://scrapbox.io/assets/css/app.css' }
)

try {
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  New-Item -ItemType Directory -Path $destination -Force | Out-Null
  $staging = Join-Path $destination ([Guid]::NewGuid().ToString('N'))
  New-Item -ItemType Directory -Path $staging | Out-Null
  $records = foreach ($asset in $assets) {
    $output = Join-Path $staging $asset.Name
    Invoke-WebRequest -Uri $asset.Url -OutFile $output -UseBasicParsing -TimeoutSec 120
    if ((Get-Item -LiteralPath $output).Length -eq 0) {
      throw "Empty response: $($asset.Url)"
    }
    [PSCustomObject]@{
      file = $asset.Name
      url = $asset.Url
      fetched_at = [DateTimeOffset]::Now.ToString('o')
    }
  }
  $records | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $staging 'metadata.json') -Encoding UTF8

  # Publish only after both downloads and the metadata have succeeded.
  foreach ($name in @('index.js', 'app.css', 'metadata.json')) {
    Move-Item -LiteralPath (Join-Path $staging $name) -Destination (Join-Path $destination $name) -Force
  }
  Write-Host "Saved Scrapbox assets to $([IO.Path]::GetFullPath($destination))"
} catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  exit 1
} finally {
  if ($staging -and (Test-Path -LiteralPath $staging)) {
    # Delete only the known files in this invocation's unique staging directory.
    foreach ($name in @('index.js', 'app.css', 'metadata.json')) {
      $temporaryFile = Join-Path $staging $name
      if (Test-Path -LiteralPath $temporaryFile) {
        Remove-Item -LiteralPath $temporaryFile -Force
      }
    }
    Remove-Item -LiteralPath $staging -Force
  }
}
