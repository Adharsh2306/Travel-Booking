import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() navigateDestinations = new EventEmitter<void>();
  @Output() navigateDashboard = new EventEmitter<void>();
}
