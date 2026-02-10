import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProjectItem {
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Selected Project Experience</h1>
        <p class="subtitle">
          A comprehensive overview of our team's past contributions to commercial, 
          residential, and public infrastructure projects across Texas.
        </p>
      </div>
    </section>

    <div class="container py-16">
      <!-- CATEGORY FILTERS (Visual only for now) -->
      <div class="flex flex-wrap gap-4 mb-12 justify-center">
        <button class="filter-btn active">All Projects</button>
        <button class="filter-btn">Commercial</button>
        <button class="filter-btn">Residential</button>
        <button class="filter-btn">Public Infrastructure</button>
      </div>

      <!-- PROJECTS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div *ngFor="let project of projects" class="project-card">
          <a [routerLink]="['/experience', project.slug]" class="image-wrapper block">
            <img [src]="project.image" [alt]="project.title" loading="lazy">
          </a>
          <div class="content pt-6">
            <span class="category-tag">{{ project.category }}</span>
            <h3 class="text-2xl font-semibold text-slate-800 mb-2">
              <a [routerLink]="['/experience', project.slug]" class="hover:text-slate-600 transition-colors">
                {{ project.title }}
              </a>
            </h3>
            <p class="text-slate-500 font-medium mb-4">{{ project.location }}</p>
            <p class="text-slate-600 leading-relaxed mb-6">
              {{ project.description }}
            </p>
            <a [routerLink]="['/experience', project.slug]" class="inline-flex items-center text-slate-800 font-bold hover:text-slate-600 transition-colors">
              View Project Detail
              <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- REPRESENTATIVE LIST -->
      <div class="mt-20 pt-16 border-t border-slate-200 text-center">
        <h2 class="text-2xl font-bold text-slate-800 mb-8 uppercase tracking-widest text-sm">Full Project Registry</h2>
        <div class="max-w-4xl mx-auto">
          <p class="text-slate-600 leading-loose">
            Burger King – Converse, Kenedy, and Schertz, TX • 
            Whitestone Oaks Apartments – Cedar Park, TX • 
            Vista Ridge Professional Suites – Cedar Park, TX • 
            Canyon Creek Apartments – Porter, TX • 
            Prue Road Townhouses – San Antonio, TX •
            Multiple Texas Quick-Service Developments •
            SAWS Utility Extensions •
            San Antonio Metro Pad Sites
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container text-center py-20">
        <h2 class="text-3xl font-bold text-white mb-6">Partner with RCE Engineering</h2>
        <p class="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
          Ready to discuss your next development project? 
          Our team is here to provide the precision and expertise you need.
        </p>
        <a routerLink="/contact" class="px-10 py-4 bg-white text-slate-800 font-semibold rounded-sm hover:bg-slate-100 transition shadow-lg">
          Get in Touch
        </a>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      height: 45vh;
      min-height: 350px;
      background: linear-gradient(180deg, #2d3748 0%, #1f2937 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 0 2rem;
    }

    .hero-content {
      max-width: 800px;
    }

    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }

    .subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.82);
      line-height: 1.6;
      font-weight: 300;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      font-weight: 500;
      color: #64748b;
      border: 1px solid #e2e8f0;
      transition: all 0.2s ease;
    }

    .filter-btn:hover {
      background: #f8fafc;
      color: #1e293b;
    }

    .filter-btn.active {
      background: #2d3748;
      color: white;
      border-color: #2d3748;
    }

    .project-card {
      display: flex;
      flex-direction: column;
    }

    .image-wrapper {
      aspect-ratio: 16 / 10;
      border-radius: 4px;
      overflow: hidden;
      background: #f1f5f9;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-card:hover img {
      transform: scale(1.03);
    }

    .category-tag {
      font-size: 0.75rem;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
      display: block;
    }

    .cta-section {
      background: #2d3748;
    }
  `]
})
export class ExperiencePageComponent {
  projects: ProjectItem[] = [
    {
      title: 'Whitestone Oaks Apartments',
      slug: 'whitestone-oaks-apartments',
      category: 'Residential & Multifamily',
      location: 'Cedar Park, TX',
      description: 'Comprehensive civil site services including grading, drainage modeling, and infrastructure design for a flagship residential development.',
      image: '/assets/water-context.jpg'
    },
    {
      title: 'Water Resources & Drainage',
      slug: 'water-resources-drainage',
      category: 'Public Infrastructure',
      location: 'South Texas Area',
      description: 'Comprehensive stormwater management and drainage design for municipal and regional systems. We deliver engineered solutions that meet strict regulatory standards.',
      image: '/assets/water-calm.png'
    },
    {
      title: 'Commercial Site Grading',
      slug: 'commercial-site-grading',
      category: 'Commercial',
      location: 'Multiple Locations, TX',
      description: 'Precise grading and infrastructure preparation for professional office suites and medical facilities, ensuring optimal site utilization.',
      image: '/assets/land-calm.png'
    },
    {
      title: 'Transportation Systems',
      slug: 'transportation-systems',
      category: 'Public Infrastructure',
      location: 'Central Texas',
      description: 'Modern highway interchange and bridge infrastructure design, focused on safety, efficiency, and long-term resilience.',
      image: '/assets/transport-calm.png'
    }
  ];
}
