import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- HERO: The Physical Reality (Mobilization Perspective) -->
    <header class="page-header relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-slate-900">
      <!-- Layer 1: The High-Impact Site Reality -->
      <div class="absolute inset-0 z-0">
        <img src="assets/images/brand/contact_hero_mobilization.png" 
          alt="Texas Infrastructure Mobilization" 
          class="w-full h-full object-cover brightness-[0.7] contrast-[1.1]">
      </div>

      <!-- Layer 2: Natural Texas Haze (Atmospheric Overlay) -->
      <div class="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/40 via-transparent to-white/90"></div>
      <div class="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"></div>
      
      <!-- Layer 3: Subtle Topographic Texture (Relatable Landscape) -->
      <div class="absolute inset-0 z-20 opacity-[0.05] pointer-events-none mix-blend-multiply" 
           style="background-image: url('assets/images/brand/rce_topographic_texture_1768626380325.png'); background-size: cover;"></div>

      <div class="header-content container relative z-30 text-center px-4 max-w-4xl">
        <div class="inline-flex items-center gap-3 mb-6 animate-fade-in group">
          <span class="h-[1px] w-8 bg-[#d5a021] group-hover:w-12 transition-all duration-500"></span>
          <span class="text-white font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs drop-shadow-lg">Strategic Mobilization</span>
          <span class="h-[1px] w-8 bg-[#d5a021] group-hover:w-12 transition-all duration-500"></span>
        </div>
        
        <h1 class="page-title text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
          Partnership <span class="text-[#d5a021]">Initiated</span>
        </h1>
        
        <p class="page-subtitle text-base md:text-xl text-white mb-10 font-medium max-w-2xl mx-auto leading-relaxed border-l-4 border-[#d5a021] pl-6 drop-shadow-md">
          From site-mobilization to final delivery. Rao Engineering provides the on-the-ground technical leadership required for Texas-scale development.
        </p>
      </div>
    </header>

    <div class="bg-white py-24 relative">
      <!-- Natural Background Texture -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('assets/images/brand/rce_topographic_texture_1768626380325.png'); background-size: 800px;"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <!-- LEFT: The Project Mobilization Form -->
          <div class="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Project Partnership Inquiry</h2>
            <p class="text-slate-500 mb-8 font-light italic">Secure immediate technical oversight for your next development phase.</p>
            
            <form (ngSubmit)="onSubmit()" class="space-y-10 mt-12">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="form-group flex flex-col gap-3">
                  <label class="text-[10px] uppercase font-black tracking-[0.2em] text-[#d5a021]">Principal Liaison</label>
                  <input type="text" placeholder="Full Name" name="name" [(ngModel)]="formData.name" required
                    class="bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#d5a021] outline-none transition-all text-slate-800 placeholder:text-slate-300 text-lg">
                </div>
                <div class="form-group flex flex-col gap-3">
                  <label class="text-[10px] uppercase font-black tracking-[0.2em] text-[#d5a021]">Decision-Maker Email</label>
                  <input type="email" placeholder="email@company.com" name="email" [(ngModel)]="formData.email" required
                    class="bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#d5a021] outline-none transition-all text-slate-800 placeholder:text-slate-300 text-lg">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="form-group flex flex-col gap-3">
                  <label class="text-[10px] uppercase font-black tracking-[0.2em] text-[#d5a021]">Inquiry Focus</label>
                  <select name="segment" [(ngModel)]="formData.segment"
                    class="bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#d5a021] outline-none transition-all text-slate-800 text-lg cursor-pointer">
                    <option value="strategic">Strategic Land Development</option>
                    <option value="regulatory">Regulatory/Permitting Ethics</option>
                    <option value="infrastructure">Public Infrastructure Delivery</option>
                    <option value="onsite">On-Site Technical Review</option>
                  </select>
                </div>
                <div class="form-group flex flex-col gap-3">
                  <label class="text-[10px] uppercase font-black tracking-[0.2em] text-[#d5a021]">Project Scope (Acreage/Units)</label>
                  <input type="text" placeholder="e.g. 150 Acres / Gateway Project" name="scale" [(ngModel)]="formData.scale"
                    class="bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#d5a021] outline-none transition-all text-slate-800 placeholder:text-slate-300 text-lg">
                </div>
              </div>

              <div class="form-group flex flex-col gap-3">
                <label class="text-[10px] uppercase font-black tracking-[0.2em] text-[#d5a021]">Initial Technical Requirements</label>
                <textarea rows="4" placeholder="Briefly outline your mobilization needs or regulatory challenges..." name="message" [(ngModel)]="formData.message" required
                  class="bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#d5a021] outline-none transition-all text-slate-800 placeholder:text-slate-300 resize-none text-lg"></textarea>
              </div>

              <div class="flex flex-col md:flex-row items-center gap-6 pt-6">
                <button type="submit" 
                  class="w-full md:w-auto bg-slate-900 text-white font-bold uppercase tracking-widest text-[11px] px-12 py-5 rounded-lg hover:bg-[#d5a021] hover:text-slate-900 transition-all shadow-2xl shadow-slate-900/20 active:scale-95">
                  Commence Partnership
                </button>
                <div class="flex items-center gap-2">
                  <span class="h-10 w-px bg-slate-200 hidden md:block"></span>
                  <p class="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-tight max-w-[180px]">
                    Direct Liaison with Senior Engineering Principals guaranteed for all strategic inquiries.
                  </p>
                </div>
              </div>
            </form>
          </div>

          <!-- RIGHT: Field Mobilization Assets -->
          <div class="lg:col-span-5 space-y-16 pl-0 lg:pl-10">
            <div>
              <span class="text-[#d5a021] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Field Operations</span>
              <h3 class="text-4xl font-bold text-slate-900 mb-8 leading-tight">On-The-Ground <br>Technical Presence</h3>
              
              <div class="space-y-10">
                <div class="flex gap-8 group">
                  <div class="h-14 w-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-[#d5a021] border border-slate-100 group-hover:bg-[#d5a021] group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">San Antonio HQ</h4>
                    <p class="text-slate-500 font-light text-lg leading-relaxed">Centrally located for rapid <br>Texas-wide field mobilization.</p>
                  </div>
                </div>

                <div class="flex gap-8 group">
                  <div class="h-14 w-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-[#d5a021] border border-slate-100 group-hover:bg-[#d5a021] group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">Direct Field Link</h4>
                    <a href="tel:2105497557" class="text-slate-500 font-light text-xl hover:text-[#d5a021] transition-colors">210-549-7557</a>
                  </div>
                </div>

                <div class="flex gap-8 group">
                  <div class="h-14 w-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-[#d5a021] border border-slate-100 group-hover:bg-[#d5a021] group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">Dossier Access</h4>
                    <a href="mailto:info@rao-sengineering.com" class="text-slate-500 font-light text-lg mb-2 block hover:text-[#d5a021] transition-colors">info&#64;rao-sengineering.com</a>
                    <a href="https://www.linkedin.com/in/raos-engineers/" target="_blank" rel="noopener noreferrer" class="text-[#0a66c2] hover:text-[#004182] transition-colors inline-flex items-center gap-2 text-sm font-medium">
                      <span>Connect on LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
              <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <img src="assets/images/brand/rce_hero_background_concept_1768626300633.png" class="w-40 h-auto">
              </div>
              <h4 class="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Availability Window</h4>
              <p class="text-2xl font-bold text-slate-900 mb-1 leading-none">Mon – Fri</p>
              <p class="text-slate-500 font-light text-sm mb-6">08:00 – 17:00 CST</p>
              <div class="inline-flex items-center gap-2 bg-[#d5a021]/10 text-[#d5a021] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                <span class="h-1.5 w-1.5 bg-[#d5a021] rounded-full animate-pulse"></span>
                Principals Active
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  `,
  styles: [`
    :host { display: block; }
    .animate-fade-in {
      animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    segment: 'strategic',
    scale: ''
  };

  onSubmit() {
    console.log('Partnership Request Logged:', this.formData);
    alert('Technical inquiry successfully logged. A Senior Engineering Principal will review your project fundamentals and contact you shortly.');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: '',
      segment: 'strategic',
      scale: ''
    };
  }
}
