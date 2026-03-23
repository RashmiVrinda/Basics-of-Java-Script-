import fs from "fs";
const getTotalRevenue = () => {
  try {
    // 1️⃣ Read file
    const data = fs.readFileSync("./order.json", "utf-8");
      const orders = JSON.parse(data);
        const completedOrders = orders.filter(
      order => order.status === "completed"
    ); 
    const total = completedOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );
    return total;
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
};

console.log(getTotalRevenue());