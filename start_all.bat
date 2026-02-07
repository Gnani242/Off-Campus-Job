@echo off
echo Starting Off-Campus Auto Job Application Platform...

start "Frontend" cmd /k "cd frontend && npm run dev"
start "Backend" cmd /k "cd backend && npm start"
start "Automation" cmd /k "cd automation && npm start"

echo All services started!
pause
