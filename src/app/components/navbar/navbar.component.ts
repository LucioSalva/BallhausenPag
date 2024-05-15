import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    if (this.menuVisible) {
      setTimeout(() => {
        this.menuVisible = false;
      }, 2000); // Hide the menu after 3 seconds
    }
    if (window.innerWidth < 992) {
      setTimeout(() => {
        this.menuVisible = false;
      }, 0); // Hide the menu immediately if the screen width is less than 992px
    }  
}
}
