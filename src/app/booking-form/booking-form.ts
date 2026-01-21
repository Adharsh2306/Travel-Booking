import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TravelService } from '../travel.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css'
})
export class BookingForm {
  bookingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    travelers: new FormControl(1, [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required)
  });

  package: Package | undefined;

  @Output() bookingComplete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private travelService: TravelService) {}

  @Input()
  set packageId(id: number) {
    this.travelService.getPackage(id).subscribe(pkg => {
      this.package = pkg;
    });
  }

  onSubmit() {
    if (this.bookingForm.valid && this.package) {
      const formValue = this.bookingForm.value;
      // We are mocking userId as 1
      this.travelService.addBooking({
        id: 0, // Assigned by service
        userId: 1,
        packageId: this.package.id,
        date: formValue.date!,
        travelers: formValue.travelers!,
        status: 'pending'
      }).subscribe(() => {
        this.bookingComplete.emit();
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}