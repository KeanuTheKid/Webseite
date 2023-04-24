// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the form elements
const serviceSelect = document.getElementById('service-select');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');

// Set the default values for the form elements
serviceSelect.value = urlParams.get('service') || '';
nameInput.value = urlParams.get('name') || '';
emailInput.value = urlParams.get('email') || '';
phoneInput.value = urlParams.get('phone') || '';
dateInput.value = urlParams.get('date') || '';
timeInput.value = urlParams.get('time') || '';

// Add an event listener to the service select element
serviceSelect.addEventListener('change', () => {
  // Redirect to the booking page with the selected service
  window.location.href = `book.html?service=${serviceSelect.value}`;
});

// Add an event listener to the form submit button
document.getElementById('submit-button').addEventListener('click', () => {
  // Get the form values
  const service = serviceSelect.value;
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const date = dateInput.value;
  const time = timeInput.value;

  // Do something with the form values, such as send them to a server or display them on the page
});
// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the values of the query parameters
const name = urlParams.get('name');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const service = urlParams.get('service');
const dateTime = urlParams.get('dateTime');

// Set the values of the form elements
document.getElementById('name').value = name;
document.getElementById('email').value = email;
document.getElementById('phone').value = phone;

// Check if the form element exists
if (document.getElementById('service')) {
  document.getElementById('service').value = service;
}

// Check if the form element exists
if (document.getElementById('date')) {
  document.getElementById('date').value = dateTime;
}
// get the referring URL
var referrer = document.referrer;

// check if the referring page is preise.html
if (referrer.includes("preise.html")) {
  // get the service type from the URL
  var urlParams = new URLSearchParams(referrer.split("?")[1]);
  var serviceType = urlParams.get("serviceType");

  // set the service type in the form
  var serviceTypeInput = document.getElementById("service-type");
  serviceTypeInput.value = serviceType;
}

// check if the referring page is schulungen.html
if (referrer.includes("schulungen.html")) {
  // set the service type in the form
  var serviceTypeInput = document.getElementById("service-type");
  serviceTypeInput.value = "Schulungen";
}
// Get the form elements
const serviceTypeSelect = document.getElementById('service-type');
const dateTimeFields = document.getElementById('datetime-fields');

// Add an event listener to the service type select element
serviceTypeSelect.addEventListener('change', () => {
  if (serviceTypeSelect.value === 'Service') {
    // Show the date and time fields
    dateTimeFields.style.display = 'block';
  } else {
    // Hide the date and time fields
    dateTimeFields.style.display = 'none';
  }
});
// Description added
var toggleBtn = document.querySelector('.toggle-btn');
var toggleContent = document.querySelector('.toggle-content');

toggleBtn.addEventListener('click', function() {
  if (toggleContent.style.display === 'block') {
    toggleContent.style.display = 'none';
    toggleBtn.textContent = 'Show Details';
  } else {
    toggleContent.style.display = 'block';
    toggleBtn.textContent = 'Hide Details';
  }
});




//////// DIGGAH ICH CHECK NIX JS////////