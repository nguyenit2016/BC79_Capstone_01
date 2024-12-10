// Lấy phần tử nút scroll
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Thêm sự kiện click
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Cuộn mượt mà
  });
});

// Ẩn/Hiện nút khi cuộn
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Hiện nút nếu cuộn xuống hơn 200px
    scrollToTopButton.style.display = "flex";
  } else {
    // Ẩn nút nếu cuộn lên đầu trang
    scrollToTopButton.style.display = "none";
  }
});

// Đảm bảo nút bị ẩn khi trang vừa tải
scrollToTopButton.style.display = "none";
