import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-service-navigator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-20 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <span class="text-[#d5a021] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Continuity</span>
          <h2 class="text-3xl font-bold text-slate-900">Explore Other Disciplines</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ng-container *ngFor="let item of navItems">
            <a *ngIf="item.id !== currentServiceId" 
               [routerLink]="['/services', item.id]"
               (click)="scrollToTop()"
               class="group relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-2">
              
              <!-- Background Image -->
              <img [src]="item.image" [alt]="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500"></div>
              
              <!-- Content -->
              <div class="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                <div class="flex items-center text-[#d5a021] text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>View Details</span>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </a>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ServiceNavigatorComponent {
  @Input() currentServiceId: string = '';

  navItems: NavItem[] = [
    { id: 'water-resources', title: 'Water Resources', image: 'assets/water-hero-v2.png' },
    { id: 'land-development', title: 'Land Development', image: 'assets/land-development-aerial.png' },
    { id: 'transportation', title: 'Transportation', image: 'assets/transportation hero.png' },
    { id: 'environmental', title: 'Environmental', image: 'assets/environment/environmental-hero.png' },
    { id: 'permitting', title: 'Permitting', image: 'assets/permitting-focus.png' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
