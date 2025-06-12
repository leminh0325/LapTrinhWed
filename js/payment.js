// Dữ liệu sản phẩm
const products = {
    'popcorn-small': {
        name: 'Bắp nhỏ',
        price: 45000
    },
    'popcorn-medium': {
        name: 'Bắp vừa',
        price: 65000
    },
    'popcorn-large': {
        name: 'Bắp lớn',
        price: 85000
    },
    'coke': {
        name: 'Coca Cola',
        price: 35000
    },
    'sprite': {
        name: 'Sprite',
        price: 35000
    },
    'water': {
        name: 'Nước suối',
        price: 20000
    }
};

// DOM Elements
const bookingDetails = document.getElementById('bookingDetails');
const selectedSeatsList = document.getElementById('selectedSeatsList');
const foodBeverageList = document.getElementById('foodBeverageList');
const ticketPriceElement = document.getElementById('ticketPrice');
const foodBeveragePriceElement = document.getElementById('foodBeveragePrice');
const totalPriceElement = document.getElementById('totalPrice');
const paymentForm = document.getElementById('paymentForm');
const qrCodeModal = new bootstrap.Modal(document.getElementById('qrCodeModal'));
const qrCodeImage = document.getElementById('qrCodeImage');
const modalTotalAmount = document.getElementById('modalTotalAmount');
const paymentTimer = document.getElementById('paymentTimer');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

// State
let bookingInfo = null;
let selectedSeats = [];
let foodCart = {};
let paymentTimerInterval = null;

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
    selectedSeats = bookingInfo.selectedSeats || [];

    // Get food cart from session storage
    const savedCart = sessionStorage.getItem('foodCart');
    if (savedCart) {
        foodCart = JSON.parse(savedCart);
    }

    // Display booking details
    displayBookingDetails();
    displaySelectedSeats();
    displayFoodBeverageItems();
    updateTotalPrice();
}

// Display booking details
function displayBookingDetails() {
    if (bookingInfo.type === 'movie') {
        bookingDetails.innerHTML = `
            <p><strong>Phim:</strong> ${bookingInfo.title}</p>
            <p><strong>Suất chiếu:</strong> ${bookingInfo.showtime}</p>
            <p><strong>Rạp:</strong> ${bookingInfo.theater}</p>
        `;
    } else {
        bookingDetails.innerHTML = `
            <p><strong>Tuyến xe:</strong> ${bookingInfo.from} - ${bookingInfo.to}</p>
            <p><strong>Thời gian:</strong> ${bookingInfo.departureTime} - ${bookingInfo.arrivalTime}</p>
            <p><strong>Nhà xe:</strong> ${bookingInfo.company}</p>
        `;
    }
}

// Display selected seats
function displaySelectedSeats() {
    selectedSeatsList.innerHTML = selectedSeats
        .sort((a, b) => a - b)
        .map(seat => `<span class="seat-number">${seat}</span>`)
        .join('');
}

// Display food and beverage items
function displayFoodBeverageItems() {
    if (Object.keys(foodCart).length === 0) {
        foodBeverageList.innerHTML = '<p class="text-muted">Không có đồ ăn và thức uống</p>';
        return;
    }

    let total = 0;
    foodBeverageList.innerHTML = '';

    for (const [productId, quantity] of Object.entries(foodCart)) {
        if (quantity > 0) {
            const product = products[productId];
            const itemTotal = product.price * quantity;
            total += itemTotal;

            const item = document.createElement('div');
            item.className = 'd-flex justify-content-between align-items-center mb-2';
            item.innerHTML = `
                <div>
                    <span>${product.name}</span>
                    <small class="text-muted d-block">${formatCurrency(product.price)} x ${quantity}</small>
                </div>
                <span>${formatCurrency(itemTotal)}</span>
            `;
            foodBeverageList.appendChild(item);
        }
    }

    foodBeveragePriceElement.textContent = formatCurrency(total);
}

// Update total price
function updateTotalPrice() {
    const ticketTotal = selectedSeats.length * (bookingInfo.type === 'movie' ? 150000 : parseInt(bookingInfo.price.replace(/[^\d]/g, '')));
    const foodBeverageTotal = Object.entries(foodCart).reduce((total, [productId, quantity]) => {
        return total + (products[productId].price * quantity);
    }, 0);

    ticketPriceElement.textContent = formatCurrency(ticketTotal);
    totalPriceElement.textContent = formatCurrency(ticketTotal + foodBeverageTotal);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Handle form submission
paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
    };

    // Show QR code modal
    showQRCodeModal(formData);
});

// Show QR code modal
function showQRCodeModal(formData) {
    // Get total amount
    const totalAmount = parseInt(totalPriceElement.textContent.replace(/[^\d]/g, ''));
    modalTotalAmount.textContent = formatCurrency(totalAmount);

    // Generate QR code based on payment method
    const paymentMethod = formData.paymentMethod;
    let qrCodeUrl = '';
    
    switch (paymentMethod) {
        case 'vnpay':
            qrCodeUrl = 'img/qr.jpg'; // Replace with actual VNPay QR code
            break;
        case 'momo':
            qrCodeUrl = 'img/qr.jpg'; // Replace with actual MoMo QR code
            break;
        case 'zalopay':
            qrCodeUrl = 'img/qr.jpg'; // Replace with actual ZaloPay QR code
            break;
    }
    
    qrCodeImage.src = qrCodeUrl;

    // Start payment timer
    startPaymentTimer();

    // Show modal
    qrCodeModal.show();
}

// Start payment timer
function startPaymentTimer() {
    let timeLeft = 15 * 60; // 15 minutes in seconds
    
    // Clear any existing timer
    if (paymentTimerInterval) {
        clearInterval(paymentTimerInterval);
    }
    
    // Update timer display
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        paymentTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(paymentTimerInterval);
            qrCodeModal.hide();
            alert('Mã QR đã hết hạn. Vui lòng thử lại.');
        }
        
        timeLeft--;
    }
    
    // Update timer every second
    updateTimer();
    paymentTimerInterval = setInterval(updateTimer, 1000);
}

// Handle payment confirmation
confirmPaymentBtn.addEventListener('click', function() {
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
    };

    // Create order data
    const orderData = {
        ...bookingInfo,
        selectedSeats,
        foodCart,
        customerInfo: formData,
        totalAmount: parseInt(totalPriceElement.textContent.replace(/[^\d]/g, '')),
        orderDate: new Date().toISOString(),
        paymentStatus: 'completed'
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear booking data
    localStorage.removeItem('currentBooking');
    sessionStorage.removeItem('foodCart');

    // Clear timer
    if (paymentTimerInterval) {
        clearInterval(paymentTimerInterval);
    }

    // Hide modal
    qrCodeModal.hide();

    // Show success message and redirect
    alert('Thanh toán thành công! Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.');
    window.location.href = 'index.html';
});

// Handle modal close
document.getElementById('qrCodeModal').addEventListener('hidden.bs.modal', function () {
    // Clear timer when modal is closed
    if (paymentTimerInterval) {
        clearInterval(paymentTimerInterval);
    }
});

// Initialize the page
init(); 