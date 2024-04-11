// var roomArray = [
//   {
//       "Venue": "A block",
//       "Type": "Lecture Hall",
//       "Capacity": "300",
//       "Availability": true,
//       "Image": "images/home-main"
//   },
//   {
//     "Venue": "A block",
//     "Type": "Tutorial ",
//     "Capacity": "50",
//     "Availability": false,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "B block",
//     "Type": "Lecture Hall",
//     "Capacity": "250",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "N block",
//     "Type": "Lecture Hall",
//     "Capacity": "300",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "A block",
//     "Type": "Tutorial",
//     "Capacity": "200",
//     "Availability": false,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "B block",
//     "Type": "Lecture Hall",
//     "Capacity": "350",
//     "Availability": false,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "N block",
//     "Type": "Lecture Hall",
//     "Capacity": "300",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "  B block",
//     "Type": "Tutorial",
//     "Capacity": "200",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "N block",
//     "Type": "Lecture Hall",
//     "Capacity": "300",
//     "Availability": false,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "A block",
//     "Type": "Lecture Hall",
//     "Capacity": "300",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
//   {
//     "Venue": "B block",
//     "Type": "Lecture Hall",
//     "Capacity": "250",
//     "Availability": true,
//     "Image": "images/home-main"   
//   },
// ];

// var roomsPerPage = 4; // Number of rooms to display per page
// let currentPage = 1; // Current page number

// // Function to generate HTML for each room
// function generateRoomHTML(room) {
//   var availabilityBtnClass = room.Availability ? "redbtn" : "greybtn";
//   var availabilityBtnText = room.Availability ? "Available" : "Not Available";
//   var bookNowBtnHTML = room.Availability ? `<button class="redbtn book-now-btn" style="width: 20%;">Book Now</button>` : '<button class="greybtn book-now-btn" style="width: 20%;">Booked</button>';

//   return `
//       <div class="room-container">
//           <img src="${room.Image}.jpg" style="height: 100%; width:30%; padding: 10px;" alt="Room Image" class="room-image">
//           <div class="room-details">
//               <h2>${room.Venue}</h2>
//               <p>Type: ${room.Type}</p>
//               <p>Capacity: ${room.Capacity}</p>
//               <button class="${availabilityBtnClass}" style="width: 30%; margin: 10px; margin-left: 0%;">${availabilityBtnText}</button>
//               ${bookNowBtnHTML}
//           </div>
//       </div>
//   `;
// }

// // Function to display rooms for the current page
// function displayRooms() {
//   var roomContainer = document.getElementById("room-list");
//   roomContainer.innerHTML = "";

//   var startIndex = (currentPage - 1) * roomsPerPage;
//   var endIndex = Math.min(startIndex + roomsPerPage, roomArray.length);
//   var roomsToShow = roomArray.slice(startIndex, endIndex);

//   roomsToShow.forEach(room => {
//       var roomHTML = generateRoomHTML(room);
//       roomContainer.innerHTML += roomHTML;
//   });
// }

// // Function to generate dynamic page numbers
// function generatePageNumbers() {
//   var totalPages = Math.ceil(roomArray.length / roomsPerPage);
//   var paginationContainer = document.getElementById("pagination-container");
//   paginationContainer.innerHTML = "";
//   paginationContainer.style.textAlign = "center";

//   for (let i = 1; i <= totalPages; i++) {
//       var pageLink = document.createElement("button");
//       pageLink.textContent = i;
//       pageLink.className = "pagination-button";
//       pageLink.addEventListener("click", function() {
//           currentPage = i;
//           displayRooms();
//       });
//       paginationContainer.appendChild(pageLink);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   displayRooms();
//   generatePageNumbers();
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var database = firebase.database();

// // Function to fetch data from Firebase
// function fetchDataFromFirebase() {
//   // Reference to the data you want to fetch
//   var dataRef = database.ref('/Rooms');

//   // Fetch data
//   dataRef.once('value', function(snapshot) {
//     // Process the fetched data
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       // Display the data (example: log to console)
//       console.log(childData);
//       // You can also display the data in your HTML here
//       // For example, you can create HTML elements dynamically and append them to a container
//     });
//   });
// }

// // Call the fetchDataFromFirebase function to fetch and display data
// fetchDataFromFirebase();


var database = firebase.database();
var roomsPerPage = 4; // Number of rooms to display per page
let currentPage = 1; // Current page number

// Function to generate HTML for each room
function generateRoomHTML(room) {
  var availabilityBtnClass = room.Availability ? "redbtn" : "greybtn";
  var availabilityBtnText = room.Availability ? "Available" : "Not Available";
  var bookNowBtnHTML = room.Availability ? `<button class="redbtn book-now-btn" style="width: 20%;">Book Now</button>` : '<button class="greybtn book-now-btn" style="width: 20%;">Booked</button>';

  return `
      <div class="room-container">
          <img src="${room.Image}.jpg" style="height: 100%; width:30%; padding: 10px;" alt="Room Image" class="room-image">
          <div class="room-details">
              <h2>${room.Venue}</h2>
              <p>Type: ${room.Type}</p>
              <p>Capacity: ${room.Capacity}</p>
              <button class="${availabilityBtnClass}" style="width: 30%; margin: 10px; margin-left: 0%;">${availabilityBtnText}</button>
              ${bookNowBtnHTML}
          </div>
      </div>
  `;
}

// Function to display rooms for the current page
function displayRooms(rooms) {
  var roomContainer = document.getElementById("room-list");
  roomContainer.innerHTML = "";

  var startIndex = (currentPage - 1) * roomsPerPage;
  var endIndex = Math.min(startIndex + roomsPerPage, rooms.length);
  var roomsToShow = rooms.slice(startIndex, endIndex);

  roomsToShow.forEach(room => {
      var roomHTML = generateRoomHTML(room);
      roomContainer.innerHTML += roomHTML;
  });
}

// Function to generate dynamic page numbers
function generatePageNumbers(totalPages) {
  var paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";
  paginationContainer.style.textAlign = "center";

  for (let i = 1; i <= totalPages; i++) {
      var pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "pagination-button";
      pageLink.addEventListener("click", function() {
          currentPage = i;
          displayRooms();
      });
      paginationContainer.appendChild(pageLink);
  }
}

// Function to fetch data from Firebase
function fetchDataFromFirebase() {
  const locationReq = document.getElementById('location').value;
  const membersReq = parseInt(document.getElementById('members').value);
  //console.log(locationReq , membersReq);
  var query = firebase.database().ref("Rooms").orderByChild('Venue').equalTo(locationReq);
  
  // Execute the query
  query.once('value', function(snapshot) {
    var filteredRooms = [];
    snapshot.forEach(function(childSnapshot) {
      var roomData = childSnapshot.val();
      // Filter rooms based on capacity
      if (roomData.Capacity >= membersReq) {
        filteredRooms.push(roomData);
      }
    });
    var totalPages = Math.ceil(filteredRooms.length / roomsPerPage);
    console.log(filteredRooms)
    displayRooms(filteredRooms);
    generatePageNumbers(totalPages);
  });
}




