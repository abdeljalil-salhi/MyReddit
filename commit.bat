@ECHO OFF
TITLE MyReddit @abdeljalil.salhi
COLOR 07
:RESTART
CLEAR || CLS
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
ECHO ================================================
ECHO commited: %message%
PAUSE