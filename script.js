document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  alert(`Thank you ${data.name}, your booking for a ${data.roomType} room has been submitted!`);
});
