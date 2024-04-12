// // JavaScript code
// const daysTag = document.querySelector(".days"),
//   currentDate = document.querySelector(".current-date"),
//   prevNextIcon = document.querySelectorAll(".icons span"),
//   inputMonth = document.getElementById("input-month"),
//   inputYear = document.getElementById("input-year");

// let currYear = new Date().getFullYear(),
//   currMonth = new Date().getMonth(),
//   selectedDate = null;

// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const renderCalendar = () => {
//   let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
//     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
//     lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
//     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
//   let liTag = "";

//   for (let i = firstDayofMonth; i > 0; i--) {
//     liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//   }

//   for (let i = 1; i <= lastDateofMonth; i++) {
//     let isToday =
//       selectedDate === i &&
//       currMonth === new Date().getMonth() &&
//       currYear === new Date().getFullYear()
//         ? "active"
//         : "";
//     liTag += `<li class="day ${isToday}">${i}</li>`;
//   }

//   for (let i = lastDayofMonth; i < 6; i++) {
//     liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
//   }
//   currentDate.innerText = ""; // Clearing the text content
//   daysTag.innerHTML = liTag;

//   // Update dropdown menus
//   inputMonth.value = currMonth + 1;
//   inputYear.value = currYear;

//   // Selecting the day when clicked
//   const days = document.querySelectorAll(".days .day");
//   days.forEach((day) => {
//     day.addEventListener("click", () => {
//       // Reset previously selected date's style
//       document.querySelector('.day.active')?.classList.remove('active');
//       // Set current selected date's style
//       day.classList.add("active");
//       // Update selected date
//       selectedDate = parseInt(day.textContent);
//     });
//   });
// };

// renderCalendar();

// prevNextIcon.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
//     if (currMonth < 0) {
//       currMonth = 11;
//       currYear--;
//     } else if (currMonth > 11) {
//       currMonth = 0;
//       currYear++;
//     }
//     renderCalendar();
//   });
// });

// // Event listener for month dropdown change
// inputMonth.addEventListener("change", () => {
//   currMonth = parseInt(inputMonth.value) - 1;
//   renderCalendar();
// });

// // Event listener for year dropdown change
// inputYear.addEventListener("change", () => {
//   currYear = parseInt(inputYear.value);
//   renderCalendar();
// });

