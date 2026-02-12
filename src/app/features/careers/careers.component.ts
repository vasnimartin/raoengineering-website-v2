import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- HERO SECTION: Command Your Career -->
    <section class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="assets/images/team/professional_ceo_portrait_1770853096194.png" alt="Engineering Team" title="Engineering Team" class="w-full h-full object-cover opacity-30 scale-105 animate-subtle-zoom">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        <div class="absolute inset-0 bg-[url('/assets/images/brand/rce_topographic_texture_1768626380325.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <span class="inline-block py-1 px-3 border border-[#d5a021]/50 rounded text-[#d5a021] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
          Classified: Top Talent Only
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
          COMMAND YOUR <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a021] to-amber-200">CAREER</span>
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Join the elite engineering force shaping the future of Texas infrastructure. 
          High stakes. Massive impact. Unmatched legacy.
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#positions" class="px-8 py-4 bg-[#d5a021] text-slate-900 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg shadow-amber-900/20">
            View Active Directives
          </a>
          <a routerLink="/about" class="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
            Read Our Manifesto
          </a>
        </div>
      </div>
    </section>

    <!-- MISSION BRIEFING -->
    <section class="py-24 bg-slate-950 text-white relative border-b border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-[#d5a021] text-sm font-bold tracking-[0.2em] uppercase mb-4">Mission Briefing</h2>
            <h3 class="text-4xl font-bold mb-6">Why We Serve Texas</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              At Rao Engineering, we don't just draft plans; we engineer the backbone of civilization. 
              From critical water systems to sprawling transportation networks, our work defines how Texas lives, moves, and grows.
            </p>
            <p class="text-slate-400 leading-relaxed mb-8">
              We operate with military precision and a family ethos. Excellence is our standard, and integrity is our currency.
            </p>
            
            <div class="grid grid-cols-2 gap-8">
              <div class="p-6 bg-slate-900 border border-white/5 rounded-lg">
                <div class="text-3xl font-black text-white mb-2">100%</div>
                <div class="text-xs text-[#d5a021] uppercase tracking-wider font-bold">Client Retention</div>
              </div>
              <div class="p-6 bg-slate-900 border border-white/5 rounded-lg">
                <div class="text-3xl font-black text-white mb-2">A+</div>
                <div class="text-xs text-[#d5a021] uppercase tracking-wider font-bold">Culture Rating</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -inset-4 border-2 border-[#d5a021]/20 rounded-lg transform rotate-3"></div>
            <img src="assets/images/team/infrastructure_designer_portrait_2_1770853202858.png" alt="Team Collaboration" title="Team Collaboration" class="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          </div>
        </div>
      </div>
    </section>

    <!-- ACTIVE DIRECTIVES (JOBS) -->
    <section id="positions" class="py-24 bg-slate-900 relative">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-16">
          <h2 class="text-[#d5a021] text-sm font-bold tracking-[0.2em] uppercase mb-4">Personnel Requirements</h2>
          <h3 class="text-4xl font-bold text-white">Active Directives</h3>
        </div>

        <div class="space-y-4">
          <!-- Job Item 1 -->
          <div class="group relative bg-slate-950 border border-white/5 p-8 rounded-lg hover:border-[#d5a021]/50 transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 class="text-xl font-bold text-white mb-2 group-hover:text-[#d5a021] transition-colors">Senior Civil Engineer (P.E.)</h4>
                <div class="flex gap-4 text-sm text-slate-500">
                  <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span> San Antonio HQ</span>
                  <span>•</span>
                  <span>Full-Time</span>
                </div>
              </div>
              <a href="mailto:careers@raoengineering.com?subject=Application: Senior Civil Engineer" class="px-6 py-3 bg-white/5 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#d5a021] hover:text-slate-900 transition-all rounded">
                Initiate Application
              </a>
            </div>
          </div>

          <!-- Job Item 2 -->
          <div class="group relative bg-slate-950 border border-white/5 p-8 rounded-lg hover:border-[#d5a021]/50 transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 class="text-xl font-bold text-white mb-2 group-hover:text-[#d5a021] transition-colors">Graduate Engineer (E.I.T.)</h4>
                <div class="flex gap-4 text-sm text-slate-500">
                  <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span> San Antonio HQ</span>
                  <span>•</span>
                  <span>Entry Level</span>
                </div>
              </div>
              <a href="mailto:careers@raoengineering.com?subject=Application: Graduate Engineer" class="px-6 py-3 bg-white/5 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#d5a021] hover:text-slate-900 transition-all rounded">
                Initiate Application
              </a>
            </div>
          </div>

          <!-- Job Item 3 -->
          <div class="group relative bg-slate-950 border border-white/5 p-8 rounded-lg hover:border-[#d5a021]/50 transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 class="text-xl font-bold text-white mb-2 group-hover:text-[#d5a021] transition-colors">Senior CAD Technician</h4>
                <div class="flex gap-4 text-sm text-slate-500">
                  <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Remote / Hybrid</span>
                  <span>•</span>
                  <span>Experience Required</span>
                </div>
              </div>
              <a href="mailto:careers@raoengineering.com?subject=Application: Senior CAD Technician" class="px-6 py-3 bg-white/5 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#d5a021] hover:text-slate-900 transition-all rounded">
                Initiate Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-[#d5a021] text-slate-900 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-black mb-6 uppercase tracking-tight">Ready to Deploy?</h2>
        <p class="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
          We are always looking for exceptional talent to join our ranks. 
          Send your credentials for review by our Command Team.
        </p>
        <a href="mailto:careers@raoengineering.com" class="inline-block px-10 py-5 bg-slate-900 text-white font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-2xl transform hover:-translate-y-1">
          Submit Credentials
        </a>
      </div>
    </section>
  `,
  styles: [`
    @keyframes subtle-zoom {
      0% { transform: scale(1.05); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1.05); }
    }
    .animate-subtle-zoom {
      animation: subtle-zoom 20s infinite ease-in-out;
    }
  `]
})
export class CareersComponent { }
