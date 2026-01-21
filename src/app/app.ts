import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { DestinationList } from './destination-list/destination-list';
import { PackageDetail } from './package-detail/package-detail';
import { BookingForm } from './booking-form/booking-form';
import { UserDashboard } from './user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, DestinationList, PackageDetail, BookingForm, UserDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentView = signal<'destinations' | 'package-detail' | 'booking' | 'dashboard'>('destinations');
  selectedPackageId = signal<number | null>(null);

  showDestinations() {
    this.currentView.set('destinations');
    this.selectedPackageId.set(null);
  }

  showDashboard() {
    this.currentView.set('dashboard');
  }

  onPackageSelected(id: number) {
    this.selectedPackageId.set(id);
    this.currentView.set('package-detail');
  }

  onBookPackage(id: number) {
    this.selectedPackageId.set(id);
    this.currentView.set('booking');
  }

  onBookingComplete() {
    this.showDashboard();
  }

  onCancelBooking() {
    if (this.selectedPackageId()) {
      this.currentView.set('package-detail');
    } else {
      this.showDestinations();
    }
  }
}