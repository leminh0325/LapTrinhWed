// Sample data for movies
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        image: "img/A1.jpg",
        description: "Sau sự kiện tàn phá của Avengers: Infinity War, vũ trụ đang trong tình trạng đổ nát.",
        duration: "181 phút",
        rating: 4.8,
        price: "150.000đ",
        showtimes: ["10:00", "13:00", "16:00", "19:00"]
    },
    {
        id: 2,
        title: "Spider-Man: No Way Home",
        image: "img/A2.png",
        description: "Peter Parker phải đối mặt với những thách thức mới khi danh tính của anh bị tiết lộ.",
        duration: "148 phút",
        rating: 4.7,
        price: "150.000đ",
        showtimes: ["11:00", "14:00", "17:00", "20:00"]
    },
    {
        id: 3,
        title: "The Batman",
        image: "img/A3.jpg",
        description: "Khi Riddler bắt đầu một chuỗi các vụ giết người bí ẩn, Batman phải điều tra.",
        duration: "176 phút",
        rating: 4.6,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    },
    {
        id: 4,
        title: "Black Panther: Wakanda Forever",
        image: "img/A4.jpg",
        description: "Wakanda phải đối mặt với những thách thức mới sau cái chết của Vua T'Challa.",
        duration: "161 phút",
        rating: 4.5,
        price: "150.000đ",
        showtimes: ["10:30", "13:30", "16:30", "19:30"]
    },
    {
        id: 5,
        title: "Doctor Strange in the Multiverse of Madness",
        image: "img/A5.jpg",
        description: "Doctor Strange phải đối mặt với những thực tại thay thế và những phiên bản khác của chính mình.",
        duration: "126 phút",
        rating: 4.4,
        price: "150.000đ",
        showtimes: ["11:30", "14:30", "17:30", "20:30"]
    },
    {
        id: 6,
        title: "Mật vụ ong - The Beekeeper",
        image: "img/A9.jpg",
        description: "Mật vụ ong là một bộ phim hành động mãn nhãn với sự trở lại của diễn viên tài năng Jason Statham.",
        duration: "152 phút",
        rating: 4.3,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    },
    {
        id: 7,
        title: "Võ sĩ giác đấu II - Gladiator 2",
        image: "img/A10.jpg",
        description: "Võ sĩ giác đấu II là một sự trở lại đầy ngoạn mục của series huyền thoại Gladiator.",
        duration: "152 phút",
        rating: 4.3,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    },
    {
        id: 8,
        title: "Captain Marvel 2 (Đại uý Marvel 2)",
        image: "img/A11.jpg",
        description: "Captain Marvel 2, còn được biết đến với tên gọi Biệt đội Marvel, là một phần quan trọng trong Vũ trụ Điện ảnh Marvel",
        duration: "152 phút",
        rating: 4.3,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    },
    {
        id: 9,
        title: "Axel F Beverly Hills Cop 4: Axel F 2024",
        image: "img/A12.jpg",
        description: "Axel F Beverly Hills Cop 4 đánh dấu sự trở lại của thám tử Axel Foley do Eddie Murphy thủ vai.",
        duration: "152 phút",
        rating: 4.3,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    },
    {
        id: 10,
        title: "Mật vụ Kingsman - Kingsman",
        image: "img/A13.jpg",
        description: "Series Kingsman nổi bật với phong cách hành động sáng tạo và đầy màu sắc.",
        duration: "152 phút",
        rating: 4.3,
        price: "150.000đ",
        showtimes: ["12:00", "15:00", "18:00", "21:00"]
    }
];

// Sample data for bus routes
const busRoutes = [
    {
        id: 1,
        from: "Hà Nội",
        to: "Hồ Chí Minh",
        departureTime: "08:00",
        arrivalTime: "20:00",
        price: "800.000đ",
        seats: 45,
        availableSeats: 20,
        busType: "Giường nằm",
        company: "Hoàng Long"
    },
    {
        id: 2,
        from: "Hà Nội",
        to: "Đà Nẵng",
        departureTime: "19:00",
        arrivalTime: "07:00",
        price: "500.000đ",
        seats: 45,
        availableSeats: 15,
        busType: "Giường nằm",
        company: "Mai Linh"
    },
    {
        id: 3,
        from: "Hồ Chí Minh",
        to: "Nha Trang",
        departureTime: "08:30",
        arrivalTime: "16:30",
        price: "300.000đ",
        seats: 45,
        availableSeats: 25,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 4,
        from: "Hà Nội",
        to: "Hải Phòng",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Hải Âu"
    },
    {
        id: 5,
        from: "Hồ Chí Minh",
        to: "Cần Thơ",
        departureTime: "06:00",
        arrivalTime: "10:00",
        price: "200.000đ",
        seats: 45,
        availableSeats: 18,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 6,
        from: "Hà Nội",
        to: "Hồ Chí Minh",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 7,
        from: "Đăk Nông",
        to: "Hồ Chí Minh",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 8,
        from: "Hồ Chí Minh",
        to: "Lâm Đồng",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 9,
        from: "Cao Bằng",
        to: "Bắc Ninh",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 10,
        from: "Hà Nội",
        to: "Huế",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 11,
        from: "Đăk Lắk",
        to: "Nha Trang",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    },
    {
        id: 12,
        from: "Gia Lai",
        to: "Vũng Tàu",
        departureTime: "07:00",
        arrivalTime: "09:00",
        price: "150.000đ",
        seats: 45,
        availableSeats: 30,
        busType: "Ghế ngồi",
        company: "Phương Trang"
    }
];

// Sample data for news
const news = [
    {
        id: 1,
        title: "Top 10 phim bom tấn sắp ra mắt năm 2024",
        image: "img/A6.jpg",
        date: "2024-01-15",
        summary: "Khám phá những bộ phim bom tấn đáng chờ đợi nhất trong năm 2024."
    },
    {
        id: 2,
        title: "Công nghệ mới trong ngành vận tải",
        image: "img/A7.jpg",
        date: "2024-01-14",
        summary: "Những đổi mới công nghệ đang thay đổi ngành vận tải hành khách."
    },
    {
        id: 3,
        title: "Hướng dẫn đặt vé trực tuyến an toàn",
        image: "img/A8.png",
        date: "2024-01-13",
        summary: "Các bước đặt vé trực tuyến an toàn và hiệu quả."
    }
]; 