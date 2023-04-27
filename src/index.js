import "./styles.css"
import addHome from "./home";
import addHeader from "./header";
import addMenu from "./menu";
import addContact from "./contact";
import { clearDom, clearSelection, assignSelected } from "./clear";

// Load navbar and home by default
addHeader();
addMenu();

// Event listener for navbar buttons
const homeNavbar = document.querySelector("#navbar-home");
const menuNavbar = document.querySelector("#navbar-menu");
const contactNavbar = document.querySelector("#navbar-contact");

// Event listener for any of the navbar 'p' elements clicked
const navbarP = document.querySelectorAll(".navbar-link");

// Clear the DOM regardless of the element clicked
navbarP.forEach(navbarP => {
    navbarP.addEventListener("click", () => {
        clearDom();
        clearSelection();
        assignSelected(navbarP);
    })
});

// Event listener for home button
homeNavbar.addEventListener("click", () => {
    addHome();
});

// Event listener for menu button
menuNavbar.addEventListener("click", () => {
    addMenu();
});

// Event listener for contact button
contactNavbar.addEventListener("click", () => {
    addContact();
});