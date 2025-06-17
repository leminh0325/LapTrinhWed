// admin.js - Quản lý sách, thành viên, phiếu mượn, dashboard (ẩn tài khoản admin)

// DOM Elements
const totalMembersElement = document.getElementById('totalMembers');
const totalBorrowingsElement = document.getElementById('totalBorrowings');
const booksBeingBorrowedElement = document.getElementById('booksBeingBorrowed');
const membersTableBody = document.getElementById('membersTableBody');
const booksTableBody = document.getElementById('booksTableBody');
const borrowingsTableBody = document.getElementById('borrowingsTableBody');
const overdueTableBody = document.getElementById('overdueTableBody');
const logoutBtn = document.getElementById('logoutBtn');

// Thêm thành viên
const memberForm = document.getElementById('memberForm');
if (memberForm) {
  memberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('memberName').value.trim();
    const email = document.getElementById('memberEmail').value.trim();
    const phone = document.getElementById('memberPhone').value.trim();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const id = 'U' + Date.now();
    users.push({ id, name, email, phone, role: 'user', registrationDate: new Date().toISOString() });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Thêm thành viên thành công!');
    document.getElementById('memberForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addMemberModal')).hide();
    loadMembers();
    loadDashboardData();
  });
}

// Thêm sách
const bookForm = document.getElementById('bookForm');
if (bookForm) {
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const genre = document.getElementById('bookGenre').value.trim();
    const quantity = parseInt(document.getElementById('bookQuantity').value);
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const id = 'B' + Date.now();
    books.push({ id, title, author, genre, quantity, status: 'Đang có' });
    localStorage.setItem('books', JSON.stringify(books));
    alert('Thêm sách thành công!');
    document.getElementById('bookForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addBookModal')).hide();
    loadBooks();
  });
}

// Chuyển tab
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = this.dataset.section;
    showSection(section);
  });
});

function showSection(id) {
  document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
  document.getElementById(`${id}-section`).classList.remove('d-none');
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(navLinks).find(l => l.dataset.section === id);
  if (activeLink) activeLink.classList.add('active');
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN');
}

// Dashboard
function loadDashboardData() {
  const members = JSON.parse(localStorage.getItem('users')) || [];
  const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
  const filteredMembers = members.filter(u => u.role !== 'admin');
  totalMembersElement.textContent = filteredMembers.length;
  totalBorrowingsElement.textContent = borrowings.length;
  const currentlyBorrowed = borrowings.filter(b => b.status !== 'returned').length;
  booksBeingBorrowedElement.textContent = currentlyBorrowed;
}

// Danh sách thành viên (lọc bỏ admin)
function loadMembers() {
  const members = JSON.parse(localStorage.getItem('users')) || [];
  const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
  membersTableBody.innerHTML = '';
  members.filter(member => member.role !== 'admin').forEach(member => {
    const borrowCount = borrowings.filter(b => b.memberEmail === member.email).length;
    const row = `<tr>
      <td>${member.id}</td>
      <td>${member.name}</td>
      <td>${member.email}</td>
      <td>${member.phone || 'N/A'}</td>
      <td>${formatDate(member.registrationDate)}</td>
      <td>${borrowCount}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteMember('${member.id}')">Xóa</button></td>
    </tr>`;
    membersTableBody.insertAdjacentHTML('beforeend', row);
  });
}

// Sách
function loadBooks() {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  booksTableBody.innerHTML = '';
  books.forEach(book => {
    const row = `<tr>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.quantity}</td>
      <td>${book.status || 'Đang có'}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteBook('${book.id}')">Xóa</button></td>
    </tr>`;
    booksTableBody.insertAdjacentHTML('beforeend', row);
  });
}

// Mượn trả sách
function loadBorrowings() {
  const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
  borrowingsTableBody.innerHTML = '';
  borrowings.forEach(b => {
    const row = `<tr>
      <td>${b.id}</td>
      <td>${b.memberName}</td>
      <td>${b.bookTitle}</td>
      <td>${formatDate(b.borrowDate)}</td>
      <td>${formatDate(b.returnDate)}</td>
      <td>
        <select class="form-select form-select-sm" onchange="updateBorrowingStatus('${b.id}', this.value)">
          <option value="borrowed" ${b.status === 'borrowed' ? 'selected' : ''}>Đang mượn</option>
          <option value="returned" ${b.status === 'returned' ? 'selected' : ''}>Đã trả</option>
        </select>
      </td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteBorrowing('${b.id}')">Xóa</button></td>
    </tr>`;
    borrowingsTableBody.insertAdjacentHTML('beforeend', row);
  });
}

// Sách quá hạn
function loadOverdue() {
  const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
  const now = new Date();
  overdueTableBody.innerHTML = '';
  borrowings.filter(b => b.status === 'borrowed' && new Date(b.returnDate) < now)
    .forEach(b => {
      const row = `<tr>
        <td>${b.id}</td>
        <td>${b.memberName}</td>
        <td>${b.bookTitle}</td>
        <td>${formatDate(b.borrowDate)}</td>
        <td>${formatDate(b.returnDate)}</td>
        <td>${formatDate(new Date())}</td>
        <td><span class="badge bg-danger">Quá hạn</span></td>
      </tr>`;
      overdueTableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Cập nhật trạng thái mượn
function updateBorrowingStatus(id, newStatus) {
  const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
  const index = borrowings.findIndex(b => b.id === id);
  if (index !== -1) {
    borrowings[index].status = newStatus;
    localStorage.setItem('borrowings', JSON.stringify(borrowings));
    loadBorrowings();
    loadDashboardData();
    loadOverdue();
  }
}

// Xóa thành viên, sách, mượn
function deleteBorrowing(id) {
  if (confirm('Xóa phiếu mượn này?')) {
    const borrowings = JSON.parse(localStorage.getItem('borrowings')) || [];
    const updated = borrowings.filter(b => b.id !== id);
    localStorage.setItem('borrowings', JSON.stringify(updated));
    loadBorrowings();
    loadDashboardData();
    loadOverdue();
  }
}

function deleteMember(id) {
  if (confirm('Xóa thành viên này?')) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updated = users.filter(u => u.id !== id);
    localStorage.setItem('users', JSON.stringify(updated));
    loadMembers();
    loadDashboardData();
  }
}

function deleteBook(id) {
  if (confirm('Xóa sách này?')) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updated = books.filter(b => b.id !== id);
    localStorage.setItem('books', JSON.stringify(updated));
    loadBooks();
  }
}

// Đăng xuất
logoutBtn.addEventListener('click', () => {
  if (confirm('Đăng xuất?')) {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  }
});

// Tạo admin mặc định
function createAdminAccount() {
  const adminUser = {
    id: 'admin001',
    name: 'Admin',
    email: 'admin@library.com',
    password: 'admin123',
    role: 'admin',
    registrationDate: new Date().toISOString()
  };
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (!users.some(u => u.email === adminUser.email)) {
    users.push(adminUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Tài khoản admin đã được tạo: admin@library.com / admin123');
  }
}

// Khởi động hệ thống
function init() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser || currentUser.role !== 'admin') {
    window.location.href = 'login.html';
    return;
  }
  loadDashboardData();
  loadMembers();
  loadBooks();
  loadBorrowings();
  loadOverdue();
}

createAdminAccount();
init();
