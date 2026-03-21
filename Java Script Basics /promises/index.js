
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

fetch(`${API_BASE}/teas/1`)
  .then((response) => response.json())
  .then((tea) => {
    console.log("Tea:", tea.name);
    // Return a new fetch to chain it
    return fetch(`${API_BASE}/inventory`)
      .then((response) => response.json())
      .then((inventory) => {
        return { tea, inventory };
      });
  })
  .then(({ tea, inventory }) => {
    // Find this tea's stock in the inventory
    const item = inventory.find(
      (inv) => inv.teaId === tea.id
    );

    // Log the stock count
    console.log(`Stock: ${item.stockCount}`);
  })
  .catch((error) => console.error("Error:", error.message));