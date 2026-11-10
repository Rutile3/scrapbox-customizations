@echo off
setlocal
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0fetch-scrapbox-assets.ps1"
exit /b %errorlevel%
