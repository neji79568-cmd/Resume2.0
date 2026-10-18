@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 set "PATH=%USERPROFILE%\.codex\tmp\resume-node\node-v24.22.0-win-x64;%PATH%"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 24 LTS from https://nodejs.org and try again.
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  call npm.cmd install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
node node_modules\vite\bin\vite.js --host 127.0.0.1 --open
pause
