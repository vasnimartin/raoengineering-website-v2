import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="experience-section">
      <div class="container">
        <h2>Selected Project Experience</h2>
        <p class="intro">
          Our team has supported a wide range of commercial, residential, and 
          mixed-use developments across Texas.
        </p>

        <div class="categories-grid">
          <!-- Commercial & Retail -->
          <div class="category">
            <h3>Commercial & Retail</h3>
            <ul>
              <li>National quick-service restaurant developments (multiple Texas locations)</li>
              <li>Professional office and medical suites, Cedar Park, TX</li>
              <li>Retail pad site developments, San Antonio metro area</li>
            </ul>
          </div>

          <!-- Residential & Multifamily -->
          <div class="category">
            <h3>Residential & Multifamily</h3>
            <ul>
              <li>Garden-style and townhouse developments, San Antonio, TX</li>
              <li>Large-scale apartment communities, Central and South Texas</li>
              <li>Single-family subdivision infrastructure</li>
            </ul>
          </div>

          <!-- Public Infrastructure -->
          <div class="category">
            <h3>Public Infrastructure</h3>
            <ul>
              <li>Municipal drainage and stormwater improvements</li>
              <li>Roadway widening and reconstruction projects</li>
              <li>Utility system extensions and upgrades</li>
            </ul>
          </div>
        </div>

        <!-- Representative Projects -->
        <div class="representative">
          <h4>Representative Projects Include</h4>
          <p class="project-list mb-8">
            Burger King – Converse, Kenedy, and Schertz, TX • 
            Vista Ridge Professional Suites – Cedar Park, TX • 
            Canyon Creek Apartments – Porter, TX • 
            Prue Road Townhouses – San Antonio, TX
          </p>
          
          <div class="featured-showcase mb-12">
            <div class="showcase-card">
              <div class="showcase-text">
                <span class="eyebrow">Featured Showcase</span>
                <h3>Whitestone Oaks Apartments</h3>
                <p>Comprehensive civil site services including grading and drainage modeling for a flagship residential development.</p>
                <a [routerLink]="['/experience', 'whitestone-oaks-apartments']" class="btn-showcase">
                  View Full Case Study
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <a routerLink="/experience" class="view-all-link">View All Project Experience →</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding: 5rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #111827;
      text-align: center;
      margin: 0 0 1rem 0;
    }

    .intro {
      font-size: 1.1rem;
      color: #4b5563;
      text-align: center;
      max-width: 600px;
      margin: 0 auto 3rem auto;
      line-height: 1.7;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
      margin-bottom: 3rem;
    }

    .category h3 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #374151;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin: 0 0 1rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e7eb;
    }

    .category ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .category li {
      font-size: 0.95rem;
      color: #4b5563;
      padding: 0.5rem 0;
      line-height: 1.5;
      border-bottom: 1px solid #f3f4f6;
    }

    .category li:last-child {
      border-bottom: none;
    }

    .representative {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #e5e7eb;
    }

    .representative h4 {
      font-size: 0.75rem;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0 0 1rem 0;
    }

    .project-list {
      font-size: 0.9rem;
      color: #4b5563;
      line-height: 1.8;
      max-width: 700px;
      margin: 0 auto;
    }

    .view-all-link {
      display: inline-block;
      font-size: 0.95rem;
      font-weight: 600;
      color: #2d3748;
      text-decoration: none;
      border-bottom: 2px solid #2d3748;
      padding-bottom: 2px;
      transition: all 0.2s ease;
    }

    .view-all-link:hover {
      color: #4a5568;
      border-color: #4a5568;
      transform: translateX(4px);
    }

    .featured-showcase {
      max-width: 600px;
      margin: 0 auto;
    }

    .showcase-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-top: 4px solid #1e293b;
      padding: 2.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      transition: transform 0.2s ease;
    }

    .showcase-card:hover {
      transform: translateY(-4px);
    }

    .eyebrow {
      display: block;
      font-size: 0.7rem;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0.75rem;
    }

    .showcase-text h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
      border: none;
      padding: 0;
    }

    .showcase-text p {
      font-size: 1rem;
      color: #475569;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .btn-showcase {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #1e293b;
      color: #ffffff;
      font-weight: 600;
      border-radius: 2px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-showcase:hover {
      background: #334155;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .experience-section {
        padding: 3rem 0;
      }

      .categories-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class ExperienceComponent {}
