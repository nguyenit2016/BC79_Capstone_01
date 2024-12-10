const header = document.getElementById("header");

const handleStickyMenu = () => {
  if (window.scrollY >= 80) {
    header.classList.add("sticky");
    header.classList.add("bg-white");
    header.classList.add("!py-4");
    header.classList.add("shadow");
    header.classList.add("transition");
    header.classList.add("duration-100");
    header.classList.add("dark:bg-black");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("bg-white");
    header.classList.remove("!py-4");
    header.classList.remove("shadow");
    header.classList.remove("transition");
    header.classList.remove("duration-100");
    header.classList.remove("dark:bg-black");
  }
};

window.addEventListener("scroll", handleStickyMenu);
