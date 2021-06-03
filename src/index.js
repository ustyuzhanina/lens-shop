import "./styles/styles.css";
import "./styles/style.scss";
// import { Tooltip, Toast, Popover } from "bootstrap";

import "./js/common";

const NAVBAR = document.querySelector(".navbar");
const NAVBAR_TOGGLER = document.querySelector(".navbar__toggler");

NAVBAR_TOGGLER.addEventListener("click", (e) => {
  e.stopPropagation();
  NAVBAR.classList.toggle("navbar_opened");
});
