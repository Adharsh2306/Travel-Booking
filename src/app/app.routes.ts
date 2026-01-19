import { Routes } from '@angular/router';
import { DestinationList } from './destination-list/destination-list';
import { PackageDetail } from './package-detail/package-detail';
import { BookingForm } from './booking-form/booking-form';
import { UserDashboard } from './user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/destinations', pathMatch: 'full' },
  { path: 'destinations', component: DestinationList },
  { path: 'package/:id', component: PackageDetail },
  { path: 'book/:packageId', component: BookingForm },
  { path: 'my-bookings', component: UserDashboard },
  { path: '**', redirectTo: '/destinations' }
];