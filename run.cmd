REM nvm list
REM nvm use 6.11.3
echo off
set PATH=%PATH%;C:\Users\peter\appdata\Roaming\npm
echo %PATH%
REM pause
cd c:\ae\ae.fb\test-side-menu-content
ionic serve --lab --browser chrome
pause
