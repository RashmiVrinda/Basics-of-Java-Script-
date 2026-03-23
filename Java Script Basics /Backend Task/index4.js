// Question 55 of 100
// Create a function:
// 🎯 It should:
// Read orders.json
// Filter only pending orders
// Return total amount of pending orders


import fs from "fs"
const getTotalPendingRevenue = () => {try{
const data = fs.readFileSync("./order.json", "utf-8");
  const orders = JSON.parse(data);
   return orders
  .filter(order => order.status === "pending")
   .reduce((total,order) => total+order.amount,0)}

catch (err) {
    console.error("Error:", err);
    return null;
  }
};
console.log(getTotalPendingRevenue());