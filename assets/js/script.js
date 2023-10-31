// Get references to the home and contact links
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const menu = document.querySelector("#menu");
const blog = document.querySelector("#blog");

// Add a click event listener to the home link
home.addEventListener("click", () => {
  // Remove the active class from the contact link (if present)
  about.classList.remove("active-link");

  // Add the active class to the home link
  home.classList.add("active-link");
});

// Add a click event listener to the contact link
about.addEventListener("click", () => {
  // Remove the active class from the home link (if present)
  home.classList.remove("active-link");

  // Add the active class to the contact link
  about.classList.add("active-link");
});
