

// Function to fetch room data from Firebase Realtime Database
async function fetchRoomDataFromFirebase() {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "Rooms"));
  const rooms = [];
  snapshot.forEach(childSnapshot => {
    rooms.push(childSnapshot.val());
  });
  return rooms;
  //console.log(rooms);
}

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

async function renderRoomsFromFirebase() {
  const roomListContainer = document.getElementById("room-list");
  roomListContainer.innerHTML = ""; // Clear previous content
  const roomsData = await fetchRoomDataFromFirebase();
  if (roomsData) {
    roomsData.forEach(room => {
      const roomHTML = generateRoomHTML(room);
      roomListContainer.innerHTML += roomHTML;
    });
  }
}

function initApp() {
  renderRoomsFromFirebase();
}

// Listen for Firebase initialization
document.addEventListener("DOMContentLoaded", function() {
  initApp();
});
