<h1 align="center">TravelBooking</h1>
<p align="center"><strong>Seamless Travel Experience & Package Reservation System</strong></p>

<p align="center">
   <a href="https://angular.io/"><img src="https://img.shields.io/badge/Angular-20+-red.svg?style=flat-square&logo=angular" alt="Angular" /></a>
   <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Latest-blue.svg?style=flat-square&logo=typescript" alt="TypeScript" /></a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-Custom%20Theme-1572B6.svg?style=flat-square&logo=css3" alt="CSS3" /></a>
   <a href="https://responsive.is/"><img src="https://img.shields.io/badge/Responsive-Mobile%20First-brightgreen.svg?style=flat-square" alt="Responsive" /></a>
</p>

TravelBooking is a modern travel management application built with **Angular 20+**. It features a sleek, neon-inspired dark theme and demonstrates modern Angular architecture using Standalone Components. The application allows users to browse destinations, view detailed travel packages, and manage bookings.

## Color Reference

The application utilizes a high-contrast Cyberpunk/Neon color palette.

| Purpose         | Hex     | Usage                            |
| --------------- | ------- | -------------------------------- |
| Primary         | #00F3FF | Highlights, Main Accents (Cyan)  |
| Secondary       | #BC13FE | Secondary Actions (Purple)       |
| Background      | #0A0A12 | App Background                   |
| Card Background | #161622 | Component Containers             |
| Text Main       | #FFFFFF | Primary Content                  |

## 🚀 Key Features

- **Destination Discovery**: Browse curated destinations including Paris, Tokyo, New York, and Bali.
- **Package Details**: View comprehensive package information including itineraries, pricing, and duration.
- **Booking System**: Streamlined booking flow to reserve travel packages.
- **User Dashboard**: Personal area to view and track confirmed bookings.
- **Responsive Design**: Fully optimized UI for various screen sizes.

## 🛠️ Tech Stack

- **Framework**: Angular 20+ (Standalone Components)
- **Styling**: Custom CSS (CSS Variables & Flexbox)
- **Data Handling**: RxJS Observables (Mock Service)
- **State Management**: Service-based reactive state

## 📂 Project Architecture

The project utilizes **Angular Standalone Components**, removing the need for `NgModule`:

- **Services**: `TravelService` handles data logic for destinations, packages, and bookings using RxJS.
- **Components**: Feature-specific components (`booking-form`, `destination-list`, `package-detail`) managed directly.
- **Models**: Strongly typed interfaces (`Destination`, `Package`, `Booking`) ensure type safety.

## ⚙️ Setup & Installation

### Prerequisites

- Node.js
- npm or yarn
- Angular CLI

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd TravelBooking
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`.

## 📊 Project Statistics

| Metric             | Value                             |
| ------------------ | --------------------------------- |
| Framework          | Angular 20.3.0                    |
| Feature Components | 4 (Destinations, Booking, Detail, Dashboard) |
| Services           | 1 (TravelService)                 |
| Data Source        | Mock Data (In-Memory)             |

## 🔗 API Integration

The application currently simulates backend integration via `TravelService` using RxJS `of` operators:

- **Destinations**: Mock list of cities with images and descriptions.
- **Packages**: Travel packages linked to destinations with pricing and itineraries.
- **Bookings**: User booking records with status tracking.

## ✨ Key Highlights

- ✅ **Modern Architecture**: Built completely with Standalone APIs.
- ✅ **Custom Design**: Unique dark/neon aesthetic without heavy UI framework dependencies.
- ✅ **Type-Safe**: Full TypeScript implementation with dedicated models.
- ✅ **Reactive**: Extensive use of Observables for data flow.