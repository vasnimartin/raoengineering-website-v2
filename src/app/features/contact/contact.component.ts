import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="contact-page min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      <!-- LEFT PANEL: Visual & Info (Dark Mode + Texture) -->
      <div class="relative bg-slate-900 flex flex-col p-8 md:p-12 lg:p-20 overflow-hidden min-h-[50vh] lg:min-h-screen">
         <!-- Background Layers - MAX VISIBILITY -->
         <div class="absolute inset-0 z-0">
           <img src="assets/images/brand/contact_hero_mobilization.png" class="w-full h-full object-cover opacity-100 brightness-110 saturate-125">
         </div>
         <!-- Strategic Gradient for Text Readability Only -->
         <div class="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent"></div>
         
         <!-- Content z-20: Vertically Centered Title -->
         <div class="relative z-20 flex-grow flex flex-col justify-center">
           <!-- Badge -->
           <div class="inline-flex items-center gap-3 mb-8">
             <span class="h-[2px] w-12 bg-[#d5a021]"></span>
             <span class="text-[#d5a021] font-extrabold tracking-[0.3em] uppercase text-sm drop-shadow-md">Executive Access</span>
           </div>
           
           <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] drop-shadow-xl">
             Architecting <br>
             <span class="text-white">The Future</span>
           </h1>
           
           <div class="pl-8 border-l-4 border-[#d5a021]">
             <p class="text-white text-xl md:text-2xl font-light leading-relaxed drop-shadow-md max-w-xl">
               Direct engagement for <span class="text-[#d5a021] font-semibold">Senior Executives</span>, <span class="text-[#d5a021] font-semibold">Architects</span>, and <span class="text-[#d5a021] font-semibold">Solution Engineers</span>.
             </p>
           </div>
         </div>

         <!-- Contact Details (Bottom Left) -->
         <div class="relative z-20 space-y-8 mt-12 lg:mt-0 pt-12 border-t border-white/10 lg:border-none">
            <div class="space-y-6">
               <div class="space-y-2">
                 <h3 class="text-white/80 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <span class="w-2 h-2 bg-[#d5a021] rounded-full"></span> Corporate Headquarters
                 </h3>
                 <p class="text-3xl text-white font-bold tracking-tight">San Antonio, Texas</p>
                 <p class="text-slate-400 text-sm max-w-xs">Serving clients across Cedar Park, Austin, and the greater Texas region.</p>
               </div>
               
               <div class="flex flex-col gap-3 pt-4 border-t border-white/10 w-fit">
                 <div class="flex gap-4 items-center">
                   <a href="tel:2105497557" class="text-xl text-slate-200 hover:text-[#d5a021] transition-colors font-mono">210-549-7557</a>
                   <span class="text-slate-600">/</span>
                   <a href="tel:5128564595" class="text-xl text-slate-200 hover:text-[#d5a021] transition-colors font-mono">512-856-4595</a>
                 </div>
                 <a href="mailto:rao@raosengineering.com" class="block text-xl text-slate-200 hover:text-[#d5a021] transition-colors border-b border-transparent hover:border-[#d5a021] w-fit">rao&#64;raosengineering.com</a>
               </div>
            </div>

            <!-- Certifications -->
            <div class="pt-8 border-t border-white/20">
               <h3 class="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-4">Authorized Certifications</h3>
               <div class="flex flex-wrap gap-4">
                  <!-- NMSDC -->
                  <div class="bg-white p-2 rounded w-20 h-14 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                    <img src="assets/certification/nmsdc.jpeg" class="max-h-full max-w-full object-contain">
                  </div>
                  <!-- MBE - Verified Path -->
                  <div class="bg-white p-1 rounded w-20 h-14 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                    <img src="assets/certification/MBE-Logo.webp" class="max-h-full max-w-full object-contain">
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- RIGHT PANEL: Form (Clean Dark/Slate) -->
      <div class="bg-slate-50 flex items-center justify-center p-8 md:p-12 lg:p-20 relative">
         <!-- Geometric Accent -->
         <div class="absolute top-0 right-0 w-32 h-32 bg-[#d5a021]/5 rounded-bl-[100px] pointer-events-none"></div>

         <div class="w-full max-w-lg relative z-10">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Project Consultation</h2>
            </div>
            <div class="h-1 w-12 bg-[#d5a021] mb-8"></div>

            <form (ngSubmit)="onSubmit()" class="space-y-8">
               
               <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <!-- Name -->
                 <div class="group relative">
                   <input type="text" id="name" name="name" [(ngModel)]="formData.name" required placeholder=" "
                     class="peer w-full bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 font-medium focus:border-[#d5a021] focus:outline-none transition-colors placeholder-transparent">
                   <label for="name" class="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d5a021] font-bold uppercase tracking-wider">Full Name</label>
                 </div>

                 <!-- Phone (New) -->
                 <div class="group relative">
                   <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone" placeholder=" "
                     class="peer w-full bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 font-medium focus:border-[#d5a021] focus:outline-none transition-colors placeholder-transparent">
                   <label for="phone" class="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d5a021] font-bold uppercase tracking-wider">Phone Number</label>
                 </div>

                 <!-- Email -->
                 <div class="group relative">
                   <input type="email" id="email" name="email" [(ngModel)]="formData.email" required placeholder=" "
                     class="peer w-full bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 font-medium focus:border-[#d5a021] focus:outline-none transition-colors placeholder-transparent">
                   <label for="email" class="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d5a021] font-bold uppercase tracking-wider">Email Address</label>
                 </div>
               </div>

               <!-- Subject -->
               <div class="group relative">
                 <select id="subject" name="subject" [(ngModel)]="formData.subject"
                   class="peer w-full bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 font-medium focus:border-[#d5a021] focus:outline-none transition-colors cursor-pointer">
                    <option value="" disabled selected class="text-slate-300"></option>
                    <option value="Infrastructure Design">Infrastructure Design</option>
                    <option value="Land Development">Land Development</option>
                    <option value="Hydrology Study">Hydrology & Water Resources</option>
                    <option value="Executive Partnership">Executive Partnership</option>
                 </select>
                 <label for="subject" class="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d5a021] font-bold uppercase tracking-wider">Project Category</label>
               </div>

               <!-- Message -->
               <div class="group relative">
                 <textarea id="message" name="message" [(ngModel)]="formData.message" rows="4" placeholder=" "
                   class="peer w-full bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 font-medium focus:border-[#d5a021] focus:outline-none transition-colors resize-none placeholder-transparent"></textarea>
                 <label for="message" class="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#d5a021] font-bold uppercase tracking-wider">Project Brief</label>
               </div>

               <!-- Submit -->
               <button type="submit" class="w-full bg-slate-900 text-white font-bold py-4 px-8 uppercase tracking-widest hover:bg-[#d5a021] hover:text-slate-900 transition-colors flex items-center justify-between group">
                 <span>Send Message</span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </button>
            </form>
            
         </div>
      </div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    /* Force header to have a dark background on this page only */
    ::ng-deep app-header nav {
      background-color: #0f172a !important; /* slate-900 */
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Thank you. We will be in touch shortly.');
  }
}
