@echo off
title MyReddit
:RESTART
cls
ECHO ================================================
ECHO /                 MyReddit Git                 \
ECHO ================================================
SET /P message="$ ~>"
IF "%message%"=="" GOTO RESTART
git add .
git commit -m "%message%"
git pull https://github.com/abdeljalil-salhi/MyReddit.git
git push origin main
pause