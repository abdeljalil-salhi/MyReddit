@echo off
title MyReddit @abdeljalil.salhi
color 07
:RESTART
cls
ECHO ================================================
ECHO /                 MyReddit Git                 \
ECHO ================================================
SET /P message="$ ~>"
IF "%message%"=="" GOTO RESTART
ECHO ================================================
git add .
git commit -m "%message%"
git pull https://github.com/abdeljalil-salhi/MyReddit.git
git push origin main
pause