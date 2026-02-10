import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden bg-surface">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img [src]="backgroundImage" alt="Service Background" class="w-full h-full object-cover opacity-90">
        <div class="absolute inset-0 bg-white/10 pointer-events-none"></div>
      </div>

      <!-- Content Overlay -->
      <div class="relative z-10 text-center max-w-4xl px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight leading-tight">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-slate-600/90 max-w-2xl mx-auto font-light">
          {{ subtitle }}
        </p>
      </div>
    </section>
  `,
  styles: []
})
export class ServiceHeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '/assets/rce_hero_background_concept_1768626300633.png'; // Default fallback
}
