// Navbar Clicking Active Effect
const home = document.querySelector(".navigation-bar #home-page");
const offer = document.querySelector(".navigation-bar #offer-page");
const about = document.querySelector(".navigation-bar #about-page");
const app = document.querySelector(".navigation-bar #app-page");

// Removing class from each Nav-Bar
const removeClass = () => {
  const links = [home, offer, about, app];
  links.forEach((link) => {
    link.classList.remove("activeLink");
  });
};

// Adding class to each Nav-Bar
const addClass = () => {
  const links = [home, offer, about, app];
  links.forEach((link) => {
    link.addEventListener("click", () => {
      removeClass(links);
      link.classList.add("activeLink");
    });
  });
  // Add a click event listener to the document body
  document.body.addEventListener('click', (e)=>{
    if(!e.target.closest('.navigation-bar')){
      removeClass(links);
    }
  });

};

addClass();


// About Section Click
const aboutContent = document.querySelector('.about-content');
const aboutLi = aboutContent.querySelectorAll('li');
const aboutImg = document.querySelector('#aboutImg');

const imagePaths = [
  'assets/img/about-image.png',
  'assets/img/food items/Food-1.png',
  'assets/img/food items/Food-3.png',
  'assets/img/food items/Food-4.png',
];
// Set initial image
let currentIndex = 0;
aboutImg.src = imagePaths[currentIndex];

// Adding Logics in Li of About ul
aboutLi.forEach((list)=>{
  const span = document.createElement('span');

  
  // Adding some Styles
  list.style.cursor = 'pointer';
  span.textContent = 'book your slot with payment';
  span.style.textTransform = 'capitilize';

  // Adding Class
  span.classList.add('about-span');
  
  // Adding span tag to li in First Child
  list.insertAdjacentHTML('afterbegin', span.outerHTML);
});

// Removing class from each About List
const removeAboutClass = () => {
  aboutLi.forEach((link) => {
    link.classList.remove("about-link");

    const span = link.querySelector('.about-span');
    span.style.color = "#64748b";
  });
};

// // Adding class to each About List
const addAboutClass = () => {
  aboutLi.forEach((link, index) => {
    link.addEventListener("click", () => {
      removeAboutClass();
      link.classList.add("about-link");

      const span = link.querySelector('.about-span');
      span.style.color = "#ff5f1b";

      currentIndex = index;
      aboutImg.style.opacity = 0; 
      setTimeout(() => {
        aboutImg.src = imagePaths[currentIndex];
        aboutImg.style.opacity = 1;
      }, 300); 
    });
  });
}

addAboutClass();