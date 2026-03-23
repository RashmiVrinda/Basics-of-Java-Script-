// Question 54 of 100
// Return only orders where:

// order.status === "pending"
import fs from "fs";
const getPendingOrders = () => {
  try {
    const data = fs.readFileSync("./order.json", "utf-8");
    const orders = JSON.parse(data);

    return orders.filter((order) => order.status === "pending");
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
};
console.log(getPendingOrders());