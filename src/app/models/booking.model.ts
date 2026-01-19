export interface Booking {
  id: number;
  userId: number;
  packageId: number;
  date: string; // ISO Date string
  travelers: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
