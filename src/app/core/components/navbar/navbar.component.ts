import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.bg-white]="isScrolled" [class.shadow-md]="isScrolled" [class.py-4]="!isScrolled" [class.py-2]="isScrolled"
         class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent text-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/" class="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          RCE <span class="font-light text-slate-600">Engineering</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a routerLink="/" class="text-sm font-medium hover:text-[#2C3E50] transition-colors">Home</a>
          
          <!-- Services Dropdown (Simple Group for now) -->
          <div class="relative group">
            <button class="text-sm font-medium hover:text-[#2C3E50] transition-colors flex items-center gap-1">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
              <a routerLink="/services/water-resources" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2C3E50]">Water Resources</a>
              <a routerLink="/services/land-development" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2C3E50]">Land Development</a>
              <a routerLink="/services/transportation" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2C3E50]">Transportation</a>
              <a routerLink="/services/environmental" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2C3E50]">Environmental</a>
              <a routerLink="/services/permitting" class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2C3E50]">Permitting</a>
            </div>
          </div>

          <a routerLink="/experience" class="text-sm font-medium hover:text-[#2C3E50] transition-colors">Experience</a>
          <a routerLink="/about" class="text-sm font-medium hover:text-[#2C3E50] transition-colors">About</a>
          <a routerLink="/contact" class="text-sm font-medium hover:text-[#2C3E50] transition-colors">Contact</a>
        </div>

        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-slate-800">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
           </svg>
        </button>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
