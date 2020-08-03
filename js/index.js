const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// update additional images

let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent["cta"]["img-src"];

let midImage = document.getElementById("middle-img");
midImage.src = siteContent["main-content"]["middle-img-src"];


// update nav links

const linksArray = Object.values(siteContent.nav);

const linksList = document.querySelectorAll(`nav a`);

for (let i = 0; i < linksList.length; i++){
  linksList[i].href = linksArray[i];
}

// add cta content

// h1

const ctaTitleText = document.querySelector(`.cta-text h1`);

ctaTitleText.textContent = siteContent.cta.h1;

// button

const ctaButton = document.querySelector(`.cta-text button`);

ctaButton.textContent = siteContent.cta.button;

// add main tontent

// top content

const topContentHeadings = document.querySelectorAll(".top-content .text-content h4");

topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];

const topContentParagraphs = document.querySelectorAll(".top-content .text-content p");

topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];

// bottom content

const bottomContent = document.querySelectorAll(`.bottom-content .text-content`);

console.log(bottomContent);

bottomContent[0].firstElementChild.textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].firstElementChild.textContent = siteContent["main-content"]["product-h4"]
bottomContent[2].firstElementChild.textContent = siteContent["main-content"]["vision-h4"]
bottomContent[0].lastElementChild.textContent = siteContent["main-content"]["services-content"];
bottomContent[1].lastElementChild.textContent = siteContent["main-content"]["product-content"];
bottomContent[2].lastElementChild.textContent = siteContent["main-content"]["vision-content"];

// contact section

const contactHeading = document.querySelector(".contact h4");

contactHeading.textContent = siteContent.contact["contact-h4"];

const contactParagraphs = document.querySelectorAll(".contact p");

const contactArray = Object.values(siteContent.contact);

for (let i = 1; i < contactArray.length; i++){
  contactParagraphs[i-1].textContent = contactArray[i];
}

// footer

document.querySelector(".footer p").textContent = siteContent.footer.copyright;

