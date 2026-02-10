import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-why-us',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-surface relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-[#d5a021] rounded-full filter blur-[120px] opacity-5"></div>
      <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900 rounded-full filter blur-[120px] opacity-5"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Why <span class="font-bold text-[#d5a021]">Rao Engineering</span>?
          </h2>
          <p class="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            A philosophy built on Logic, Excellence, and Family.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logic -->
          <div class="group bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-14 h-14 mb-6 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#d5a021]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-700 group-hover:text-[#d5a021] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
               <circle cx="12" cy="12" r="3" />
               <path d="M12 1v6m0 6v6m5.2-13.2-4.2 4.2m0 6 4.2 4.2M23 12h-6m-6 0H5m13.2 5.2-4.2-4.2m0-6 4.2-4.2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Logic</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              Data-driven engineering solutions that make sense. We optimize for cost, compliance, and constructability.
            </p>
          </div>

          <!-- Excellence -->
          <div class="group bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-14 h-14 mb-6 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#d5a021]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-700 group-hover:text-[#d5a021] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Excellence</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              Over 18 years of delivering premium results. We don't just meet standards; we set them for the industry.
            </p>
          </div>

          <!-- Family -->
          <div class="group bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-14 h-14 mb-6 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#d5a021]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-700 group-hover:text-[#d5a021] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Family</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              We treat every client like family. Your success is our success, and we build relationships that last.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WhyUsComponent { }
