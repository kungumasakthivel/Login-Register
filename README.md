# Login-Register
This repo consist of Express API and mongoose for authentication purpose.
This is the simple and kick start code for gitting into user authentication using
ExpressJS and MongoDB 

# db folder
In the db folder it consist of two files dbConnect.js and userModel.js the dbConnect file is 
used to connect the mongodb atles via API call. Which was trigered and configured using .env file 
in the folder which was not exist in the repo.
So, create file in root folder with name as `.env` without any extension and write
`DB_URL = "PASTE_YOUR_MONGO_DB_CONNECTION_URL"`

In the userModel.js file consist of creating and extracting records from the DB
if the user exist else it will create new table for particular in the DB with
`Email` and `Password` as their attributes.


!!! Need to include node_modules package before running... the code !!!

# Root folder 
`auth.js` file work's like authenticator which helps to authenticate the existing jwt token from the
user side and verfies the user wheather they have access to route to the specific route int the
application.
This auth.js file export a function which help's the end point to verify the user. THis function
passed as an middleware function in the API function's.


