import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService } from '../travel.service';
import { Package } from '../models/package.model';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-package-detail',
  imports: [CommonModule],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.css'
})
export class PackageDetail {
  package: Package | undefined;
  destination: Destination | undefined;
  
  @Output() bookPackage = new EventEmitter<number>();
  @Output() goBack = new EventEmitter<void>();

  constructor(private travelService: TravelService) {}

  @Input()
  set packageId(id: number) {
    this.travelService.getPackage(id).subscribe(pkg => {
      this.package = pkg;
      if (pkg) {
        this.travelService.getDestination(pkg.destinationId).subscribe(dest => {
          this.destination = dest;
        });
      }
    });
  }

  onBook() {
    if (this.package) {
      this.bookPackage.emit(this.package.id);
    }
  }

  onBack() {
    this.goBack.emit();
  }
}