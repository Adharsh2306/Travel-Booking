import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Destination } from './models/destination.model';
import { Package } from './models/package.model';
import { Booking } from './models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private destinations: Destination[] = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://placehold.co/600x400?text=Paris',
      description: 'The City of Light, famous for its cafe culture and the Eiffel Tower.'
    },
    {
      id: 2,
      name: 'Tokyo',
      image: 'https://placehold.co/600x400?text=Tokyo',
      description: 'A bustling metropolis mixing the ultramodern and the traditional.'
    },
    {
      id: 3,
      name: 'New York',
      image: 'https://placehold.co/600x400?text=New+York',
      description: 'The Big Apple, known for its skyline, Broadway, and diverse culture.'
    },
    {
      id: 4,
      name: 'Bali',
      image: 'https://placehold.co/600x400?text=Bali',
      description: 'An Indonesian island known for its forested volcanic mountains and beaches.'
    }
  ];

  private packages: Package[] = [
    {
      id: 101,
      destinationId: 1,
      name: 'Romantic Paris Getaway',
      duration: '5 Days / 4 Nights',
      price: 1200,
      itinerary: ['Arrival & Eiffel Tower', 'Louvre Museum', 'Seine Cruise', 'Versailles Tour', 'Departure']
    },
    {
      id: 102,
      destinationId: 1,
      name: 'Paris Cultural Dive',
      duration: '7 Days / 6 Nights',
      price: 1500,
      itinerary: ['Arrival', 'Montmartre', 'Louvre & Orsay', 'Latin Quarter', 'Marais', 'Shopping', 'Departure']
    },
    {
      id: 201,
      destinationId: 2,
      name: 'Tokyo Tech & Tradition',
      duration: '6 Days / 5 Nights',
      price: 1800,
      itinerary: ['Arrival at Narita', 'Shibuya & Harajuku', 'Asakusa & Senso-ji', 'Akihabara', 'Meiji Shrine', 'Departure']
    },
    {
      id: 301,
      destinationId: 3,
      name: 'NYC Highlights',
      duration: '4 Days / 3 Nights',
      price: 900,
      itinerary: ['Arrival & Times Square', 'Statue of Liberty', 'Central Park & Met Museum', 'Departure']
    },
    {
      id: 401,
      destinationId: 4,
      name: 'Bali Beach & Temple',
      duration: '6 Days / 5 Nights',
      price: 1100,
      itinerary: ['Arrival Denpasar', 'Ubud Monkey Forest', 'Tanah Lot Sunset', 'Beach Day', 'Uluwatu Temple', 'Departure']
    }
  ];

  // Mock bookings
  private bookings: Booking[] = [
    {
      id: 1,
      userId: 1,
      packageId: 101,
      date: '2023-12-25',
      travelers: 2,
      status: 'confirmed'
    }
  ];

  constructor() { }

  getDestinations(): Observable<Destination[]> {
    return of(this.destinations);
  }

  getDestination(id: number): Observable<Destination | undefined> {
    const dest = this.destinations.find(d => d.id === id);
    return of(dest);
  }

  getPackages(destinationId?: number): Observable<Package[]> {
    if (destinationId) {
      return of(this.packages.filter(p => p.destinationId === destinationId));
    }
    return of(this.packages);
  }

  getPackage(id: number): Observable<Package | undefined> {
    const pkg = this.packages.find(p => p.id === id);
    return of(pkg);
  }

  getUserBookings(userId: number): Observable<Booking[]> {
    return of(this.bookings.filter(b => b.userId === userId));
  }

  addBooking(booking: Booking): Observable<Booking> {
    const newBooking = { ...booking, id: this.bookings.length + 1, status: 'confirmed' as const };
    this.bookings.push(newBooking);
    return of(newBooking);
  }
}