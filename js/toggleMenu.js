document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    'button[aria-label="button for menu toggle"]'
  );
  const menu = document.querySelector("div.invisible");

  toggleButton.addEventListener("click", function () {
    // Toggle visibility and height
    menu.classList.toggle("invisible");
    menu.classList.toggle("h-0");

    // Optionally add a class for animations or styling
    if (menu.classList.contains("invisible")) {
      menu.classList.remove("open");
      menu.classList.remove("bg-white");
      menu.classList.remove("h-auto");
      menu.classList.remove("max-h-[400px]");
      menu.classList.remove("rounded-md");
      menu.classList.remove("p-7.5");
      menu.classList.remove("shadow-solid-5");
      menu.classList.remove("dark:bg-blacksection");
      menu.classList.remove("xl:h-auto");
      menu.classList.remove("xl:p-0");
      menu.classList.remove("xl:shadow-none");
      menu.classList.remove("xl:dark:bg-transparent");
    } else {
      menu.classList.add("open");
      menu.classList.add("bg-white");
      menu.classList.add("h-auto");
      menu.classList.add("max-h-[400px]");
      menu.classList.add("rounded-md");
      menu.classList.add("p-7.5");
      menu.classList.add("shadow-solid-5");
      menu.classList.add("dark:bg-blacksection");
      menu.classList.add("xl:h-auto");
      menu.classList.add("xl:p-0");
      menu.classList.add("xl:shadow-none");
      menu.classList.add("xl:dark:bg-transparent");
    }
  });
});
