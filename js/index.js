const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let header = document.getElementById("cta-img");
header.setAttribute("src", siteContent["cta"]["img-src"]);

let middle = document.getElementById("middle-img");
middle.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// nav bar
const navItem1 = document.querySelector("nav a:nth-of-type(1)");
navItem1.textContent = siteContent["nav"]["nav-item-1"];
navItem1.style.color = "green";

const navItem2 = document.querySelector("nav a:nth-of-type(2)");
navItem2.textContent = siteContent["nav"]["nav-item-2"];
navItem2.style.color = "green";

const navItem3 = document.querySelector("nav a:nth-of-type(3)");
navItem3.textContent = siteContent["nav"]["nav-item-3"];
navItem3.style.color = "green";

const navItem4 = document.querySelector("nav a:nth-of-type(4)");
navItem4.textContent = siteContent["nav"]["nav-item-4"];
navItem4.style.color = "green";

const navItem5 = document.querySelector("nav a:nth-of-type(5)");
navItem5.textContent = siteContent["nav"]["nav-item-5"];
navItem5.style.color = "green";

const navItem6 = document.querySelector("nav a:nth-of-type(6)");
navItem6.textContent = siteContent["nav"]["nav-item-6"];
navItem6.style.color = "green";

const ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const navItem7 = document.createElement("a");
navItem7.textContent = "DOM";
navItem7.href = "#";
navItem7.style.color = "green";
document.querySelector("nav").appendChild(navItem7);

const navItem8 = document.createElement("a");
navItem8.textContent = "Sing";
navItem8.href = "#";
navItem8.style.color = "green";
document.querySelector("nav").appendChild(navItem8);

//top content
const features = document.querySelector(".main-content .top-content");

features.querySelector(".top-content h4:nth-of-type(1)").textContent =
  siteContent["main-content"]["features-h4"];

features.querySelector(".text-content:nth-of-type(2) h4").textContent =
  siteContent["main-content"]["about-h4"];

features.querySelector(".top-content p:nth-of-type(1)").textContent =
  siteContent["main-content"]["features-content"];

features.querySelector(".text-content:nth-of-type(2) p").textContent =
  siteContent["main-content"]["about-content"];

// bottom content

const features2 = document.querySelector(".main-content .bottom-content");

features2.querySelector(".bottom-content h4:nth-of-type(1)").textContent =
  siteContent["main-content"]["services-h4"];

features2.querySelector(".text-content:nth-of-type(2) h4").textContent =
  siteContent["main-content"]["product-h4"];

features2.querySelector(".text-content:nth-of-type(3) h4").textContent =
  siteContent["main-content"]["vision-h4"];

features2.querySelector(".bottom-content p:nth-of-type(1)").textContent =
  siteContent["main-content"]["services-content"];

features2.querySelector(".text-content:nth-of-type(2) p").textContent =
  siteContent["main-content"]["product-content"];

features2.querySelector(".text-content:nth-of-type(3) p").textContent =
  siteContent["main-content"]["vision-content"];

//contact information

const contact = document.querySelector(".contact");

contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];

contact.querySelector("p:nth-of-type(1)").textContent =
  siteContent["contact"]["address"];

contact.querySelector("p:nth-of-type(2)").textContent =
  siteContent["contact"]["phone"];

contact.querySelector("p:nth-of-type(3)").textContent =
  siteContent["contact"]["email"];
//footer
const footer = (document.querySelector("footer").textContent =
  siteContent["footer"]["copyright"]);
