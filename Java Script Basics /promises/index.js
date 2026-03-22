const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
// fetch(`${API_BASE}/teas`)
//   .then(res => res.json())
//   .then(teas => {
//     console.log("Raw data from API:", teas); // <--- Add this line!
//     // console.log(`Found ${teas.length} teas`);
//     console.log(JSON.stringify(teas, null, 2));
//   })
//   .catch(err => console.error("Fetch error:", err));

// fetch(`${API_BASE}/teas`)
//   .then(res => res.json())
//     // response.json() also returns a Promise!

//   .then((teas) => {
//   console.log(`Found ${teas.length} teas`)
//   });

// // Exercise 2

// // Fetch a single tea by ID and log its name and origin.

// fetch(`${API_BASE}/teas/3`)
// .then(res=>res.json())
// .then((tea) => {console.log(`${tea.name}, ${tea.origin}`)});

// // Exercise 3

// // Try fetching a tea that doesn't exist (ID 999). Handle the error with .catch().

// fetch(`${API_BASE}/teas/999`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((tea) => {
//     console.log(tea.name);
//   })
//   .catch((error) => { console.log(error)

//   });

// Exercise 4

// // Fetch the inventory endpoint and log which teas are low on stock (less than 50).
// fetch(`${API_BASE}/inventory`)
// .then(res => res.json())
// .then ((teas)=> {
//     const result = teas.filter((tea) => tea.stockCount <50);
//     result.forEach((tea) => {console.log(`${tea.teaName} - Stock: ${tea.stockCount}`);});
// });

// //console.log(teas)})

// fetch(`${API_BASE}/teas/1`)
//   .then((response) => response.json())
//   .then((tea) => {
//     console.log("Tea:", tea.name);
//     // Return a new fetch to chain it
//     return fetch(`${API_BASE}/inventory`)
//       .then((response) => response.json())
//       .then((inventory) => {
//         return { tea, inventory };
//       });
//   })
//   .then(({ tea, inventory }) => {
//     // Find this tea's stock in the inventory
//     const item = inventory.find(
//       (inv) => inv.teaId === tea.id
//     );

//     // Log the stock count
//     console.log(`Stock: ${item.stockCount}`);
//   })
//   .catch((error) => console.error("Error:", error.message));

// Exercise 6 ⭐

// Fetch all teas, filter to only Japanese teas, then for each one log its name and price.
//  All using .then() chains.

// fetch(`${API_BASE}/teas`)
//   .then((response) => response.json())
//   .then((teas) => {
//     console.log(teas)
//     const result = teas.filter((tea) => {
//       return tea.origin === "Japan";
//     });
//     result.forEach((tea) => {
//       console.log(tea.name, tea.pricePerGram);
     
//     });
//   })
//   .catch((error) => console.error(error));


// fetch(`${API_BASE}/teas/1`)
//   .then((response) => response.json())
//   .then((tea) => {
//     console.log("Tea:", tea.name);
//     // Return a new fetch to chain it
//     return fetch(`${API_BASE}/inventory`)
//       .then((response) => response.json())
//       .then((inventory) => {
//         return { tea, inventory };
//       });
//   })
//   .then(({ tea, inventory }) => {
//     // Find this tea's stock in the inventory
//     const item = inventory.find((inv) => inv.teaId === tea.id);

//     // Log the stock count
//     console.log("Stock:", item.stockCount);
//   })
//   .catch((error) => console.error("Error:", error.message));
// Exercise 8 ⭐

// Create a fetchTeaWithTimeout(id, timeoutMs) function. It should:
// function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
// console.log("Starting...");
// wait(2000).then(() => console.log("2 seconds passed!"));

// Exercise 8 ⭐

// Create a fetchTeaWithTimeout(id, timeoutMs) function. It should:

// Fetch the tea from the API
// Reject if it takes longer than timeoutMs
// Hints:

// Use setTimeout to create a timeout that calls reject
// Use clearTimeout to cancel the timeout if fetch succeeds
// Remember to handle fetch errors too

// function fetchTeaWithTimeout(id, timeoutMs) {
//   return new Promise((resolve, reject) => {

//     const timer = setTimeout(() => {
//       reject(new Error("Request timed out"));
//     }, timeoutMs);

//     fetch(`${API_BASE}/teas/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("HTTP error: " + response.status);
//         }
//         return response.json();
//       })
//       .then((tea) => {
//         clearTimeout(timer); // cancel timeout if success
//         resolve(tea);
//       })
//       .catch((error) => {
//         clearTimeout(timer); // cancel timeout if error
//         reject(error);
//       });

//   });
// }

// // Test with a generous timeout (should work)
// fetchTeaWithTimeout(1, 5000)
//   .then((tea) => console.log("Got:", tea.name))
//   .catch((err) => console.log("Failed:", err.message));

// // Test with a tiny timeout (should fail)
// fetchTeaWithTimeout(1, 1)
//   .then((tea) => console.log("Got:", tea.name))
//   .catch((err) => console.log("Failed:", err.message));

// Exercise 9 ⭐

// Convert this callback-based function to return a Promise:
// import fs from "fs";

