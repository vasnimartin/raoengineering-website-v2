import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  scope: string;
  services: string[];
  acreage?: number;
}

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="page-header relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Parallax-like effect -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0 transform scale-105" 
           style="background-image: url('/assets/images/projects/residential_whitestone.png');">
      </div>
      
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90 z-10"></div>
      
      <div class="header-content container relative z-20 text-center px-4">
        <h1 class="page-title text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Our <span class="text-yellow-500">Projects</span>
        </h1>
        <p class="page-subtitle text-xl md:text-2xl text-slate-200 mb-4 font-light max-w-3xl mx-auto drop-shadow-md">
          Engineering Excellence Across Central Texas
        </p>
        <div class="h-1 w-24 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
        <p class="capability-range text-yellow-400 font-medium tracking-wide uppercase text-sm md:text-base">
          From small-scale developments to master-planned communities spanning 7,000+ acres
        </p>
      </div>
    </header>

    <div class="bg-slate-50 py-16">
      <div class="container mx-auto px-4">
        <!-- PROJECT GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div *ngFor="let project of projects" class="project-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
            
            <!-- Project Image -->
            <div class="project-img relative h-64 overflow-hidden bg-slate-800">
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                [ngClass]="project.image"
                [style.background-image]="getBackgroundImage(project.image)">
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80"></div>
              
              <!-- Acreage Badge -->
              <div *ngIf="project.acreage" class="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-lg flex flex-col items-center shadow-lg">
                <span class="text-lg font-bold leading-none">{{ project.acreage | number }}</span>
                <span class="text-[0.65rem] uppercase font-bold tracking-wider">Acres</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex-grow flex flex-col">
              <div class="mb-4">
                <span 
                  class="text-xs font-bold uppercase tracking-widest inline-block mb-2 px-2 py-1 rounded bg-slate-100/50"
                  [ngClass]="{
                    'text-yellow-600 bg-yellow-50': project.category === 'Land Development',
                    'text-cyan-600 bg-cyan-50': project.category === 'Water Resources',
                    'text-orange-600 bg-orange-50': ['Industrial Development', 'Commercial Development', 'Transportation'].includes(project.category)
                  }">
                  {{ project.category }}
                </span>
                <h3 class="text-xl font-bold text-slate-800 mb-1 group-hover:text-yellow-600 transition-colors">
                  {{ project.title }}
                </h3>
                <div class="flex items-center text-slate-500 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ project.location }}
                </div>
              </div>

              <p class="text-slate-600 text-sm leading-relaxed mb-4">
                {{ project.description }}
              </p>

              <div class="mt-auto pt-4 border-t border-slate-100">
                <div class="bg-slate-50 rounded p-3 mb-4 text-xs text-slate-500">
                  <strong class="text-slate-700 block mb-1">Scope:</strong>
                  {{ project.scope }}
                </div>
                
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let service of project.services" class="text-[0.65rem] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {{ service }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SITE INSPECTIONS SECTION -->
        <section class="inspection-services rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
          
          <div class="relative z-10 p-8 md:p-12 lg:p-16 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">Professional <span class="text-yellow-500">Site Inspections</span> & Planning Visits</h2>
            <p class="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">Comprehensive engineering oversight for projects of all scales, ensuring quality and compliance from ground-breaking to completion.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto text-left">
              <!-- Service Item 1 -->
              <div class="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">📋</div>
                <h3 class="text-lg font-bold text-white mb-2">Pre-Construction</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Detailed site evaluations, feasibility studies, and regulatory compliance reviews.</p>
              </div>

              <!-- Service Item 2 -->
              <div class="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">🔍</div>
                <h3 class="text-lg font-bold text-white mb-2">Progress Inspections</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Regular monitoring to ensure construction adheres to approved plans and standards.</p>
              </div>

              <!-- Service Item 3 -->
              <div class="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">✅</div>
                <h3 class="text-lg font-bold text-white mb-2">Compliance Verification</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Final inspections and certification that work meets local, state, and federal regulations.</p>
              </div>

              <!-- Service Item 4 -->
              <div class="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">📊</div>
                <h3 class="text-lg font-bold text-white mb-2">Detailed Reporting</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Comprehensive documentation with photos, measurements, and recommendations.</p>
              </div>
            </div>

            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div class="text-left">
                <h4 class="text-yellow-500 font-bold mb-1">Texas-Wide Service Area</h4>
                <p class="text-slate-400 text-sm">Serving developments from small commercial sites to large-scale communities.</p>
              </div>
              <a routerLink="/contact" class="px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/20 whitespace-nowrap">
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
      title: 'Solana Ranch Master Plan',
      category: 'Land Development',
      location: 'Jarrell, TX (Williamson & Bell Counties)',
      image: 'bg-solana',
      description: 'Master-planned community development across 7,000 acres',
      scope: '14,000 homes, 40,000-50,000 residents, mixed-use development with schools, retail, and recreation. $1-2 billion land development investment.',
      services: ['Land Development', 'Water Resources', 'Infrastructure Planning', 'MUD Approval', 'Environmental'],
      acreage: 7000
    },
    {
      title: 'Elgin Business Park Expansion',
      category: 'Industrial Development',
      location: 'Elgin, TX (Roy Rivers Road)',
      image: 'bg-elgin',
      description: 'Aerospace manufacturing facility and business park infrastructure',
      scope: '50,000+ sq ft precision manufacturing facility expansion. Site development for 80-acre business park supporting aerospace and industrial tenants.',
      services: ['Site Development', 'Public Infrastructure', 'Utilities Design', 'Industrial Engineering'],
      acreage: 80
    },
    {
      title: 'CedarView Mixed-Use Development',
      category: 'Commercial Development',
      location: 'Cedar Park, TX',
      image: 'bg-cedarview',
      description: 'Major retail and hospitality complex near H-E-B Center',
      scope: '1.3M sq ft retail (Nebraska Furniture Mart), 357K sq ft Scheels megastore, Marriott Hotel, and city convention center.',
      services: ['Public Infrastructure', 'Water/Wastewater', 'Transportation Engineering', 'Site Planning']
    },
    {
      title: 'Regional Water Infrastructure',
      category: 'Water Resources',
      location: 'Central Texas Region',
      image: 'bg-water',
      description: 'Regional water system upgrades and long-term planning',
      scope: 'Surge tank expansion (1M to 4M gallons), 54-inch pipeline installation, TWDB 2026 Regional Water Plan compliance through 2080.',
      services: ['Water Resources', 'Infrastructure Design', 'Regional Planning', 'Environmental Compliance']
    },
    {
      title: 'I-35 Capital Express Central',
      category: 'Transportation',
      location: 'Austin, TX',
      image: 'bg-i35',
      description: 'Multi-billion dollar highway reconstruction through central Austin',
      scope: 'Major reconstruction including I-35 bridges over Lady Bird Lake, safety improvements, congestion reduction, pedestrian and cyclist accommodations.',
      services: ['Transportation Engineering', 'Environmental', 'Public Infrastructure', 'Permitting']
    }
  ];

  getBackgroundImage(imageKey: string): string {
    switch (imageKey) {
      case 'bg-solana':
        return "url('/assets/images/projects/residential_whitestone.png')";
      case 'bg-elgin':
        return "url('/assets/images/projects/commercial_bk.png')";
      case 'bg-cedarview':
        return "url('/assets/images/projects/commercial_vista.png')";
      case 'bg-water':
        // Premium technical grid pattern + gradient for Water Resources
        return `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px),
          linear-gradient(135deg, #1a2c50 0%, #0b1c3e 100%)
        `;
      case 'bg-i35':
        // Dynamic diagonal stripe pattern + gradient for Transportation
        return `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 120, 50, 0.1) 10px, rgba(255, 120, 50, 0.1) 20px),
          linear-gradient(135deg, #2c1a50 0%, #1c0b3e 100%)
        `;
      default:
        return 'none';
    }
  }
}
