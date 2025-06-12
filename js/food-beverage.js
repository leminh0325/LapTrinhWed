// Dữ liệu sản phẩm
const products = {
    'popcorn-small': {
        name: 'Bắp nhỏ',
        price: 45000,
        image: 'img/popcorn-small.jpg'
    },
    'popcorn-medium': {
        name: 'Bắp vừa',
        price: 65000,
        image: 'img/popcorn-medium.jpg'
    },
    'popcorn-large': {
        name: 'Bắp lớn',
        price: 85000,
        image: 'img/popcorn-large.jpg'
    },
    'coke': {
        name: 'Coca Cola',
        price: 35000,
        image: 'img/coke.jpg'
    },
    'sprite': {
        name: 'Sprite',
        price: 35000,
        image: 'img/sprite.jpg'
    },
    'water': {
        name: 'Nước suối',
        price: 20000,
        image: 'img/water.jpg'
    }
};

// Giỏ hàng
let cart = {};

// Khởi tạo giỏ hàng từ session storage nếu có
function initCart() {
    const savedCart = sessionStorage.getItem('foodCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Chọn sản phẩm
function selectItem(productId) {
    const card = document.querySelector(`[onclick="selectItem('${productId}')"]`);
    card.classList.toggle('selected');
    
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    
    updateQuantityDisplay(productId);
    updateCartDisplay();
}

// Tăng số lượng
function increaseQuantity(productId) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    cart[productId]++;
    updateQuantityDisplay(productId);
    updateCartDisplay();
}

// Giảm số lượng
function decreaseQuantity(productId) {
    if (cart[productId] > 0) {
        cart[productId]--;
        if (cart[productId] === 0) {
            delete cart[productId];
            const card = document.querySelector(`[onclick="selectItem('${productId}')"]`);
            card.classList.remove('selected');
        }
        updateQuantityDisplay(productId);
        updateCartDisplay();
    }
}

// Cập nhật hiển thị số lượng
function updateQuantityDisplay(productId) {
    const quantityElement = document.getElementById(`${productId}-quantity`);
    if (quantityElement) {
        quantityElement.textContent = cart[productId] || 0;
    }
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    // Xóa nội dung cũ
    cartItems.innerHTML = '';
    
    let subtotal = 0;
    
    // Thêm các sản phẩm vào giỏ hàng
    for (const [productId, quantity] of Object.entries(cart)) {
        if (quantity > 0) {
            const product = products[productId];
            const itemTotal = product.price * quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-0">${product.name}</h6>
                        <small class="text-muted">${formatCurrency(product.price)} x ${quantity}</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="me-3">${formatCurrency(itemTotal)}</span>
                        <button class="btn btn-sm btn-outline-danger" onclick="decreaseQuantity('${productId}')">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        }
    }
    
    // Cập nhật tổng tiền
    subtotalElement.textContent = formatCurrency(subtotal);
    totalElement.textContent = formatCurrency(subtotal);
    
    // Lưu giỏ hàng vào session storage
    sessionStorage.setItem('foodCart', JSON.stringify(cart));
}

// Định dạng tiền tệ
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Tiến hành thanh toán
function proceedToPayment() {
    // Lưu thông tin giỏ hàng vào session storage
    sessionStorage.setItem('foodCart', JSON.stringify(cart));
    
    // Chuyển hướng đến trang thanh toán
    window.location.href = 'payment.html';
}

// Bỏ qua dịch vụ đồ ăn
function skipFoodService() {
    // Xóa giỏ hàng
    sessionStorage.removeItem('foodCart');
    
    // Chuyển hướng đến trang thanh toán
    window.location.href = 'payment.html';
}

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', initCart); 