import fs from "fs"
const getTotalRevenue = () => { try{
const data = fs.readFileSync("./order.json", "utf-8");
  const orders = JSON.parse(data);
     return orders
      .filter (order => order.status === "completed")
    .reduce(
        (sum, order) => sum + order.amount,
        0
      );
    } catch (err) {
      console.error("Error:", err);
      return null;
    }
  };
console.log(getTotalRevenue);