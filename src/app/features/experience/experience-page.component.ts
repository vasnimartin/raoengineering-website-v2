import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  challengesSummary?: string;
  scope: string;
  services: string[];
  acreage?: number;
  slug?: string;
}

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="page-header relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950">
      <!-- Layer 1: The Luminous Blueprint (Enhanced Contrast) -->
      <div class="absolute inset-0 z-0">
        <img src="assets/images/brand/experience_hero_blueprint.png" 
          alt="Engineering Master Plan Blueprint" 
          class="w-full h-full object-cover grayscale invert brightness-[0.4] contrast-[1.8] opacity-60 mix-blend-screen">
      </div>

      <!-- Layer 2: Gold Technical Glow Layer -->
      <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#d5a021]/10 to-transparent mix-blend-overlay"></div>

      <!-- Layer 3: Dynamic Gradient System for Depth -->
      <div class="absolute inset-0 bg-slate-950/40 z-20"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-20"></div>
      
      <!-- Layer 4: Micro-Grid Precision Pattern (More Visible) -->
      <div class="absolute inset-0 z-20 opacity-[0.15] pointer-events-none" 
           style="background-image: radial-gradient(circle at 1.5px 1.5px, #d5a021 1px, transparent 0); background-size: 50px 50px;"></div>

      <div class="header-content container relative z-30 text-center px-4 max-w-5xl">
        <div class="inline-flex items-center gap-3 mb-6 animate-fade-in">
          <span class="h-[1px] w-8 bg-[#d5a021]"></span>
          <span class="text-[#d5a021] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Proven Project Delivery</span>
          <span class="h-[1px] w-8 bg-[#d5a021]"></span>
        </div>
        
        <h1 class="page-title text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Engineering the <br class="hidden md:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a021] via-yellow-200 to-[#d5a021]">Built Environment</span>
        </h1>
        
        <p class="page-subtitle text-base md:text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed border-l-2 border-[#d5a021]/20 pl-6">
          Architecting Texas through rigorous technical analysis, precision site execution, and complex infrastructure delivery.
        </p>

        <!-- Executive Metrics Bar -->
        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-8 relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-[#d5a021]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="text-center relative z-10 w-full md:w-auto">
            <div class="text-3xl md:text-4xl font-bold text-white mb-1">7,000<span class="text-[#d5a021] text-xl">+</span></div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-[#d5a021] font-bold">Acres Managed</div>
          </div>
          
          <div class="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div class="text-center relative z-10 w-full md:w-auto">
            <div class="text-3xl md:text-4xl font-bold text-white mb-1">14,000<span class="text-[#d5a021] text-xl">+</span></div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-[#d5a021] font-bold">Units Planned</div>
          </div>
          
          <div class="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div class="text-center relative z-10 w-full md:w-auto">
            <div class="text-3xl md:text-4xl font-bold text-white mb-1">Texas<span class="text-[#d5a021] text-xl">Wide</span></div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-[#d5a021] font-bold">Deep Infrastructure</div>
          </div>
        </div>

      </div>

      <!-- Scroll Indicator (Moved outside header-content for correct absolute positioning) -->
      <button (click)="scrollToProjects()" class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity duration-300 group cursor-pointer border-none bg-transparent z-40">
        <span class="text-[10px] text-white uppercase tracking-[0.4em] font-bold group-hover:text-[#d5a021] transition-colors mb-1">Discover Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#d5a021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </header>

    <div class="bg-slate-50 py-16">
      <div class="container mx-auto px-4">
        <!-- PROJECT GRID -->
        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 scroll-mt-24">
          <a *ngFor="let project of projects" 
             [routerLink]="project.slug ? ['/experience', project.slug] : null"
             [class.cursor-pointer]="project.slug"
             [class.cursor-default]="!project.slug"
             class="project-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full block">
            
            <!-- Project Image -->
            <div class="project-img relative h-64 overflow-hidden bg-slate-800">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                [ngClass]="project.image"
                [style.background-image]="getBackgroundImage(project.image)">
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80"></div>
              
              <!-- Acreage Badge -->
              <div *ngIf="project.acreage" class="absolute top-4 right-4 bg-[#d5a021]/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded flex flex-col items-center shadow-lg">
                <span class="text-lg font-bold leading-none">{{ project.acreage | number }}</span>
                <span class="text-[0.65rem] uppercase font-bold tracking-wider">Acres</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex-grow flex flex-col">
              <div class="mb-4">
                <span 
                  class="text-xs font-bold uppercase tracking-widest inline-block mb-3 px-2 py-1 rounded bg-slate-100/50"
                  [ngClass]="{
                    'text-[#d5a021] bg-yellow-50': project.category === 'Land Development',
                    'text-cyan-600 bg-cyan-50': project.category === 'Water Resources',
                    'text-orange-600 bg-orange-50': ['Industrial Development', 'Commercial Development', 'Transportation', 'Residential'].includes(project.category)
                  }">
                  {{ project.category }}
                </span>
                <h3 class="text-xl font-bold text-slate-800 mb-1 group-hover:text-[#d5a021] transition-colors">
                  {{ project.title }}
                </h3>
                <div class="flex items-center text-slate-500 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[#d5a021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ project.location }}
                </div>
              </div>

              <!-- Technical Summary (Challenges) -->
              <div *ngIf="project.challengesSummary" class="mb-6 space-y-2">
                <span class="text-[10px] font-bold text-[#d5a021] uppercase tracking-[0.2em]">Mitigation & Analysis</span>
                <p class="text-sm text-slate-600 leading-relaxed font-light line-clamp-3">
                  {{ project.challengesSummary }}
                </p>
              </div>

              <div class="mt-auto pt-4 border-t border-slate-100">
                <div class="bg-slate-50 rounded p-4 mb-6 text-xs text-slate-500 leading-relaxed italic border-l-2 border-[#d5a021]">
                  {{ project.scope }}
                </div>
                
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let service of project.services" class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">
                    {{ service }}
                  </span>
                </div>
                
                <!-- Call to Action for Detailed Projects -->
                <div *ngIf="project.slug" class="mt-6 text-xs font-bold text-[#d5a021] uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
                  Access Dossier <span class="ml-2 font-serif">→</span>
                </div>
              </div>
            </div>
          </a>
        </div>


        <!-- SITE INSPECTIONS SECTION -->
        <section class="inspection-services rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative shadow-2xl">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
          
          <div class="relative z-10 p-8 md:p-12 lg:p-20 text-center text-white">
            <span class="text-[#d5a021] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Field Operations</span>
            <h2 class="text-4xl font-bold mb-4 tracking-tight leading-tight">Professional <span class="text-[#d5a021]">Site Inspections</span></h2>
            <p class="text-slate-400 max-w-2xl mx-auto mb-16 text-lg font-light">Comprehensive engineering oversight for projects of all scales, ensuring technical compliance from ground-breaking to completion.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 max-w-6xl mx-auto text-left">
              <!-- Service Item 1 -->
              <div class="group">
                <div class="text-[#d5a021] font-mono text-sm mb-4">01 / Scoping</div>
                <h3 class="text-lg font-bold text-white mb-2">Pre-Construction</h3>
                <p class="text-slate-400 text-sm leading-relaxed font-light">Detailed site evaluations, feasibility studies, and regulatory compliance reviews.</p>
              </div>

              <!-- Service Item 2 -->
              <div class="group">
                <div class="text-[#d5a021] font-mono text-sm mb-4">02 / Oversight</div>
                <h3 class="text-lg font-bold text-white mb-2">Progress Inspections</h3>
                <p class="text-slate-400 text-sm leading-relaxed font-light">Regular monitoring to ensure construction adheres to approved plans and standards.</p>
              </div>

              <!-- Service Item 3 -->
              <div class="group">
                <div class="text-[#d5a021] font-mono text-sm mb-4">03 / Auditing</div>
                <h3 class="text-lg font-bold text-white mb-2">Compliance Verification</h3>
                <p class="text-slate-400 text-sm leading-relaxed font-light">Final inspections and certification that work meets local, state, and federal regulations.</p>
              </div>

              <!-- Service Item 4 -->
              <div class="group">
                <div class="text-[#d5a021] font-mono text-sm mb-4">04 / Reporting</div>
                <h3 class="text-lg font-bold text-white mb-2">Detailed Reporting</h3>
                <p class="text-slate-400 text-sm leading-relaxed font-light">Comprehensive documentation with photos, measurements, and recommendations.</p>
              </div>
            </div>

            <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div class="text-left">
                <h4 class="text-[#d5a021] font-bold mb-1 tracking-wide uppercase text-sm">Texas Service Area</h4>
                <p class="text-slate-400 text-xs font-light">Serving developments from small commercial sites to large-scale communities.</p>
              </div>
              <a routerLink="/contact" class="px-10 py-4 bg-[#d5a021] text-slate-900 font-bold uppercase tracking-widest text-xs rounded hover:bg-yellow-400 transition shadow-lg hover:shadow-[#d5a021]/20 whitespace-nowrap">
                Schedule a Site Visit
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ExperiencePageComponent {
  projects: Project[] = [
    {
      title: 'Burger King',
      category: 'Commercial Development',
      location: 'Converse, TX',
      image: 'bg-bk-converse',
      description: 'Site development and engineering for new commercial retail facility.',
      challengesSummary: 'Optimized site layout for high-volume traffic flow and efficient utility connections.',
      scope: 'Ground-up commercial construction, site grading, and utility infrastructure.',
      services: ['Civil Engineering', 'Site Development', 'Permitting']
    },
    {
      title: 'Burger King',
      category: 'Commercial Development',
      location: 'Kenedy, TX',
      image: 'bg-bk-kenedy',
      description: 'Site engineering for commercial expansion in the Kenedy region.',
      challengesSummary: 'Navigated local land use regulations to expedite project delivery.',
      scope: 'Commercial site planning, drainage analysis, and utility design.',
      services: ['Civil Engineering', 'Site Development', 'Drainage']
    },
    {
      title: 'Whitestone Oaks Apartments',
      category: 'Residential',
      location: 'Cedar Park, TX',
      image: 'bg-whitestone-oaks',
      description: 'Luxury residential community with complex terrain management.',
      challengesSummary: 'Mitigated complex karst geology and aquifer recharge zone regulations.',
      scope: 'Multi-family residential development, specialized detention systems, and terraced grading.',
      services: ['Civil Engineering', 'Site Grading', 'Drainage', 'Permitting'],
      slug: 'whitestone-oaks-apartments'
    },
    {
      title: 'Burger King',
      category: 'Commercial Development',
      location: 'FM 78 Schertz, TX',
      image: 'bg-bk-schertz',
      description: 'Strategic commercial development along high-traffic corridor.',
      challengesSummary: 'Complex FM highway access coordination and drainage mitigation.',
      scope: 'Highway access planning, site civil design, and regulatory approval.',
      services: ['Civil Engineering', 'Transportation', 'Site Development']
    },
    {
      title: 'Vista Ridge Professional Suites',
      category: 'Commercial Development',
      location: 'Cedar Park, TX',
      image: 'bg-vista-ridge',
      description: 'Professional medical and corporate office complex.',
      challengesSummary: 'Integrated professional office requirements with sensitive environmental standards.',
      scope: 'Office shell site development, detention ponds, and ADA-compliant access.',
      services: ['Civil Engineering', 'Site Planning', 'Permitting']
    },
    {
      title: 'Canyon Creek Apartments',
      category: 'Residential',
      location: 'Porter, TX',
      image: 'bg-canyon-creek',
      description: 'High-density multi-family housing development.',
      challengesSummary: 'Large-scale drainage management and detention basin optimization.',
      scope: 'Residential site engineering, utility main extensions, and site grading.',
      services: ['Civil Engineering', 'Water Resources', 'Residential']
    },
    {
      title: 'Prue Road Townhouses',
      category: 'Residential',
      location: 'San Antonio, TX',
      image: 'bg-prue-road',
      description: 'Modern urban residential townhouse development.',
      challengesSummary: 'Maximized site density within urban infill constraints while maintaining green space.',
      scope: 'Infill residential development, private street design, and utility coordination.',
      services: ['Civil Engineering', 'Site Development', 'Urban Engineering']
    }
  ];

  scrollToProjects() {
    document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' });
  }

  getBackgroundImage(imageKey: string): string {
    const assetsPath = '/assets/projects/';
    switch (imageKey) {
      case 'bg-bk-converse':
        return `url('${assetsPath}burger King, Converse, TX.png')`;
      case 'bg-bk-kenedy':
        return `url('${assetsPath}Burger King, Kenedy, TX.png')`;
      case 'bg-whitestone-oaks':
        return `url('${assetsPath}Whitestone Oaks Apartments, Cedar Park , TX.jpg')`;
      case 'bg-bk-schertz':
        return `url('${assetsPath}Burger King, FM 78 Schertz, TX.png')`;
      case 'bg-vista-ridge':
        return `url('${assetsPath}Vista Ridge Professional Suites, Cedar Park, TX.jpg')`;
      case 'bg-canyon-creek':
        return `url('${assetsPath}Canyon Creek Apartments, Porter, TX.png')`;
      case 'bg-prue-road':
        return `url('${assetsPath}Prue Road Townhouses, San Antonio, TX.jpg')`;
      default:
        return 'none';
    }
  }
}
