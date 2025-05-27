// js/main.js

// --- Exercise 1: JavaScript Basics & Setup ---
// Log welcome message and alert when page loads
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
  alert("Page is fully loaded");
});

// --- Exercise 2: Syntax, Data Types, and Operators ---
const eventName = "Community Clean-Up Drive";
const eventDate = new Date("2025-06-15");
let seatsAvailable = 50;

const eventInfo = Event: ${eventName}, Date: ${eventDate.toDateString()}, Seats Available: ${seatsAvailable};
console.log(eventInfo);

// --- Exercise 3: Conditionals, Loops, and Error Handling ---
const events = [
  { name: "Community Clean-Up Drive", date: new Date("2025-06-15"), seats: 50 },
  { name: "Music Festival", date: new Date("2024-12-01"), seats: 0 },  // past or full
  { name: "Book Fair", date: new Date("2025-07-20"), seats: 25 },
];

function displayValidEvents(eventList) {
  const now = new Date();
  eventList.forEach(event => {
    if (event.date > now && event.seats > 0) {
      console.log(Upcoming Event: ${event.name} on ${event.date.toDateString()} with ${event.seats} seats left.);
    }
  });
}
displayValidEvents(events);

function registerForEvent(eventNameToRegister) {
  try {
    const event = events.find(e => e.name === eventNameToRegister);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(Registered for ${event.name}. Seats left: ${event.seats});
  } catch (error) {
    console.error("Registration error:", error.message);
  }
}

// --- Exercise 4: Functions, Scope, Closures, Higher-Order Functions ---
function addEvent(name, date, seats, category) {
  events.push({ name, date: new Date(date), seats, category });
}

function registerUser(eventName) {
  registerForEvent(eventName);
}

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// Closure to track total registrations per category
function registrationTracker() {
  const registrations = {};
  return function(category) {
    registrations[category] = (registrations[category] || 0) + 1;
    return registrations[category];
  }
}
const trackRegistration = registrationTracker();

// Example of callback usage
filterEventsByCategory('Music', filteredEvents => {
  console.log(Filtered Music Events:, filteredEvents);
});

// --- Exercise 5: Objects and Prototypes ---
function Event(name, date, seats, category) {
  this.name = name;
  this.date = new Date(date);
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const eventObj = new Event("Art Workshop", "2025-08-10", 20, "Workshop");
console.log(eventObj.checkAvailability());

console.log("Event keys and values:", Object.entries(eventObj));

// --- Exercise 6: Arrays and Methods ---
const communityEvents = [];

communityEvents.push(new Event("Yoga Class", "2025-09-05", 15, "Health"));
communityEvents.push(new Event("Music Festival", "2025-10-12", 100, "Music"));
communityEvents.push(new Event("Baking Workshop", "2025-11-20", 10, "Workshop"));

// Filter music events
const musicEvents = communityEvents.filter(event => event.category === "Music");
console.log("Music events:", musicEvents);

// Map to format display
const eventCards = communityEvents.map(event => Event Card: ${event.name} (${event.category}));
console.log(eventCards);

// --- Exercise 7: DOM Manipulation ---
const eventsContainer = document.querySelector('#eventsList');

function renderEvents(eventsArray) {
  if (!eventsContainer) return;
  eventsContainer.innerHTML = ''; // Clear previous

  eventsArray.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    const title = document.createElement('h3');
    title.textContent = event.name;

    const date = document.createElement('p');
    date.textContent = Date: ${event.date.toDateString()};

    const seats = document.createElement('p');
    seats.textContent = Seats Available: ${event.seats};

    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Register';
    registerBtn.onclick = () => {
      registerUser(event.name);
      seats.textContent = Seats Available: ${event.seats};
    };

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);

    eventsContainer.appendChild(card);
  });
}

renderEvents(communityEvents);

// --- Exercise 8: Event Handling ---
// Category filter dropdown with onchange event
const categoryFilter = document.querySelector('#categoryFilter');
if (categoryFilter) {
  categoryFilter.onchange = function() {
    const selectedCategory = this.value;
    if (selectedCategory === 'all') {
      renderEvents(communityEvents);
    } else {
      renderEvents(communityEvents.filter(e => e.category === selectedCategory));
    }
  }
}

// Quick search by event name (keydown event)
const searchInput = document.querySelector('#searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = communityEvents.filter(e => e.name.toLowerCase().includes(query));
    renderEvents(filtered);
  });
}

// --- Exercise 9: Async JS, Promises, Async/Await ---
async function fetchEvents() {
  const eventsListElem = document.querySelector('#eventsList');
  if (!eventsListElem) return;

  // Show loading spinner
  eventsListElem.innerHTML = "<p>Loading events...</p>";

  try {
    const response = await fetch('data/mock-events.json');
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    // Parse and add events
    data.forEach(ev => {
      communityEvents.push(new Event(ev.name, ev.date, ev.seats, ev.category));
    });

    renderEvents(communityEvents);
  } catch (error) {
    eventsListElem.innerHTML = <p>Error loading events: ${error.message}</p>;
  }
}
fetchEvents();

// --- Exercise 10: Modern JavaScript Features ---
function greetUser(name = "Guest") {
  console.log(Hello, ${name}! Welcome to the community portal.);
}

const [firstEvent, ...otherEvents] = communityEvents;
const clonedEvents = [...communityEvents];

// Destructuring example
if (firstEvent) {
  const { name, date, seats, category } = firstEvent;
  console.log(First event: ${name} on ${date.toDateString()} (${category}), Seats: ${seats});
}

// --- Exercise 11-14 related to form-handler.js (optional) ---
// See form-handler.js for form submission, validation, AJAX, debugging, jQuery tasks

// -- Additional global event listeners for HTML5 Exercise 6 and 7 --
// Validate phone number on blur
const phoneInput = document.querySelector('#phoneNumber');
if (phoneInput) {
  phoneInput.onblur = () => {
    const valid = /^\d{10}$/.test(phoneInput.value);
    if (!valid) alert("Please enter a valid 10-digit phone number.");
  }
}

// Show event fee on dropdown change
const eventTypeSelect = document.querySelector('#eventType');
if (eventTypeSelect) {
  eventTypeSelect.onchange = function() {
    const feeDisplay = document.querySelector('#eventFee');
    let fee = 0;
    switch (this.value) {
      case 'Workshop': fee = 50; break;
      case 'Music': fee = 30; break;
      case 'Health': fee = 20; break;
      default: fee = 0;
    }
    if (feeDisplay) feeDisplay.textContent = Event Fee: $${fee};
  }
}

// Confirm on submit button click
const submitBtn = document.querySelector('#submitBtn');
if (submitBtn) {
  submitBtn.onclick = () => alert("Thank you for registering!");
}

// Enlarge image on double click
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.ondblclick = () => {
    img.style.width = img.style.width === '400px' ? '200px' : '400px';
  };
});

// Keydown character count in feedback textarea
const feedbackTextarea = document.querySelector('#feedback');
const charCountDisplay = document.querySelector('#charCount');
if (feedbackTextarea && charCountDisplay) {
  feedbackTextarea.addEventListener('keydown', () => {
    charCountDisplay.textContent = Characters typed: ${feedbackTextarea.value.length};
  });
}

// Warn user if leaving page before form submit (onbeforeunload)
window.onbeforeunload = (e) => {
  const form = document.querySelector('#registrationForm');
  if (form && form.dataset.dirty === 'true') {
    e.preventDefault();
    e.returnValue = '';
  }
};