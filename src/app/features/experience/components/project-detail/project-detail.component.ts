import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ProjectDetail {
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  heroImage: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  deliverables: string[];
  gallery: string[];
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="project" class="project-detail-container">
      <!-- HERO SECTION -->
      <section class="cinematic-hero">
        <div class="hero-bg">
          <img [src]="project.heroImage" [alt]="project.title">
          <div class="overlay"></div>
        </div>
        <div class="container relative z-10 text-center text-white">
          <span class="category-pill">{{ project.category }}</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-xl md:text-2xl text-white/90 font-light">{{ project.location }}</p>
        </div>
      </section>

      <!-- PROJECT METADATA BAR -->
      <div class="metadata-bar border-b border-slate-200">
        <div class="container grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <div>
            <span class="meta-label">Client</span>
            <span class="meta-value">{{ project.client }}</span>
          </div>
          <div>
            <span class="meta-label">Location</span>
            <span class="meta-value">{{ project.location }}</span>
          </div>
          <div>
            <span class="meta-label">Project Type</span>
            <span class="meta-value">{{ project.category }}</span>
          </div>
          <div>
            <span class="meta-label">Status</span>
            <span class="meta-value">Complete</span>
          </div>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="container py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Left Column: Overview -->
          <div class="lg:col-span-2">
            <h2 class="section-title">Project Overview</h2>
            <p class="overview-text leading-relaxed text-slate-700 text-lg mb-12">
              {{ project.overview }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <!-- Challenges -->
              <div class="card">
                <h3 class="card-title">Technical Challenges</h3>
                <ul class="check-list">
                  <li *ngFor="let challenge of project.challenges">{{ challenge }}</li>
                </ul>
              </div>

              <!-- Solutions -->
              <div class="card">
                <h3 class="card-title">Engineering Solutions</h3>
                <ul class="check-list solutions">
                  <li *ngFor="let solution of project.solutions">{{ solution }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Column: Deliverables -->
          <div class="lg:col-span-1">
            <div class="sticky top-24">
              <h2 class="section-title mb-8">Technical Deliverables</h2>
              <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
                <ul class="deliverables-list">
                  <li *ngFor="let item of project.deliverables">
                    <svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GALLERY / IMAGERY -->
      <section class="bg-slate-50 py-20 border-t border-b border-slate-200">
        <div class="container">
          <h2 class="section-title text-center mb-12">Engineering Context</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let img of project.gallery" class="gallery-item">
              <img [src]="img" [alt]="project.title" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-banner py-20 text-center">
        <div class="container">
          <h2 class="text-3xl font-bold mb-6">Have a similar development in mind?</h2>
          <p class="text-slate-600 mb-10 text-xl max-w-2xl mx-auto">
            Our team specialized in scaling infrastructure for residential and commercial growth.
          </p>
          <a routerLink="/contact" class="btn-primary">Discuss Your Project</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .cinematic-hero {
      position: relative;
      height: 65vh;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.8) 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .category-pill {
      display: inline-block;
      padding: 0.25rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
    }

    .meta-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
      margin-bottom: 0.5rem;
    }

    .meta-value {
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
    }

    .section-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: #2d3748;
      margin-top: 0.5rem;
    }

    .card {
      background: #ffffff;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1.5rem;
    }

    .check-list {
      list-style: none;
      padding: 0;
    }

    .check-list li {
      padding-left: 2rem;
      position: relative;
      margin-bottom: 1rem;
      color: #475569;
      line-height: 1.5;
    }

    .check-list li::before {
      content: '✕';
      position: absolute;
      left: 0;
      color: #ef4444;
      font-weight: bold;
    }

    .check-list.solutions li::before {
      content: '✓';
      color: #10b981;
    }

    .deliverables-list {
      list-style: none;
      padding: 0;
    }

    .deliverables-list li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e2e8f0;
      color: #475569;
      font-size: 1rem;
    }

    .deliverables-list li:last-child {
      border-bottom: none;
    }

    .gallery-item {
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 4px;
    }

    .btn-primary {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: #1e293b;
      color: white;
      font-weight: 600;
      border-radius: 2px;
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      background: #334155;
      transform: translateY(-2px);
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | null = null;

  private allProjects: ProjectDetail[] = [
    {
      slug: 'whitestone-oaks-apartments',
      title: 'Whitestone Oaks Apartments',
      client: 'Regional Multifamily Developer',
      category: 'Residential & Multifamily',
      location: 'Cedar Park, TX',
      heroImage: '/assets/water-context.jpg',
      overview: 'Whitestone Oaks is a flagship garden-style residential development consisting of multiple high-density apartment blocks integrated with natural landscape features. RCE Engineering provided end-to-end civil site services to navigate complex topography and strict local drainage requirements.',
      challenges: [
        'Steep existing grades requiring extensive soil stabilization',
        'Strict municipal requirements for downstream impact mitigation',
        'Coordination with adjacent utility corridors'
      ],
      solutions: [
        'Designed tiered detention basins to follow natural terrain',
        'Optimized site grading to minimize soil export costs',
        'Implemented parametric drainage modeling for rapid city approval'
      ],
      deliverables: [
        'Detailed Grading & Drainage Plans',
        'Water & Wastewater Infrastructure Design',
        'SWPPP & Erosion Control Management',
        'Final Subdivision Platting'
      ],
      gallery: [
        '/assets/land-calm.png',
        '/assets/water-calm.png'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.allProjects.find(p => p.slug === slug) || this.allProjects[0]; // Fallback to first for "one project page" request
  }
}
