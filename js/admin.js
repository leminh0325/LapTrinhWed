// DOM Elements
const totalCustomersElement = document.getElementById('totalCustomers');
const totalBookingsElement = document.getElementById('totalBookings');
const totalRevenueElement = document.getElementById('totalRevenue');
const customersTableBody = document.getElementById('customersTableBody');
const bookingsTableBody = document.getElementById('bookingsTableBody');
const logoutBtn = document.getElementById('logoutBtn');

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.dataset.section;
        if (section) {
            showSection(section);
        }
    });
});

// Show selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('d-none');
    });
    
    // Show selected section
    document.getElementById(`${sectionId}-section`).classList.remove('d-none');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Load dashboard data
function loadDashboardData() {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Update statistics
    totalCustomersElement.textContent = users.length;
    totalBookingsElement.textContent = orders.length;
    
    // Calculate total revenue
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    totalRevenueElement.textContent = formatCurrency(totalRevenue);
}

// Load customers data
function loadCustomersData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    customersTableBody.innerHTML = '';

    users.forEach(user => {
        // Count user's orders
        const userOrders = orders.filter(order => order.customerInfo.email === user.email);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone || 'N/A'}</td>
            <td>${formatDate(user.registrationDate)}</td>
            <td>${userOrders.length}</td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewCustomerDetails('${user.id}')">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteCustomer('${user.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        customersTableBody.appendChild(row);
    });
}

// Load bookings data
function loadBookingsData() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    bookingsTableBody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        
        // Format food items
        const foodItems = order.foodCart ? Object.entries(order.foodCart)
            .filter(([_, quantity]) => quantity > 0)
            .map(([id, quantity]) => {
                const product = getProductInfo(id);
                return `${product.name} (${quantity})`;
            })
            .join(', ') : 'Không có';

        row.innerHTML = `
            <td>${order.id || 'N/A'}</td>
            <td>${order.customerInfo.fullName}</td>
            <td>${order.type === 'movie' ? 'Vé xem phim' : 'Vé xe'}</td>
            <td>${order.type === 'movie' ? order.title : `${order.from} - ${order.to}`}</td>
            <td>${order.selectedSeats.join(', ')}</td>
            <td>${foodItems}</td>
            <td>${formatCurrency(order.totalAmount)}</td>
            <td>${formatDate(order.orderDate)}</td>
            <td>
                <select class="form-select form-select-sm" onchange="updateBookingStatus('${order.id}', this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Chờ xử lý</option>
                    <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Đã xác nhận</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Hoàn thành</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Đã hủy</option>
                </select>
            </td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewBookingDetails('${order.id}')">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteBooking('${order.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        bookingsTableBody.appendChild(row);
    });
}

// Get product info
function getProductInfo(productId) {
    const products = {
        'popcorn-small': { name: 'Bắp nhỏ' },
        'popcorn-medium': { name: 'Bắp vừa' },
        'popcorn-large': { name: 'Bắp lớn' },
        'coke': { name: 'Coca Cola' },
        'sprite': { name: 'Sprite' },
        'water': { name: 'Nước suối' }
    };
    return products[productId] || { name: 'Unknown' };
}

// View customer details
function viewCustomerDetails(customerId) {
    // Implement customer details view
    alert('Xem chi tiết khách hàng: ' + customerId);
}

// Delete customer
function deleteCustomer(customerId) {
    if (confirm('Bạn có chắc chắn muốn xóa khách hàng này?')) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(user => user.id !== customerId);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        loadCustomersData();
        loadDashboardData();
    }
}

// View booking details
function viewBookingDetails(bookingId) {
    // Implement booking details view
    alert('Xem chi tiết đơn hàng: ' + bookingId);
}

// Delete booking
function deleteBooking(bookingId) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const updatedOrders = orders.filter(order => order.id !== bookingId);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        loadBookingsData();
        loadDashboardData();
    }
}

// Update booking status
function updateBookingStatus(bookingId, newStatus) {
    if (confirm('Bạn có chắc chắn muốn cập nhật trạng thái đơn hàng này?')) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const orderIndex = orders.findIndex(order => order.id === bookingId);
        
        if (orderIndex !== -1) {
            orders[orderIndex].status = newStatus;
            localStorage.setItem('orders', JSON.stringify(orders));
            alert('Cập nhật trạng thái đơn hàng thành công!');
            loadBookingsData();
        }
    }
}

// Handle logout
logoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
});

// Initialize the page
function init() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
        window.location.href = 'login.html';
        return;
    }

    // Load initial data
    loadDashboardData();
    loadCustomersData();
    loadBookingsData();
}

// Create admin account
function createAdminAccount() {
    const adminUser = {
        id: 'admin001',
        name: 'Admin',
        email: 'admin@ticketbooking.com',
        password: 'admin123',
        role: 'admin',
        registrationDate: new Date().toISOString()
    };

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if admin already exists
    const adminExists = users.some(user => user.email === adminUser.email);
    
    if (!adminExists) {
        // Add admin to users array
        users.push(adminUser);
        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        alert('Tài khoản admin đã được tạo thành công!\nEmail: admin@ticketbooking.com\nMật khẩu: admin123');
    } else {
        alert('Tài khoản admin đã tồn tại!');
    }
}

// Call createAdminAccount when page loads
createAdminAccount();

// Initialize the page
init(); 