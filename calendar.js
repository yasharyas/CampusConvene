// JavaScript code
const daysContainer = document.querySelector(".days"),
  currentDateElement = document.querySelector(".current-date"),
  prevNextMonthIcons = document.querySelectorAll(".icons span"),
  calendarMonthSelect = document.getElementById("calendar-month"),
  calendarYearSelect = document.getElementById("calendar-year");

let currentYear = new Date().getFullYear(),
  currentMonth = new Date().getMonth(),
  selectedDay = null;

const monthsArray = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const yearArray = [
  "2024", "2025", "2026", "2027", "2028", "2029", "2030"
];

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(),
    lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let liTags = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTags += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isActive =
      selectedDay === i &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTags += `<li class="day ${isActive}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTags += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }
  currentDateElement.innerText = ""; // Clearing the text content
  daysContainer.innerHTML = liTags;

  // Update dropdown menus
  calendarMonthSelect.value = currentMonth + 1;
  calendarYearSelect.value = currentYear;

  // Selecting the day when clicked
  const days = document.querySelectorAll(".days .day");
  days.forEach((day) => {
    day.addEventListener("click", () => {
      // Reset previously selected date's style
      document.querySelector('.day.active')?.classList.remove('active');
      // Set current selected date's style
      day.classList.add("active");
      // Update selected date
      selectedDay = parseInt(day.textContent);
    });
  });
};

renderCalendar();

prevNextMonthIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev-month" ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });
});

// Event listener for month dropdown change
calendarMonthSelect.addEventListener("change", () => {
  currentMonth = parseInt(calendarMonthSelect.value) - 1;
  renderCalendar();
});

// Event listener for year dropdown change
calendarYearSelect.addEventListener("change", () => {
  currentYear = parseInt(calendarYearSelect.value);
  renderCalendar();
});
