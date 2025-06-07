import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["mobileMenu", "menuPanel", "hamburgerIcon", "closeIcon"];

  connect() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
    this.menuOpen = false;
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      // At the very top
      this.element.classList.remove("hide-navbar");
    } else {
      // Not at the top
      this.element.classList.add("hide-navbar");
    }
  }

  toggleMenu() {
    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.mobileMenuTarget.style.display = "block";
    this.menuPanelTarget.classList.remove("translate-x-full");
    this.menuPanelTarget.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
    this.hamburgerIconTarget.classList.add("hidden");
    this.hamburgerIconTarget.classList.remove("block");
    this.closeIconTarget.classList.remove("hidden");
    this.closeIconTarget.classList.add("block");
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuPanelTarget.classList.remove("translate-x-0");
    this.menuPanelTarget.classList.add("translate-x-full");
    setTimeout(() => {
      this.mobileMenuTarget.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
    this.hamburgerIconTarget.classList.remove("hidden");
    this.hamburgerIconTarget.classList.add("block");
    this.closeIconTarget.classList.add("hidden");
    this.closeIconTarget.classList.remove("block");
    this.menuOpen = false;
  }
}
