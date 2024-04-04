const roomRequests = [{
    roomName: 'Temp Room Name A',
    date: '9/11/2004',
    time: '10:00 AM - 12:00 PM',
    amenities: 'Projector, Whiteboard',
    capacity: '20',
    purpose: 'Meeting'
  },
  {
    roomName: 'Temp Room Name B',
    date: '10/11/2004',
    time: '2:00 PM - 4:00 PM',
    amenities: 'Projector, Whiteboard',
    capacity: '15',
    purpose: 'Presentation'
  },
  // Add more room requests as needed
];
// Function to render room requests from the local array
function renderRoomRequests() {
  const requestList = document.querySelector('.requestlist');
  requestList.innerHTML = ''; // Clear existing list
  roomRequests.forEach((request, index) => {
    const item = document.createElement('li');
    item.className = 'item';
    item.innerHTML = `
            <div class="main">
              <ul id="nameDate">
                <li class="name" id="name${index}">
                  <h4>${request.roomName}</h4>
                </li>
                <li class="date" id="date${index}">${request.date}</li>
              </ul>
              <p class="info">
                Time: ${request.time}<br>
                Amenities: ${request.amenities}<br>
                Capacity: ${request.capacity}<br>
                Purpose: ${request.purpose}<br>
              </p>
              <div class="buttons">
                <ul id="YN">
                  <li><button id="approve" class="ynbtn">
                      <span class="shadow"></span>
                      <span class="edge"></span>
                      <span class="front text"> Approve
                      </span>
                    </button></li>
                  <li><button id="reject" class="ynbtn">
                      <span class="shadow"></span>
                      <span class="edge"></span>
                      <span class="front text"> Reject
                      </span>
                    </button></li>
                </ul>
              </div>
            </div>
          `;
    requestList.appendChild(item);
  });
}
// Call the render function to initially render the room requests
renderRoomRequests();