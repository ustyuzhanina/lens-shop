import "./styles/styles.css";
import "./styles/style.scss";
// import { Tooltip, Toast, Popover } from "bootstrap";

import "./js/common";

const NAVBAR = document.querySelector(".navbar");

NAVBAR.addEventListener("click", (e) => {
    e.target.classList.toggle("navbar_opened");
});
