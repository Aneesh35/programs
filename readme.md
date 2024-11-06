# MongoDB CRUD Operations Demo

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using MongoDB and Node.js.

## Prerequisites

1. Node.js (v14 or higher)
2. MongoDB installed and running locally on port 27017
3. npm (Node Package Manager)

## Setup

1. Installs all the dependency:

```bash
npm install
```

2. Make sure MongoDB server is running locally on port 27017

## Program Files

The project contains 5 JavaScript files demonstrating different MongoDB operations:

1. `pgm1.js` - Tests MongoDB connection
2. `pgm2.js` - Creates a new user
3. `pgm3.js` - Reads all users from database
4. `pgm4.js` - Updates user information
5. `pgm5.js` - Deletes a user

## How to Run

To run each program:

```bash
node pgm1.js  # Test connection
node pgm2.js  # Create user
node pgm3.js  # Read users
node pgm4.js  # Update user
node pgm5.js  # Delete user
```

## Program Flow

1. First run `pgm1.js` to test your MongoDB connection
2. Then run `pgm2.js` to create a sample user
3. Use `pgm3.js` to verify the user was created
4. Run `pgm4.js` to update the user's city to "Manipal"
5. Finally, run `pgm5.js` to delete the user

## Note

The sample data uses a specific user ("Aneesh R Rao") for demonstration purposes. You may want to modify the user details in the programs according to your needs.
