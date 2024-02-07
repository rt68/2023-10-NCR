
///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("../config/connection");
const Fruit = require("./Fruit");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function
const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
];
 // Delete all fruits
 Fruit.deleteMany({})
 .then((deletedFruits) => {
   // add the starter fruits
   Fruit.insertMany(startFruits)
     .then((createdFruits) => {
       // log the New fruits to confirm their creation
       console.log(createdFruits);
       db.close();
     })
     .catch((err) => {
       console.error(err);
       db.close();
     });
 })
 .catch((err) => {
   console.error(err);
   db.close();
 });

///////////////////////////////////////////////
// Write your Seed Code Above
//////////////////////////////////////////////
});