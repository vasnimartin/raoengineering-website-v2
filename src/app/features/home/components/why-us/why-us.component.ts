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
            Why <span class="font-bold text-[#d5a021]">Rao’s Consulting Engineers?</span>
          </h2>
          <p class="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            A philosophy built on Logic, Excellence, and Family.
          </p>
        </div>

        <div class="overflow-x-auto pb-8 -mx-4 px-4 no-scrollbar">
          <div class="flex flex-nowrap gap-6 min-w-max md:min-w-0 md:justify-center lg:justify-start">
            <div *ngFor="let item of reasons" class="w-[85vw] md:w-[350px] bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shrink-0">
              <div class="w-14 h-14 mb-6 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#d5a021]/10 transition-colors shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-700 group-hover:text-[#d5a021] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" [innerHTML]="item.icon">
                </svg>
              </div>
              
              <h3 class="text-xl font-bold text-slate-800 mb-4 min-h-[3rem] flex items-center">{{ item.title }}</h3>
              
              <div class="text-slate-600 leading-relaxed text-sm flex-grow">
                <p class="mb-4">{{ item.description }}</p>
                
                <ul *ngIf="item.list" class="space-y-2 mt-4 border-t border-slate-100 pt-4">
                  <li *ngFor="let li of item.list" class="flex items-start">
                    <span class="text-[#d5a021] mr-2">▹</span>
                    <span>{{ li }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicators (Optional visual cue) -->
        <div class="flex justify-center gap-2 mt-4 lg:hidden">
           <div *ngFor="let r of reasons; let i = index" class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .flex-nowrap {
      -webkit-overflow-scrolling: touch;
    }
  `]
})
export class WhyUsComponent {
  reasons = [
    {
      title: 'We Move Projects from Concept to Construction — Efficiently.',
      description: 'Land development is not just design — it’s entitlement navigation, risk management, and execution. We understand the regulatory landscape in Texas and structure every project to move through review agencies with clarity and purpose.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>'
    },
    {
      title: 'We Design With Approval in Mind',
      description: 'Our plans are engineered for constructability and agency approval. We anticipate reviewer concerns before submission and minimize costly cycles of comments and delays.',
      list: [
        'Drainage & stormwater compliance',
        'Site grading optimization',
        'Utility coordination',
        'Permit-ready construction documents',
        'Technical narratives that withstand scrutiny'
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
    },
    {
      title: 'Strategic Problem Solvers',
      description: 'Every site has constraints — topography, environmental regulations, access limitations, or utility conflicts. We don’t just identify issues; we structure solutions that balance:',
      list: [
        'Regulatory compliance',
        'Budget realities',
        'Schedule objectives',
        'Long-term asset value'
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
    },
    {
      title: 'Deep Knowledge of Texas Jurisdictions',
      description: 'From municipal review processes to agency coordination, we understand how Texas cities operate. That experience translates into:',
      list: [
        'Faster approvals',
        'Cleaner submittals',
        'Fewer surprises'
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'
    },
    {
      title: 'Business-Minded Engineering',
      description: 'We think like developers because we work alongside them. Engineering decisions impact ROI, construction cost, and market timing. We design accordingly.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'
    },
    {
      title: 'Responsive & Accountable',
      description: 'Your project receives executive-level oversight from start to finish.',
      list: [
        'Clear communication',
        'Defined deliverables',
        'Proactive coordination',
        'No ambiguity'
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>'
    },
    {
      title: 'Built for Growth',
      description: 'Whether it’s a single commercial pad or a multi-phase development, we scale with your vision and deliver with discipline.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>'
    }
  ];
}
