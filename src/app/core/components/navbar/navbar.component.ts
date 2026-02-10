import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.bg-white]="isScrolled || isMobileMenuOpen" 
         [class.shadow-lg]="isScrolled || isMobileMenuOpen" 
         [class.py-4]="!isScrolled && !isMobileMenuOpen" 
         [class.py-2]="isScrolled || isMobileMenuOpen"
         [class.text-slate-900]="isScrolled || isMobileMenuOpen"
         [class.text-white]="!isScrolled && !isMobileMenuOpen"
         class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/" class="text-2xl font-bold tracking-tight flex items-center gap-2 transition-colors">
          RCE <span class="font-light" [class.text-slate-600]="isScrolled || isMobileMenuOpen" [class.text-slate-200]="!isScrolled && !isMobileMenuOpen">Engineering</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a routerLink="/" class="text-sm font-medium hover:opacity-70 transition-opacity">Home</a>
          
          <!-- Services Dropdown (Simple Group for now) -->
          <div class="relative group">
            <button class="text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1 focus:outline-none">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-slate-800">
              <a routerLink="/services/water-resources" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900">Water Resources</a>
              <a routerLink="/services/land-development" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900">Land Development</a>
              <a routerLink="/services/transportation" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900">Transportation</a>
              <a routerLink="/services/environmental" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900">Environmental</a>
              <a routerLink="/services/permitting" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900">Permitting</a>
            </div>
          </div>

          <a routerLink="/experience" class="text-sm font-medium hover:opacity-70 transition-opacity">Experience</a>
          <a routerLink="/about" class="text-sm font-medium hover:opacity-70 transition-opacity">About</a>
          <a routerLink="/contact" class="text-sm font-medium hover:opacity-70 transition-opacity">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden focus:outline-none transition-colors" (click)="toggleMobileMenu()">
           <svg *ngIf="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
           </svg>
           <svg *ngIf="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
           </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto text-slate-900">
        <a routerLink="/" (click)="toggleMobileMenu()" class="text-lg font-medium py-2">Home</a>
        
        <div class="flex flex-col space-y-2 py-2">
            <span class="text-lg font-medium text-slate-900 opacity-80">Services</span>
            <a routerLink="/services/water-resources" (click)="toggleMobileMenu()" class="pl-4 text-slate-600 hover:text-blue-700 py-1">Water Resources</a>
            <a routerLink="/services/land-development" (click)="toggleMobileMenu()" class="pl-4 text-slate-600 hover:text-blue-700 py-1">Land Development</a>
            <a routerLink="/services/transportation" (click)="toggleMobileMenu()" class="pl-4 text-slate-600 hover:text-blue-700 py-1">Transportation</a>
            <a routerLink="/services/environmental" (click)="toggleMobileMenu()" class="pl-4 text-slate-600 hover:text-blue-700 py-1">Environmental</a>
            <a routerLink="/services/permitting" (click)="toggleMobileMenu()" class="pl-4 text-slate-600 hover:text-blue-700 py-1">Permitting</a>
        </div>

        <a routerLink="/experience" (click)="toggleMobileMenu()" class="text-lg font-medium py-2">Experience</a>
        <a routerLink="/about" (click)="toggleMobileMenu()" class="text-lg font-medium py-2">About</a>
        <a routerLink="/contact" (click)="toggleMobileMenu()" class="text-lg font-medium py-2">Contact</a>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
