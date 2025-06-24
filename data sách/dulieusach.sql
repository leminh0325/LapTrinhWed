-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jun 24, 2025 at 05:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dữ liệu sách`
--

-- --------------------------------------------------------

--
-- Table structure for table `sach`
--

CREATE TABLE `sach` (
  `id` int(11) NOT NULL,
  `TenSach` varchar(255) DEFAULT NULL,
  `TacGia` varchar(255) DEFAULT NULL,
  `idTL` int(11) DEFAULT NULL,
  `NamXuatBan` int(11) DEFAULT NULL,
  `NhaXuatBan` varchar(255) DEFAULT NULL,
  `SoTrang` int(11) DEFAULT NULL,
  `TomTat` text DEFAULT NULL,
  `AnhBia` varchar(255) DEFAULT NULL,
  `TinhTrang` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sach`
--

INSERT INTO `sach` (`id`, `TenSach`, `TacGia`, `idTL`, `NamXuatBan`, `NhaXuatBan`, `SoTrang`, `TomTat`, `AnhBia`, `TinhTrang`) VALUES
(1, 'Đắc nhân tâm', 'Dale Carnegie', 1, 1936, 'NXB Tổng hợp TP.HCM', 320, 'Cẩm nang về giao tiếp và nghệ thuật thuyết phục người khác.', 'img/dac_nhan_tam.jpg', 'Còn'),
(2, '7 thói quen hiệu quả', 'Stephen R. Covey', 1, 1989, 'NXB Trẻ', 370, 'Giúp bạn phát triển bản thân thông qua 7 thói quen thiết yếu.', 'img/7_thoi_quen.jpg', 'Còn'),
(3, 'Khéo ăn nói sẽ có được thiên hạ', 'Trác Nhã', 1, 2015, 'NXB Lao Động', 292, 'Cải thiện kỹ năng giao tiếp hiệu quả trong công việc và cuộc sống.', 'img/kheo_an_noi.jpg', 'Đang mượn'),
(4, 'Tư duy tích cực tạo thành công', 'Napoleon Hill', 1, 2000, 'NXB Văn Hóa', 280, 'Tư duy tích cực sẽ mở lối cho thành công và hạnh phúc.', 'img/tu_duy_tich_cuc.jpg', 'Còn'),
(5, 'Sức mạnh của thói quen', 'Charles Duhigg', 1, 2012, 'NXB Thế Giới', 380, 'Lý giải vì sao thói quen hình thành và ảnh hưởng thế nào đến cuộc sống.', 'img/suc_manh_thoi_quen.jpg', 'Còn'),
(6, 'Quẳng gánh lo đi và vui sống', 'Dale Carnegie', 1, 1948, 'NXB Tổng hợp', 300, 'Cách vượt qua lo lắng và sống một cuộc đời nhẹ nhàng.', 'img/quang_ganh_lo.jpg', 'Đang mượn'),
(7, 'Hạt giống tâm hồn', 'Nhiều tác giả', 1, 2002, 'NXB Trẻ', 250, 'Những câu chuyện ý nghĩa truyền cảm hứng sống tích cực.', 'img/hat_giong_tam_hon.jpg', 'Còn'),
(8, 'Đi tìm lẽ sống', 'Viktor E. Frankl', 1, 1946, 'NXB Trẻ', 240, 'Một tác phẩm kinh điển về ý nghĩa cuộc sống từ trại tập trung.', 'img/di_tim_le_song.jpg', 'Còn'),
(9, 'Tôi tài giỏi, bạn cũng thế!', 'Adam Khoo', 1, 2007, 'NXB Trẻ', 328, 'Giúp bạn trẻ phát huy khả năng bản thân để học tập hiệu quả.', 'img/toi_tai_gioi.jpg', 'Còn'),
(10, 'Thay thái độ, đổi cuộc đời', 'Jeff Keller', 1, 1999, 'NXB Lao Động', 250, 'Thái độ tích cực có thể thay đổi vận mệnh mỗi người.', 'img/thay_thai_do.jpg', 'Đang mượn'),
(11, 'Người nam châm', 'Jack Canfield', 1, 2009, 'NXB Phụ Nữ', 280, 'Luật hấp dẫn và cách thu hút điều mình muốn.', 'img/nguoi_nam_cham.jpg', 'Còn'),
(12, 'Hành trình về phương Đông', 'Baird T. Spalding', 1, 1924, 'NXB Văn Hóa', 300, 'Ghi chép khám phá tinh thần phương Đông.', 'img/hanh_trinh_dong.jpg', 'Còn'),
(13, 'Đừng lựa chọn an nhàn khi còn trẻ', 'Cảnh Thiên', 1, 2018, 'NXB Lao Động', 280, 'Khơi dậy khát vọng sống mạnh mẽ của tuổi trẻ.', 'img/an_nhan_tre.jpg', 'Còn'),
(14, 'Đời ngắn đừng ngủ dài', 'Robin Sharma', 1, 2016, 'NXB Trẻ', 180, 'Sống hiệu quả, ngắn gọn và truyền cảm hứng.', 'img/doi_ngan.jpg', 'Còn'),
(15, 'Tuổi trẻ đáng giá bao nhiêu', 'Rosie Nguyễn', 1, 2016, 'NXB Hội Nhà Văn', 300, 'Chia sẻ kinh nghiệm sống, học và đi của người trẻ.', 'img/tuoi_tre.jpg', 'Đang mượn'),
(16, 'Hãy sống như người Nhật', 'Trần Đình Phương', 1, 2017, 'NXB Thanh Niên', 200, 'Bài học về tính kỷ luật và tinh thần Nhật Bản.', 'img/nguoi_nhat.jpg', 'Còn'),
(17, 'Không bao giờ là thất bại - Tất cả là thử thách', 'Chung Ju Yung', 1, 1998, 'NXB Trẻ', 290, 'Tự truyện của nhà sáng lập Hyundai.', 'img/hyundai.jpg', 'Còn'),
(18, 'Bí mật tư duy triệu phú', 'T. Harv Eker', 1, 2005, 'NXB Trẻ', 250, 'Khác biệt trong cách tư duy giữa người giàu và nghèo.', 'img/tu_duy_trieu_phu.jpg', 'Còn'),
(19, 'Giới hạn của bạn chỉ là xuất phát điểm của tôi', 'Mèo Maverick', 1, 2019, 'NXB Dân Trí', 260, 'Truyền động lực vươn lên trong khó khăn.', 'img/xuat_phat_diem.jpg', 'Đang mượn'),
(20, 'Làm chủ tư duy, thay đổi vận mệnh', 'Adam Khoo', 1, 2010, 'NXB Trẻ', 320, 'Kích hoạt khả năng kiểm soát cuộc sống của bạn.', 'img/lam_chu_tu_duy.jpg', 'Còn'),
(21, 'Dế Mèn phiêu lưu ký', 'Tô Hoài', 2, 1941, 'NXB Kim Đồng', 220, 'Cuốn truyện kể về chuyến phiêu lưu hấp dẫn của Dế Mèn.', 'img/de_men.jpg', 'Còn'),
(22, 'Totto-chan bên cửa sổ', 'Tetsuko Kuroyanagi', 2, 1981, 'NXB Kim Đồng', 320, 'Hồi ký về một cô bé Nhật Bản và ngôi trường kỳ lạ.', 'img/totto_chan.jpg', 'Còn'),
(23, 'Hoàng tử bé', 'Antoine de Saint-Exupéry', 2, 1943, 'NXB Trẻ', 112, 'Câu chuyện triết lý về một hoàng tử nhỏ du hành qua các hành tinh.', 'img/hoang_tu_be.jpg', 'Còn'),
(24, 'Charlie và nhà máy sô cô la', 'Roald Dahl', 2, 1964, 'NXB Kim Đồng', 200, 'Cuộc phiêu lưu kỳ lạ của cậu bé Charlie trong nhà máy sô cô la.', 'img/charlie.jpg', 'Đang mượn'),
(25, 'Cuộc phiêu lưu của Tom Sawyer', 'Mark Twain', 2, 1876, 'NXB Kim Đồng', 300, 'Những trò nghịch ngợm và cuộc phiêu lưu thú vị của Tom Sawyer.', 'img/tom_sawyer.jpg', 'Còn'),
(26, 'Cậu bé rừng xanh', 'Rudyard Kipling', 2, 1894, 'NXB Văn Học', 260, 'Truyện kể về cậu bé Mowgli được nuôi dưỡng bởi bầy sói.', 'img/cau_be_rung_xanh.jpg', 'Còn'),
(27, 'Không gia đình', 'Hector Malot', 2, 1878, 'NXB Văn Học', 420, 'Hành trình lưu lạc đầy gian truân của cậu bé Remi.', 'img/khong_gia_dinh.jpg', 'Còn'),
(28, 'Nhóc Nicolas', 'Rene Goscinny', 2, 1959, 'NXB Kim Đồng', 140, 'Tập truyện ngắn hài hước về cậu bé Nicolas và bạn bè.', 'img/nhoc_nicolas.jpg', 'Đang mượn'),
(29, 'Alice ở xứ sở thần tiên', 'Lewis Carroll', 2, 1865, 'NXB Kim Đồng', 200, 'Alice lạc vào thế giới thần tiên kỳ diệu.', 'img/alice.jpg', 'Còn'),
(30, 'Peter Pan', 'J.M. Barrie', 2, 1911, 'NXB Văn Học', 180, 'Chuyện về cậu bé không bao giờ lớn và vùng đất Neverland.', 'img/peter_pan.jpg', 'Còn'),
(31, 'Chú bé đánh giày', 'Nguyễn Ngọc Thuần', 2, 2005, 'NXB Kim Đồng', 160, 'Câu chuyện cảm động về nghị lực và ước mơ của trẻ em nghèo.', 'img/chu_be_danh_giay.jpg', 'Đang mượn'),
(32, 'Kính Vạn Hoa', 'Nguyễn Nhật Ánh', 2, 1995, 'NXB Trẻ', 500, 'Những câu chuyện học trò hài hước và ý nghĩa.', 'img/kinh_van_hoa.jpg', 'Còn'),
(33, 'Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Nhật Ánh', 2, 2010, 'NXB Trẻ', 250, 'Chuyện tuổi thơ vùng quê với nhiều kỷ niệm đẹp.', 'img/hoa_vang_co_xanh.jpg', 'Còn'),
(34, 'Mặt trời bé con', 'Nguyễn Nhật Ánh', 2, 2021, 'NXB Trẻ', 280, 'Truyện thiếu nhi nhẹ nhàng và nhân văn.', 'img/mat_troi_be_con.jpg', 'Còn'),
(35, 'Chuyện con mèo dạy hải âu bay', 'Luis Sepúlveda', 2, 1996, 'NXB Kim Đồng', 130, 'Câu chuyện cảm động về tình bạn và lòng dũng cảm.', 'img/meo_va_hai_au.jpg', 'Còn'),
(36, 'Con chó nhỏ mang giỏ hoa hồng', 'Nguyễn Nhật Ánh', 2, 2013, 'NXB Trẻ', 180, 'Chuyện kể bằng góc nhìn của những chú chó.', 'img/cho_nho.jpg', 'Đang mượn'),
(37, 'Tí Hon', 'Grimm Brothers', 2, 1812, 'NXB Kim Đồng', 150, 'Câu chuyện cổ tích về chàng trai nhỏ bé nhưng thông minh.', 'img/ti_hon.jpg', 'Còn'),
(38, 'Ba chàng lính ngự lâm', 'Alexandre Dumas', 2, 1844, 'NXB Kim Đồng', 450, 'Phiêu lưu hành động của các hiệp sĩ Pháp.', 'img/ngu_lam.jpg', 'Còn'),
(39, 'Thần thoại Hy Lạp', 'Nhiều tác giả', 2, 1950, 'NXB Giáo Dục', 380, 'Tuyển tập các thần thoại Hy Lạp hấp dẫn dành cho thiếu nhi.', 'img/than_thoai_hy_lap.jpg', 'Còn'),
(40, 'Con chim trốn tuyết', 'Paul Gallico', 2, 1964, 'An tiêm', 170, 'Câu chuyện phiêu lưu kỳ thú.', 'img/nguoi_tuyet.jpg', 'Còn'),
(41, 'Cha giàu cha nghèo', 'Robert Kiyosaki', 3, 1997, 'NXB Trẻ', 320, 'Giáo dục tài chính cá nhân, phân biệt tư duy giàu – nghèo.', 'img/cha_giau_cha_ngheo.jpg', 'Còn'),
(42, 'Người giàu nhất thành Babylon', 'George S. Clason', 3, 1926, 'NXB Lao Động', 210, 'Các quy tắc tài chính cổ xưa ứng dụng đến hiện đại.', 'img/babylon.jpg', 'Còn'),
(43, 'Thiên nga đen', 'Nassim Nicholas Taleb', 3, 2007, 'NXB Trẻ', 480, 'Những sự kiện không thể đoán trước làm thay đổi thế giới.', 'img/thien_nga_den.jpg', 'Còn'),
(44, 'Tư duy nhanh và chậm', 'Daniel Kahneman', 3, 2011, 'NXB Thế Giới', 600, 'Cách não bộ đưa ra quyết định tài chính sai lầm.', 'img/tu_duy_nhanh_cham.jpg', 'Đang mượn'),
(45, 'Chiến lược đại dương xanh', 'W. Chan Kim', 3, 2005, 'NXB Lao Động', 300, 'Tạo thị trường mới thay vì cạnh tranh cũ.', 'img/dai_duong_xanh.jpg', 'Còn'),
(46, 'Dạy con làm giàu - Tập 2', 'Robert Kiyosaki', 3, 2000, 'NXB Trẻ', 350, 'Kỹ năng đầu tư và quản lý tài sản từ nhỏ.', 'img/day_con_lam_giau2.jpg', 'Còn'),
(47, 'Bí mật của Phan Thiên Ân', 'Bùi Quốc Bảo', 3, 2015, 'NXB Tổng Hợp', 320, 'Truyện giả tưởng truyền cảm hứng về tư duy làm giàu.', 'img/phan_thien_an.jpg', 'Còn'),
(48, 'Nghĩ giàu làm giàu', 'Napoleon Hill', 3, 1937, 'NXB Trẻ', 400, 'Sách kinh điển về phát triển bản thân và tài chính.', 'img/nghi_giau.jpg', 'Đang mượn'),
(49, 'Làm chủ đồng tiền', 'Dave Ramsey', 3, 2010, 'NXB Thế Giới', 260, 'Cách quản lý nợ và tài chính cá nhân hiệu quả.', 'img/lam_chu_tien.jpg', 'Còn'),
(50, 'Đầu tư thông minh', 'Benjamin Graham', 3, 1949, 'NXB Kinh Tế', 500, 'Nền tảng đầu tư giá trị cho nhà đầu tư dài hạn.', 'img/dau_tu_thong_minh.jpg', 'Còn'),
(51, 'Cuộc cách mạng một cọng rơm', 'Masanobu Fukuoka', 3, 1975, 'NXB Trẻ', 250, 'Tư duy kinh tế bền vững từ nông nghiệp tự nhiên.', 'img/mot_cong_rom.jpg', 'Còn'),
(52, 'Thịnh vượng tài chính tuổi 30', 'Nhiều tác giả', 3, 2018, 'NXB Thanh Niên', 300, 'Kỹ năng tài chính cần thiết cho người trẻ.', 'img/tai_chinh_30.jpg', 'Đang mượn'),
(53, 'Tiền không mua được gì?', 'Michael J. Sandel', 3, 2012, 'NXB Tri Thức', 370, 'Triết học kinh tế về đạo đức và thị trường.', 'img/tien_khong_mua.jpg', 'Còn'),
(54, 'Kinh tế học hài hước', 'Steven Levitt', 3, 2005, 'NXB Trẻ', 330, 'Góc nhìn mới mẻ về kinh tế và hành vi con người.', 'img/kinh_te_hai.jpg', 'Còn'),
(55, 'Sách lược tài chính cá nhân', 'Carl Richards', 3, 2014, 'NXB Lao Động', 280, 'Bí quyết tài chính qua những sơ đồ đơn giản.', 'img/tai_chinh_ca_nhan.jpg', 'Còn'),
(56, 'Bí mật tư duy triệu phú', 'T. Harv Eker', 3, 2005, 'NXB Trẻ', 250, 'Tư duy thành công của người giàu.', 'img/trieu_phu.jpg', 'Đang mượn'),
(57, 'Hiểu về trái tim tài chính', 'Lê Thẩm Dương', 3, 2020, 'NXB Thanh Niên', 200, 'Những chia sẻ thực tế từ giảng đường kinh tế.', 'img/tham_duong.jpg', 'Còn'),
(58, 'Làm giàu từ chứng khoán', 'William J. O’Neil', 3, 1988, 'NXB Trẻ', 360, 'Chiến lược đầu tư cổ phiếu hiệu quả.', 'img/chung_khoan.jpg', 'Còn'),
(59, 'Kinh tế học cho mọi người', 'Thomas Sowell', 3, 2014, 'NXB Giáo Dục', 420, 'Giải thích kinh tế học dễ hiểu nhất.', 'img/kinh_te_moi_nguoi.jpg', 'Còn'),
(60, 'Trò chơi tiền bạc', 'Tony Robbins', 3, 2015, 'NXB Thế Giới', 480, 'Quản lý tiền bạc như người thành công.', 'img/tro_choi_tien.jpg', 'Còn'),
(61, 'Clean Code', 'Robert C. Martin', 4, 2008, 'NXB Khoa Học & KT', 464, 'Viết mã sạch, dễ đọc và dễ bảo trì.', 'img/clean_code.jpg', 'Còn'),
(62, 'The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 4, 1999, 'NXB Trẻ', 352, 'Kỹ năng lập trình chuyên nghiệp và hiệu quả.', 'img/pragmatic.jpg', 'Còn'),
(63, 'Code Complete', 'Steve McConnell', 4, 2004, 'NXB Công Nghệ', 960, 'Tổng hợp kinh nghiệm lập trình thực tế.', 'img/code_complete.jpg', 'Đang mượn'),
(64, 'Structure and Interpretation of Computer Programs', 'Harold Abelson', 4, 1996, 'MIT Press', 657, 'Lập trình căn bản bằng Scheme, tư duy logic.', 'img/sicp.jpg', 'Còn'),
(65, 'Introduction to Algorithms', 'Thomas H. Cormen', 4, 2009, 'NXB KHTN', 1312, 'Giáo trình giải thuật nổi tiếng thế giới.', 'img/algorithms.jpg', 'Còn'),
(66, 'HTML & CSS: Design and Build Websites', 'Jon Duckett', 4, 2011, 'NXB Web Dev', 490, 'Lập trình web cơ bản dành cho người mới.', 'img/html_css.jpg', 'Còn'),
(67, 'JavaScript: The Good Parts', 'Douglas Crockford', 4, 2008, 'O\'Reilly', 176, 'Cốt lõi tinh túy của JavaScript.', 'img/js_good_parts.jpg', 'Còn'),
(68, 'Python Crash Course', 'Eric Matthes', 4, 2016, 'NXB CNTT', 544, 'Python căn bản và dự án thực tế.', 'img/python_crash.jpg', 'Còn'),
(69, 'You Don’t Know JS', 'Kyle Simpson', 4, 2015, 'NXB Web Dev', 300, 'Sách JS chuyên sâu, tư duy từ gốc.', 'img/ydkjs.jpg', 'Đang mượn'),
(70, 'Automate the Boring Stuff with Python', 'Al Sweigart', 4, 2015, 'NXB CNTT', 504, 'Tự động hóa công việc bằng Python.', 'img/automate.jpg', 'Còn'),
(71, 'Computer Networking', 'James Kurose', 4, 2012, 'NXB Giáo Dục', 890, 'Cơ bản về mạng máy tính hiện đại.', 'img/networking.jpg', 'Còn'),
(72, 'Operating Systems: Three Easy Pieces', 'Remzi Arpaci-Dusseau', 4, 2013, 'NXB Hệ Thống', 700, 'Giới thiệu hệ điều hành dễ hiểu.', 'img/os_3_pieces.jpg', 'Còn'),
(73, 'Deep Learning', 'Ian Goodfellow', 4, 2016, 'MIT Press', 800, 'Cơ bản và nâng cao về học sâu.', 'img/deep_learning.jpg', 'Còn'),
(74, 'Artificial Intelligence: A Modern Approach', 'Stuart Russell', 4, 2020, 'NXB AI', 1132, 'Tổng quan toàn diện về AI.', 'img/ai_ama.jpg', 'Đang mượn'),
(75, 'Linux Pocket Guide', 'Daniel J. Barrett', 4, 2016, 'O\'Reilly', 250, 'Tài liệu tra cứu nhanh về Linux.', 'img/linux_pocket.jpg', 'Còn'),
(76, 'Design Patterns', 'Erich Gamma', 4, 1994, 'Addison-Wesley', 395, 'Các mẫu thiết kế phần mềm OOP.', 'img/design_patterns.jpg', 'Còn'),
(77, 'Head First Java', 'Kathy Sierra', 4, 2005, 'O\'Reilly', 720, 'Học Java qua hình ảnh sinh động.', 'img/head_java.jpg', 'Còn'),
(78, 'Refactoring', 'Martin Fowler', 4, 2018, 'Addison-Wesley', 448, 'Tái cấu trúc mã nguồn sạch hơn.', 'img/refactoring.jpg', 'Còn'),
(79, 'C Programming Language', 'Brian W. Kernighan', 4, 1988, 'Prentice Hall', 288, 'Kinh điển về lập trình C.', 'img/c_lang.jpg', 'Còn'),
(80, 'Designing Data-Intensive Applications', 'Martin Kleppmann', 4, 2017, 'O\'Reilly', 616, 'Thiết kế hệ thống dữ liệu lớn.', 'img/data_apps.jpg', 'Còn'),
(81, 'Truyện Kiều', 'Nguyễn Du', 5, 1820, 'NXB Văn Học', 400, 'Tác phẩm thơ lục bát nổi tiếng, bi kịch nàng Kiều.', 'img/truyen_kieu.jpg', 'Còn'),
(82, 'Chí Phèo', 'Nam Cao', 5, 1941, 'NXB Văn Học', 120, 'Câu chuyện bi kịch về người nông dân bị tha hóa.', 'img/chi_pheo.jpg', 'Còn'),
(83, 'Số đỏ', 'Vũ Trọng Phụng', 5, 1936, 'NXB Trẻ', 260, 'Truyện trào phúng nổi bật về xã hội nửa tây nửa ta.', 'img/so_do.jpg', 'Đang mượn'),
(84, 'Tắt đèn', 'Ngô Tất Tố', 5, 1939, 'NXB Văn Học', 210, 'Phản ánh nỗi khổ người nông dân dưới sưu thuế.', 'img/tat_den.jpg', 'Còn'),
(85, 'Những tấm lòng cao cả', 'Edmondo De Amicis', 5, 1886, 'NXB Văn Học', 320, 'Tác phẩm cảm động về lòng nhân ái, sự hi sinh và đạo đức của học sinh Ý qua từng câu chuyện nhỏ trong suốt một năm học. Qua lời kể của cậu bé Enrico, ta cảm nhận được giá trị giáo dục sâu sắc và tinh thần yêu nước.', 'img/ngoi_truong.jpg', 'Còn'),
(86, 'Lão Hạc', 'Nam Cao', 5, 1943, 'NXB Văn Học', 80, 'Truyện ngắn cảm động về tình cha con và số phận.', 'img/lao_hac.jpg', 'Còn'),
(87, 'Vợ nhặt', 'Kim Lân', 5, 1962, 'NXB Trẻ', 150, 'Tình người trong nạn đói 1945.', 'img/vo_nhat.jpg', 'Còn'),
(88, 'Tuổi thơ dữ dội', 'Phùng Quán', 5, 1988, 'NXB Kim Đồng', 400, 'Câu chuyện cảm động về thiếu niên kháng chiến.', 'img/tuoi_tho_du_doi.jpg', 'Đang mượn'),
(89, 'Chiếc lược ngà', 'Nguyễn Quang Sáng', 5, 1966, 'NXB Văn Học', 95, 'Tình cha con sâu sắc trong thời chiến.', 'img/chiec_luoc.jpg', 'Còn'),
(90, 'Mắt biếc', 'Nguyễn Nhật Ánh', 5, 1990, 'NXB Trẻ', 240, 'Chuyện tình buồn thời học trò.', 'img/mat_biec.jpg', 'Còn'),
(91, 'Cho tôi xin một vé đi tuổi thơ', 'Nguyễn Nhật Ánh', 5, 2008, 'NXB Trẻ', 208, 'Hồi ức tuổi thơ với nét hài hước, nhẹ nhàng.', 'img/ve_tuoi_tho.jpg', 'Còn'),
(92, 'Bắt đầu từ một kết thúc', 'Phan Ý Yên', 5, 2016, 'NXB Phụ Nữ', 230, 'Tản văn về tình yêu và sự trưởng thành.', 'img/ket_thuc.jpg', 'Còn'),
(93, 'Tôi là Bêtô', 'Nguyễn Nhật Ánh', 5, 2007, 'NXB Trẻ', 188, 'Truyện kể bằng góc nhìn của một chú chó tên Bêtô.', 'img/beto.jpg', 'Còn'),
(94, 'Cánh đồng bất tận', 'Nguyễn Ngọc Tư', 5, 2005, 'NXB Trẻ', 120, 'Những phận người miền Tây lênh đênh, mộc mạc.', 'img/canh_dong.jpg', 'Còn'),
(95, 'Người lái đò sông Đà', 'Nguyễn Tuân', 5, 1958, 'NXB Văn Học', 160, 'Miêu tả vẻ đẹp thiên nhiên và con người Tây Bắc.', 'img/song_da.jpg', 'Còn'),
(96, 'Bến quê', 'Nguyễn Minh Châu', 5, 1985, 'NXB Văn Học', 150, 'Câu chuyện triết lý về cuộc sống và sự lựa chọn.', 'img/ben_que.jpg', 'Đang mượn'),
(97, 'Cô gái đến từ hôm qua', 'Nguyễn Nhật Ánh', 5, 1990, 'NXB Trẻ', 210, 'Tình bạn học trò nhẹ nhàng và trong sáng.', 'img/hom_qua.jpg', 'Còn'),
(98, 'Trại hoa vàng', 'Nguyễn Nhật Ánh', 5, 1994, 'NXB Trẻ', 195, 'Câu chuyện học trò và những rung động đầu đời.', 'img/hoa_vang.jpg', 'Còn'),
(99, 'Ngôi trường mọi khi', 'Nguyễn Nhật Ánh', 5, 2005, 'NXB Trẻ', 195, 'Một câu chuyện nhẹ nhàng và hài hước về tuổi học trò xoay quanh lớp học và những tình huống dở khóc dở cười. Qua đó, Nguyễn Nhật Ánh khắc họa sinh động tình bạn, sự tinh nghịch và cả những cảm xúc hồn nhiên.', 'img/ngoi_truong.jpg', 'Còn'),
(100, 'Gió lạnh đầu mùa', 'Thạch Lam', 5, 1937, 'NXB Văn Học', 170, 'Tuyển tập truyện ngắn nhân văn, nhẹ nhàng.', 'img/gio_lanh.jpg', 'Còn');

-- --------------------------------------------------------

--
-- Table structure for table `theloai`
--

CREATE TABLE `theloai` (
  `idTL` int(11) NOT NULL,
  `TenTL` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theloai`
--

INSERT INTO `theloai` (`idTL`, `TenTL`) VALUES
(1, 'Kỹ năng sống'),
(2, 'Thiếu nhi'),
(3, 'Kinh tế – tài chính'),
(4, 'Công nghệ thông tin'),
(5, 'Văn học Việt Nam');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theloai`
--
ALTER TABLE `theloai`
  ADD PRIMARY KEY (`idTL`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sach`
--
ALTER TABLE `sach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `theloai`
--
ALTER TABLE `theloai`
  MODIFY `idTL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
