document.addEventListener("DOMContentLoaded", () => {
  const themeToggler = document.querySelector('[aria-label="theme toggler"]');
  const html = document.documentElement;

  // Check stored theme preference
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    html.classList.toggle("dark", storedTheme === "dark");
  } else {
    // Default to system theme if no preference is set
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  // Toggle theme on button click
  themeToggler.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
