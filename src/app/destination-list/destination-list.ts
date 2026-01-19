import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TravelService } from '../travel.service';
import { Destination } from '../models/destination.model';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-destination-list',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './destination-list.html',
  styleUrl: './destination-list.css'
})
export class DestinationList implements OnInit {
  destinations: Destination[] = [];
  packages: { [destId: number]: Package[] } = {};

  constructor(private travelService: TravelService) {}

  ngOnInit() {
    this.travelService.getDestinations().subscribe(data => {
      this.destinations = data;
      this.destinations.forEach(d => {
        this.travelService.getPackages(d.id).subscribe(pkgs => {
          this.packages[d.id] = pkgs;
        });
      });
    });
  }
}