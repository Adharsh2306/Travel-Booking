import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService } from '../travel.service';
import { Destination } from '../models/destination.model';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-destination-list',
  imports: [CommonModule],
  templateUrl: './destination-list.html',
  styleUrl: './destination-list.css'
})
export class DestinationList {
  destinations: Destination[] = [];
  packages: { [destId: number]: Package[] } = {};
  @Output() packageSelected = new EventEmitter<number>();

  constructor(private travelService: TravelService) {
    this.travelService.getDestinations().subscribe(data => {
      this.destinations = data;
      this.destinations.forEach(d => {
        this.travelService.getPackages(d.id).subscribe(pkgs => {
          this.packages[d.id] = pkgs;
        });
      });
    });
  }

  selectPackage(id: number) {
    this.packageSelected.emit(id);
  }
}
