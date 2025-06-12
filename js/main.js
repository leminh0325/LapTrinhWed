// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');
const movieGrid = document.getElementById('movieGrid');
const busGrid = document.getElementById('busGrid');
const newsGrid = document.getElementById('newsGrid');
const searchInput = document.querySelector('.search-box input');
const tabButtons = document.querySelectorAll('.tab-btn');
const authButtons = document.querySelector('.auth-buttons');

// User state
let currentUser = null;

// Modal Functions
function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Event Listeners for Modals
loginBtn.addEventListener('click', () => openModal(loginModal));
registerBtn.addEventListener('click', () => openModal(registerModal));

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal(loginModal);
        closeModal(registerModal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal(loginModal);
    if (e.target === registerModal) closeModal(registerModal);
});

// Form Submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        closeModal(loginModal);
        alert('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('Email này đã được đăng ký!');
        return;
    }

    // Add new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        bookings: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    closeModal(registerModal);
    openModal(loginModal);
});

// Update UI based on auth state
function updateAuthUI() {
    if (currentUser) {
        authButtons.innerHTML = `
            <span>Xin chào, ${currentUser.name}</span>
            <button id="logoutBtn" class="btn">Đăng xuất</button>
        `;
        document.getElementById('logoutBtn').addEventListener('click', logout);
    } else {
        authButtons.innerHTML = `
            <button id="loginBtn" class="btn">Đăng nhập</button>
            <button id="registerBtn" class="btn">Đăng ký</button>
        `;
        // Reattach event listeners
        document.getElementById('loginBtn').addEventListener('click', () => openModal(loginModal));
        document.getElementById('registerBtn').addEventListener('click', () => openModal(registerModal));
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    alert('Đã đăng xuất!');
}

// Check if user is logged in
function isLoggedIn() {
    return currentUser !== null;
}

// Initialize auth state
function initAuth() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Render Movies
function renderMovies(moviesToRender = movies) {
    movieGrid.innerHTML = moviesToRender.map(movie => `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="card-content">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <p>Thời lượng: ${movie.duration}</p>
                <p>Đánh giá: ${movie.rating}/5</p>
                <p>Giá: ${movie.price}</p>
                <div class="showtimes">
                    <p>Suất chiếu:</p>
                    ${movie.showtimes.map(time => `<span class="time">${time}</span>`).join('')}
                </div>
                <button class="btn" onclick="bookTicket('movie', ${movie.id})">Đặt vé</button>
            </div>
        </div>
    `).join('');
}

// Render Bus Routes
function renderBusRoutes(routesToRender = busRoutes) {
    busGrid.innerHTML = routesToRender.map(route => `
        <div class="bus-card">
            <div class="card-content">
                <h3>${route.from} - ${route.to}</h3>
                <p>Thời gian: ${route.departureTime} - ${route.arrivalTime}</p>
                <p>Loại xe: ${route.busType}</p>
                <p>Nhà xe: ${route.company}</p>
                <p>Giá: ${route.price}</p>
                <p>Còn ${route.availableSeats} ghế trống</p>
                <button class="btn" onclick="bookTicket('bus', ${route.id})">Đặt vé</button>
            </div>
        </div>
    `).join('');
}

// Render News
function renderNews(newsToRender = news) {
    newsGrid.innerHTML = newsToRender.map(item => `
        <div class="news-card">
            <img src="${item.image}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <p class="date">${item.date}</p>
                <button class="btn" onclick="readMore(${item.id})">Đọc thêm</button>
            </div>
        </div>
    `).join('');
}

// Search Functionality
function searchItems(query) {
    const searchTerm = query.toLowerCase();
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.description.toLowerCase().includes(searchTerm)
    );
    
    const filteredBuses = busRoutes.filter(route =>
        route.from.toLowerCase().includes(searchTerm) ||
        route.to.toLowerCase().includes(searchTerm) ||
        route.company.toLowerCase().includes(searchTerm)
    );

    renderMovies(filteredMovies);
    renderBusRoutes(filteredBuses);
}

searchInput.addEventListener('input', (e) => {
    searchItems(e.target.value);
});

// Tab Switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const tab = button.dataset.tab;
        if (tab === 'movies') {
            document.getElementById('movies').style.display = 'block';
            document.getElementById('buses').style.display = 'none';
        } else {
            document.getElementById('movies').style.display = 'none';
            document.getElementById('buses').style.display = 'block';
        }
    });
});

// Booking Function
function bookTicket(type, id) {
    if (!isLoggedIn()) {
        alert('Vui lòng đăng nhập để đặt vé!');
        openModal(loginModal);
        return;
    }

    const item = type === 'movie' ? movies.find(m => m.id === id) : busRoutes.find(b => b.id === id);
    if (!item) return;

    // Save booking info to localStorage
    const bookingData = {
        type,
        id,
        ...item
    };
    localStorage.setItem('currentBooking', JSON.stringify(bookingData));

    // Redirect to seat selection page
    window.location.href = `seat-selection.html?type=${type}&id=${id}`;
}

// Read More Function
function readMore(newsId) {
    const newsItem = news.find(n => n.id === newsId);
    if (!newsItem) return;

    // Here you would typically show a modal with full article or redirect to article page
    console.log('Reading news:', newsItem);
    alert('Đang chuyển đến trang tin tức...');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    renderMovies();
    renderBusRoutes();
    renderNews();
}); 