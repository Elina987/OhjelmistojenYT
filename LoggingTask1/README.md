# Logging Task 1 - Implement Logging library

## Project Description
Implementing Logging in a Node.js Application

Purpose of the task:
- Configure Winston logger
- Log messages
- Log error messages
- Write logs to console and file

## Technologies used
- Node.js ( Use v18 or newer)
- Winston 3.11.0

## Installation

Make sure Node.js is installed:  
▶️ node -v

Clone the repository  
Change directory ▶️ cd OhjelmistojenYT/LoggingTask1 

Install dependencies  
▶️ npm install 

## Logging
The application uses Winston for logging. 
Logs are written to:  

logs/combined.log (all logs)
logs/error.log (error logs only) 

example from the combined log:  
{"level":"info","message":"This is another informational message.","timestamp":"2026-03-04T21:47:11.163Z"}  
{"level":"warn","message":"This is another warning message.","timestamp":"2026-03-04T21:47:11.163Z"}  
{"level":"error","message":"This is another error message.","timestamp":"2026-03-04T21:47:11.163Z"}  