// function readJsonFilePromise(path) {
//   return new Promise((resolve, reject) => {
//     // We call the original callback-based function
//     fs.readFile(path, "utf8", (error, data) => {
//       // If the file system returns an error, we reject the promise
//       if (error) {
//         return reject(error);
//       }

//       try {
//         // If successful, we parse the data
//         const parsed = JSON.parse(data);
//         // And resolve the promise with the result
//         resolve(parsed);
//       } catch (parseError) {
//         // If JSON.parse fails, we reject with the parse error
//         reject(parseError);
//       }
//     });
//   });
// }

// // Test it:
// readJsonFilePromise("./test.json")
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.error("Error:", error.message));

//   Exercise 10

// // Rewrite Exercise 1 using async/await:

// async function countTeas() {
//   try {
//     const response = await fetch(`${API_BASE}/teas`);
//     const teas = await response.json(); // response.json() also returns a Promise!

//     console.log(`Found ${teas.length} teas`);
//   } catch (error) {
//     console.error(error);
//   }
// }

// countTeas();

// // Exercise 11

// // Rewrite Exercise 5 using async/await - fetch a tea, then fetch its inventory.

// async function getTeaWithStock(id) {
//   try {
//     const teaResponse = await fetch(`${API_BASE}/teas/${id}`);
//     const tea = await teaResponse.json();

//     console.log("Tea:", tea.name);

//     const inventoryResponse = await fetch(`${API_BASE}/inventory`);
//     const inventory = await inventoryResponse.json();

//     const item = inventory.find((inv) => inv.teaId === tea.id);

//     console.log("Stock:", item.stockCount);

//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// getTeaWithStock(1);


// Exercise 12

// Add error handling to Exercise 11 using try/catch:


// 1. Define constants first


// 2. Define the function
// 

// Exercise 13 ⭐

// Create an async function that:

// Fetches all teas
// Filters to organic teas
// Gets inventory for each
// // Returns only those with stock > 100
// async function getWellStockedOrganicTeas() {
//   try {
//     const teas = await fetch(`${API_BASE}/teas`).then(res => res.json());

//     const organicTeas = teas.filter((tea) => tea.organic);

//     const inventory = await fetch(`${API_BASE}/inventory`).then(res => res.json());

//     const result = organicTeas.filter((tea) => {
//       const item = inventory.find((inv) => inv.teaId === tea.id);
//       return item && item.stockCount > 100;
//     });

//     return result;

//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// getWellStockedOrganicTeas().then((teas) => {
//   console.log("Well-stocked organic teas:", teas);
// });




// Part 5: Promise.all

// Run multiple Promises in parallel for better performance.

// 📚 Recall: Promise.all
// Exercise 14

// Fetch 3 specific teas (IDs 1, 5, and 10) in parallel using Promise.all.

// async function getThreeTeas() {
//   const ids = [1, 5, 10];

//   // 1. Create an array of fetch Promises (use .map())
//   const promises = ids.map((id) =>
//     fetch(`${API_BASE}/teas/${id}`).then(res => res.json())
//   );

//   // 2. Use Promise.all() to wait for all of them
//   const teas = await Promise.all(promises);

//   // 3. Log each tea's name
//   teas.forEach((tea) => {
//     console.log(tea.name);
//   });
// }

// getThreeTeas();

// Exercise 15 ⭐

// Create a function that fetches ALL teas and ALL inventory data in parallel, 
// then combines them into a single report:
// async function getFullInventoryReport() {
//   // Fetch both endpoints in parallel
//   const [teas, inventory] = await Promise.all([
//     fetch(`${API_BASE}/teas`).then(res => res.json()),
//     fetch(`${API_BASE}/inventory`).then(res => res.json())
//   ]);

//   // Combine: for each tea, add its stock count
//   const report = teas.map((tea) => {
//     const item = inventory.find((inv) => inv.teaId === tea.id);

//     return {
//       name: tea.name,
//       origin: tea.origin,
//       stock: item ? item.stockCount : 0
//     };
//   });

//   // Return array of { name, origin, stock }
//   return report;
// }

// getFullInventoryReport().then((report) => {
//   console.log("Inventory Report:");
//   report.forEach((item) => {
//     console.log(`- ${item.name} (${item.origin}): ${item.stock} in stock`);
//   });
// });


// Step 1: Sign up (only needed once)
async function signup(email, password) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  return data.token;
}

// Step 2: Log in
// async function login(email, password) {
//   const res = await fetch(`${API_BASE}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ email, password })
//   });

//   const data = await res.json();
//   return data.token;
// }

// // Sign up first, then log in
// await signup("yourname@example.com", "mypassword");

// login("yourname@example.com", "mypassword")
//   .then((token) => console.log("Got token:", token))
//   .catch((err) => console.error(err.message));

// Add login function first


// Exercise 17 ⭐⭐

// Use the token from Exercise 16 to fetch orders:
async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  return data.token;
}

async function getOrders() {
  // 1. Login to get token
  const token = await login("yourname@example.com", "mypassword");

  // 2. Fetch /orders with Authorization header
  const res = await fetch(`${API_BASE}/orders`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  // 3. Return the orders
  const orders = await res.json();
  return orders;
}

getOrders()
  .then((orders) => console.log("Orders:", orders))
  .catch((err) => console.error(err.message));