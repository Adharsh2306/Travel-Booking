import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService } from '../travel.service';
import { Booking } from '../models/booking.model';
import { Package } from '../models/package.model';

interface BookingWithDetails extends Booking {
  packageName?: string;
  packagePrice?: number;
}

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})
export class UserDashboard {
  bookings: BookingWithDetails[] = [];

  constructor(private travelService: TravelService) {
    this.travelService.getUserBookings(1).subscribe(bookings => {
      this.bookings = bookings;
      this.bookings.forEach(booking => {
        this.travelService.getPackage(booking.packageId).subscribe(pkg => {
          if (pkg) {
            booking.packageName = pkg.name;
            booking.packagePrice = pkg.price;
          }
        });
      });
    });
  }
}