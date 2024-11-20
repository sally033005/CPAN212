This app is broken down into 2 smaller applications

A react application using vite to render web content, fetching data from our server
To run the client application, 
Open an integrated terminal to the client folder OR naviagte inside the client folder
run npm install
on completition, run npm run dev


For the server side, 
naviagte to the server folder
run 'npm install' in a terminal
start the client application. 



NOTE:
You will need a dotenv file to run applications:

client:
	VITE_SERVER_URL
	VITE_JWT_SECRET

Server:
	PORT
	MONGO_URI
	JWT_SECRET

Additional Note:
Using vite, you must include "VITE_" when searching for an environment variable
