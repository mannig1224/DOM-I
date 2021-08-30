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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Dividing the DOM into smaller nodes:
let header = document.querySelector('header');
let cta = document.querySelector('section.cta');
let mainContent = document.querySelector('section.main-content');
let contact = document.querySelector('section.contact');
let footer = document.querySelector('footer');

// Inserting images

//logo
let logo_img = header.querySelector('img');
logo_img.setAttribute('src', './img/logo.png');

//header img
let header_img = cta.querySelector('img');
header_img.setAttribute('src', './img/header-img.png');
//mid page img
let mid_img = mainContent.querySelector('img');
mid_img.setAttribute('src', './img/mid-page-accent.jpg')


// adding navbar content
let nav = header.querySelectorAll('a');
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

let navbar = header.querySelector('nav');
let home = document.createElement('a');

home.setAttribute('href',"#");
home.innerText = "Home";

let blog = document.createElement('a');

blog.setAttribute('href',"#");
blog.innerText = "Blog";

navbar.append(blog);
navbar.prepend(home);


let newNav = header.querySelectorAll('a');

newNav.forEach(element => {
  element.style.color = "green";
});


// Adding header title
let ctaHeader = cta.querySelector('h1');
ctaHeader.innerHTML = ('DOM <br> IS <br> AWESOME');

// Adding button text
let ctaButton = cta.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];

// Add top-content

let topContent = document.querySelectorAll('.top-content .text-content');

// add feature for top-content
let features = topContent[0];
let featuresHeading = features.querySelector('h4');
let featuresContent = features.querySelector('p');

featuresHeading.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];

// add about for top-content
let about = topContent[1];
let aboutHeading = about.querySelector('h4');
let aboutContent = about.querySelector('p');

aboutHeading.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];


// Add bot-content

let botContent = document.querySelectorAll('.bottom-content .text-content');

// add services for bot-content
let services = botContent[0];
let servicesHeading = services.querySelector('h4');
let servicesContent = services.querySelector('p');

servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];

// add product for bot-content
let product = botContent[1];
let productHeading = product.querySelector('h4');
let productContent = product.querySelector('p');

productHeading.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];

// add vision for bot-content
let vision = botContent[2];
let visionHeading = vision.querySelector('h4');
let visionContent = vision.querySelector('p');

visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// adding contact section
let contactHeader = contact.querySelector('h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactP = contact.querySelectorAll('p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// adding footer
footer.textContent = siteContent["footer"]["copyright"];