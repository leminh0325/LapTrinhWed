// Admin credentials (in a real application, these would be stored securely on the server)
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
};

// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        // Store login state if remember me is checked
        if (rememberMe) {
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
        } else {
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUsername', username);
        }

        // Redirect to admin dashboard
        window.location.href = 'admin.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }

    return false;
}

// Check if user is already logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true' || 
                      sessionStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        window.location.href = 'admin.html';
    }
}

// Check login status when page loads
document.addEventListener('DOMContentLoaded', checkLoginStatus); 