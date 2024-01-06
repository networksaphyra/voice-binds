let themeButton = document.getElementById("themeButton");

function toggleTheme() {
  let rootElement = document.documentElement;
  let currentTheme = rootElement.getAttribute("data-theme");
  if (currentTheme===null) currentTheme = "light";
  let newTheme = currentTheme === "light" ? "dark": "light";
  rootElement.setAttribute("data-theme", newTheme);
}

themeButton.onclick = toggleTheme;
