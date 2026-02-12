import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      <!-- Texture Overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style="background-image: url('assets/images/brand/rce_topographic_texture_1768626380325.png'); background-size: cover;"></div>

      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          <!-- BRAND & MISSION -->
          <div class="col-span-1 lg:col-span-1">
             <a routerLink="/" class="group inline-flex mb-6">
               <img src="assets/logo/RCE_logo2023-2.png" alt="Rao's Consulting Engineers" class="h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300" style="filter: invert(1);">
             </a>
            <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
              Providing the technical authority and strategic foresight required for Texas infrastructure development.
            </p>
          </div>

          <!-- SERVICES -->
          <div class="col-span-1">
            <h4 class="text-[#d5a021] text-sm font-bold tracking-wide mb-6">Capabilities</h4>
            <ul class="space-y-4">
              <li><a routerLink="/services/land-development" class="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span class="w-1 h-1 bg-[#d5a021] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Land Development</a></li>
              <li><a routerLink="/services/water-resources" class="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span class="w-1 h-1 bg-[#d5a021] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Water Resources</a></li>
              <li><a routerLink="/services/transportation" class="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span class="w-1 h-1 bg-[#d5a021] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Transportation</a></li>
              <li><a routerLink="/services/environmental" class="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span class="w-1 h-1 bg-[#d5a021] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Environmental</a></li>
              <li><a routerLink="/services/permitting" class="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span class="w-1 h-1 bg-[#d5a021] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Strategic Permitting</a></li>
            </ul>
          </div>

          <!-- COMPANY -->
          <div class="col-span-1">
            <h4 class="text-[#d5a021] text-sm font-bold tracking-wide mb-6">Firm Profile</h4>
            <ul class="space-y-4">
              <li><a routerLink="/about" class="text-sm text-slate-400 hover:text-white transition-colors">Our History</a></li>
              <li><a routerLink="/experience" class="text-sm text-slate-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a routerLink="/contact" class="text-sm text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a routerLink="/contact" class="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <!-- CONTACT -->
          <div class="col-span-1">
            <h4 class="text-[#d5a021] text-sm font-bold tracking-wide mb-6">Headquarters</h4>
            <div class="space-y-4 text-sm text-slate-400">
              <p class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#d5a021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Antonio, Texas<br><span class="text-white font-medium">Service Areas: Cities Across Texas</span></span>
              </p>
              <p class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#d5a021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:2105497557" class="hover:text-white transition-colors font-medium">210-549-7557</a>
              </p>
              <p class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#d5a021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@rao-sengineering.com" class="hover:text-white transition-colors">info&#64;rao-sengineering.com</a>
              </p>
              <div class="pt-4 mt-4 border-t border-white/5">
                <p class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#d5a021] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    <span class="text-white block font-medium mb-1">Hours of Operation</span>
                    Mon - Sun: 8:00 AM – 5:00 PM<br>
                    <span class="text-[#d5a021] text-[10px] font-bold uppercase tracking-wider">Saturday & Sunday: Also Open</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-slate-600 font-medium">
            &copy; {{ currentYear }} Rao's Consulting Engineers. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
             <div class="flex items-center gap-4">
               <div class="bg-white p-1.5 rounded-md shadow-sm hover:shadow-md transition-shadow group/cert">
                 <img src="assets/certification/nmsdc.jpeg" alt="NMSDC Certified" class="h-14 w-auto grayscale-0 group-hover/cert:scale-105 transition-transform">
               </div>
               <div class="bg-white p-1.5 rounded-md shadow-sm hover:shadow-md transition-shadow group/cert">
                 <img src="assets/certification/SBE-Logo-300x300.png" alt="SBE Certified" class="h-14 w-auto grayscale-0 group-hover/cert:scale-105 transition-transform">
               </div>
             </div>
             <div class="flex gap-4 opacity-50">
               <!-- Social Icons Placeholder -->
               <div class="w-4 h-4 bg-slate-600 rounded-full"></div>
               <div class="w-4 h-4 bg-slate-600 rounded-full"></div>
               <div class="w-4 h-4 bg-slate-600 rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
