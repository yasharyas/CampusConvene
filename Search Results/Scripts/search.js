const roomArray = [
  {
      "Venue": "A block",
      "Type": "Lecture Hall",
      "Capacity": "300",
      "Availability": true,
      "Image": "Homepage/images/Homepage auditorium.avif"
  },
  {
    "Venue": "A block",
    "Type": "Tutorial ",
    "Capacity": "50",
    "Availability": false,
    "Image": "Homepage/images/Homepage lab.avif"   
  },
  {
    "Venue": "B block",
    "Type": "Lecture Hall",
    "Capacity": "250",
    "Availability": true,
    "Image": "Homepage/images/Homepage auditorium.avif"   
  },
  {
    "Venue": "N block",
    "Type": "Lecture Hall",
    "Capacity": "300",
    "Availability": true,
    "Image": "Homepage/images/Homepage auditorium.avif"   
  },
  {
    "Venue": "A block",
    "Type": "Tutorial",
    "Capacity": "200",
    "Availability": false,
    "Image": "Homepage/images/Homepage auditorium.avif"   
  },
  {
    "Venue": "B block",
    "Type": "Lecture Hall",
    "Capacity": "350",
    "Availability": false,
    "Image": "images/home-main"   
  },
  {
    "Venue": "N block",
    "Type": "Lecture Hall",
    "Capacity": "300",
    "Availability": true,
    "Image": "images/home-main"   
  },
  {
    "Venue": "  B block",
    "Type": "Tutorial",
    "Capacity": "200",
    "Availability": true,
    "Image": "images/home-main"   
  },
  {
    "Venue": "N block",
    "Type": "Lecture Hall",
    "Capacity": "300",
    "Availability": false,
    "Image": "images/home-main"   
  },
  {
    "Venue": "A block",
    "Type": "Lecture Hall",
    "Capacity": "300",
    "Availability": true,
    "Image": "images/home-main"   
  },
  {
    "Venue": "B block",
    "Type": "Lecture Hall",
    "Capacity": "250",
    "Availability": true,
    "Image": "images/home-main"   
  },
];

const roomsPerPage = 4; // Number of rooms to display per page
let currentPage = 1; // Current page number

// Function to generate HTML for each room
function generateRoomHTML(room) {
  const availabilityBtnClass = room.Availability ? "redbtn" : "greybtn";
  const availabilityBtnText = room.Availability ? "Available" : "Not Available";
  const bookNowBtnHTML = room.Availability ? `<button class="redbtn book-now-btn" style="width: 20%;">Book Now</button>` : '<button class="greybtn book-now-btn" style="width: 20%;">Booked</button>';

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
function displayRooms() {
  const roomContainer = document.getElementById("room-list");
  roomContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * roomsPerPage;
  const endIndex = Math.min(startIndex + roomsPerPage, roomArray.length);
  const roomsToShow = roomArray.slice(startIndex, endIndex);

  roomsToShow.forEach(room => {
      const roomHTML = generateRoomHTML(room);
      roomContainer.innerHTML += roomHTML;
  });
}

// Function to generate dynamic page numbers
function generatePageNumbers() {
  const totalPages = Math.ceil(roomArray.length / roomsPerPage);
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";
  paginationContainer.style.textAlign = "center";

  for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "pagination-button";
      pageLink.addEventListener("click", function() {
          currentPage = i;
          displayRooms();
      });
      paginationContainer.appendChild(pageLink);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayRooms();
  generatePageNumbers();
});


