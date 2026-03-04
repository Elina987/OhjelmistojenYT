# Logging Task 2 - Tally counter REST API

## Project Description
This project implements a simple REST API counter application using Express.

The counter supports:
- Increasing value
- Reading current value
- Resetting value
   
These are logged using Winston

## Tehcnologies Used 
-	Node.js (use v18 or newer)
-	Express 4.18.2.
-	Winston 3.11.0
-	Mocha 11.7.5
  
## Installation
Make sure you have Node.js  
Clone the repository and install dependencies:  
▶️ cd OhjelmistojenYT/LoggingTask2  
▶️ npm install

## Running the Application
Start the server:  
▶️ node src/main.js  

The server runs at:  
http://localhost:3000

## Endpoints
GET /counter-increase  
→ Increases counter value by 1  

GET /counter-read  
→ Returns current counter value  

GET /counter-reset  
→ Resets counter to 0 


## Logging
The application uses Winston for logging.  
Logs are written to:
- logs/combined.log (all logs)  
- logs/error.log (error logs only)  
example from the combined log:

{"level":"info","message":"[ENDPOINT] GET '/counter-increase'","timestamp":"2026-03-04T21:12:06.745Z"}  
{"level":"info","message":"[COUNTER] increase 1","timestamp":"2026-03-04T21:12:06.746Z"}  
{"level":"info","message":"[ENDPOINT] GET '/counter-read'","timestamp":"2026-03-04T21:12:10.339Z"} 
{"level":"info","message":"[COUNTER] read 1","timestamp":"2026-03-04T21:12:10.339Z"}  
{"level":"info","message":"[ENDPOINT] GET '/counter-reset'","timestamp":"2026-03-04T21:12:15.231Z"}   
{"level":"info","message":"[COUNTER] zeroed 0","timestamp":"2026-03-04T21:12:15.231Z"}    

## Testing

Run tests using:  
▶️ npm test

Example output:  
  Counter  
    ✔ should start at 0  
    ✔ should increase by one  
    ✔ should reset to zero  

  3 passing (6ms)
