// ✅ Question 53 of 100 (Backend Track)
// Create a function:
// 🎯 What it should do:
// Read orders.json
// Return only completed orders
// Use arrow function
// Use try...catch

import fs from "fs"
const getCompletedOrders = () => {try{

const data = fs.readFileSync("./order.json", "utf-8");
  const orders = JSON.parse(data);

  return orders
  .filter(order => order.status === "completed");}
  catch (err) {
      console.error("Error:", err);
      return null;
    }};

    console.log(getCompletedOrders());
