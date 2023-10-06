# Login-Register
This repo consist of Express API and mongoose for authentication purpose.
This is the simple and kick start code for gitting into user authentication using
ExpressJS and MongoDB 

# Packages 
To write easy API call's for backend application we use `express.js` package to implement the
backend API function with the specific path for both login and register.

For user security and password privacy we need to encrypt the password before storing it into
database. So, here I used `bcrypt' a third party package used to encrypt the user password

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

`app.js' file consist of third party packages which help to connect the database, encrypt the 
user password, generate JWT token for sub-request authentication and more. API (end points) are 
written here with prefered methods like GET, PUT, POST or DELETE are over here.

Don't forgot to run `npm install` to install all dependency mentioned in the padkage.json file.
It help's to install all the dependency in one run.

!!! Happy  Coding !!!

