# Food-Ordering

## Description
A web application developed by using Node.js and Angular that allows users to add menu items and place orders. When making an order, the price is calculated including tax and a discount. Orders are stored in a database where users can view their order details including the price, date and time, and server. Food items can also be added to the menu and are also stored in a database.

This application was built in the Developing Web Applications course at BCIT.

## Technologies Used
- Node.js
- Angular
- Webstorm & Visual Studio Code
- MongoDB

## Prerequisites
The following are **required** to install:
  - [NodeJS](https://nodejs.org/en/)
  - [MongoDB](https://www.mongodb.com/try/download/community)
  - [AngularCLI](https://cli.angular.io/)
  
**Dependencies**

Navigate the folder where app.js is located in and run `npm install express --save` to install EJS.

## Usage
You must create a database in MongoDB in order to allow the data from the application to be stored.

Navigate to the Mongo bin folder -> `C:\Program Files\MongoDB\Server\4.2\bin`

Next, type the following commands to create the database: 

```
mongod
mongo
use MenuDB
```

To use the application, you must run `app.js` in the **ex_fullCrud_MVC** folder **AND** locate to the myapp folder in angularClient and run `ng serve`. Once the application has finished compiling, navigate to localhost:4200 in your browser to view the app.


**Note:** The database must be named **MenuDB**.
