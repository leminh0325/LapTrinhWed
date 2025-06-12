// Get booking details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const bookingType = urlParams.get('type'); // 'movie' or 'bus'
const bookingId = urlParams.get('id');

// DOM Elements
const seatsContainer = document.getElementById('seatsContainer');
const selectedSeatsList = document.getElementById('selectedSeatsList');
const totalPriceElement = document.getElementById('totalPrice');
const proceedBtn = document.getElementById('proceedBtn');
const bookingDetails = document.getElementById('bookingDetails');

// State
let selectedSeats = [];
let seatPrice = 0;
let bookingInfo = null;

// Initialize the page
function init() {
    // Get booking info from localStorage
    const bookingData = JSON.parse(localStorage.getItem('currentBooking'));
    if (!bookingData) {
        alert('Không tìm thấy thông tin đặt vé!');
        window.location.href = 'index.html';
        return;
    }

    bookingInfo = bookingData;
    seatPrice = bookingType === 'movie' ? 150000 : parseInt(bookingInfo.price.replace(/[^\d]/g, ''));
    
    // Display booking details
    displayBookingDetails();
    
    // Generate seats
    generateSeats();
    
    // Load previously selected seats if any
    loadSelectedSeats();
}

// Display booking details
function displayBookingDetails() {
    if (bookingType === 'movie') {
        bookingDetails.innerHTML = `
            <p><strong>Phim:</strong> ${bookingInfo.title}</p>
            <p><strong>Suất chiếu:</strong> ${bookingInfo.showtime}</p>
            <p><strong>Giá vé:</strong> ${bookingInfo.price}</p>
        `;
    } else {
        bookingDetails.innerHTML = `
            <p><strong>Tuyến xe:</strong> ${bookingInfo.from} - ${bookingInfo.to}</p>
            <p><strong>Thời gian:</strong> ${bookingInfo.departureTime} - ${bookingInfo.arrivalTime}</p>
            <p><strong>Nhà xe:</strong> ${bookingInfo.company}</p>
            <p><strong>Giá vé:</strong> ${bookingInfo.price}</p>
        `;
    }
}

// Generate seats
function generateSeats() {
    const totalSeats = 50;
    const seatsPerRow = 10;
    const rows = Math.ceil(totalSeats / seatsPerRow);

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= seatsPerRow; col++) {
            const seatNumber = (row - 1) * seatsPerRow + col;
            if (seatNumber <= totalSeats) {
                const seat = document.createElement('div');
                seat.className = 'seat available';
                seat.dataset.seatNumber = seatNumber;
                seat.innerHTML = seatNumber;
                
                // Randomly mark some seats as occupied (for demo)
                if (Math.random() < 0.2) {
                    seat.classList.remove('available');
                    seat.classList.add('occupied');
                }

                seat.addEventListener('click', () => toggleSeat(seat));
                seatsContainer.appendChild(seat);
            }
        }
    }
}

// Toggle seat selection
function toggleSeat(seat) {
    if (seat.classList.contains('occupied')) return;

    const seatNumber = parseInt(seat.dataset.seatNumber);
    const index = selectedSeats.indexOf(seatNumber);

    if (index === -1) {
        // Select seat
        selectedSeats.push(seatNumber);
        seat.classList.remove('available');
        seat.classList.add('selected');
    } else {
        // Deselect seat
        selectedSeats.splice(index, 1);
        seat.classList.remove('selected');
        seat.classList.add('available');
    }

    updateBookingSummary();
}

// Update booking summary
function updateBookingSummary() {
    // Update selected seats list
    selectedSeatsList.innerHTML = selectedSeats
        .sort((a, b) => a - b)
        .map(seat => `<span class="seat-number">${seat}</span>`)
        .join('');

    // Update total price
    const totalPrice = selectedSeats.length * seatPrice;
    totalPriceElement.textContent = `${totalPrice.toLocaleString('vi-VN')}đ`;

    // Enable/disable proceed button
    proceedBtn.disabled = selectedSeats.length === 0;
}

// Save selected seats
function saveSelectedSeats() {
    const bookingData = {
        ...bookingInfo,
        selectedSeats,
        totalPrice: selectedSeats.length * seatPrice
    };
    localStorage.setItem('currentBooking', JSON.stringify(bookingData));
}

// Load previously selected seats
function loadSelectedSeats() {
    const savedBooking = JSON.parse(localStorage.getItem('currentBooking'));
    if (savedBooking && savedBooking.selectedSeats) {
        selectedSeats = savedBooking.selectedSeats;
        selectedSeats.forEach(seatNumber => {
            const seat = document.querySelector(`[data-seat-number="${seatNumber}"]`);
            if (seat) {
                seat.classList.remove('available');
                seat.classList.add('selected');
            }
        });
        updateBookingSummary();
    }
}

// Proceed to payment
proceedBtn.addEventListener('click', () => {
    saveSelectedSeats();
    // Redirect to food-beverage page for movie bookings, payment page for bus bookings
    if (bookingType === 'movie') {
        window.location.href = 'food-beverage.html';
    } else {
        window.location.href = 'payment.html';
    }
});

// Initialize the page
init(); 