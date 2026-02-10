import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="assets/abstract-hero.png" alt="Architectural engineering geometry" class="bg-image">
        <div class="hero-overlay"></div>
        <div class="technical-overlay"></div>
      </div>
      <div class="hero-content">
        <h1>About RCE</h1>
        <p class="subtitle">
          RCE has over 18 years of engineering planning and design experience 
          working in land development projects all over Texas.
        </p>
      </div>
    </section>

    <!-- COMPANY OVERVIEW -->
    <section class="overview">
      <div class="container">
        <h2>Who We Are</h2>
        <p>
          Ramirez Consulting Engineers, PLLC (RCE) is a full-service civil engineering
          firm specializing in land development, water resources, transportation, 
          environmental services, and permitting support.
        </p>
        <p>
          With a deep commitment to technical excellence and local expertise, 
          we deliver infrastructure solutions that empower growth across Texas.
        </p>
      </div>
    </section>

    <!-- GUIDING PRINCIPLES -->
    <section class="principles">
      <div class="container">
        <h2>Guiding Principles</h2>
        <div class="principles-grid">
          <div class="principle-item">
            <span class="icon">L</span>
            <h3>Logic</h3>
          </div>
          <div class="principle-item">
            <span class="icon">E</span>
            <h3>Excellence</h3>
          </div>
          <div class="principle-item">
            <span class="icon">R</span>
            <h3>Relatives</h3>
          </div>
          <div class="principle-item">
            <span class="icon">R</span>
            <h3>Religion</h3>
          </div>
          <div class="principle-item">
            <span class="icon">M</span>
            <h3>Mercy</h3>
          </div>
          <div class="principle-item">
            <span class="icon">P</span>
            <h3>Productivity</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CULTURE & TRAINING -->
    <section class="culture">
      <div class="container">
        <div class="culture-content">
          <h2>Our Culture & People</h2>
          <p>
            The guiding principles of RCE shape every aspect of our workplace. 
            Every employee is treated as a member of the family and receives 
            land development consulting training that is client-focused.
          </p>
          <div class="training-box">
            <p>
              For the benefit of both the company and individual careers, 
              we cross-train and offer special possibilities for continuous education. 
              We believe that investing in our people is the cornerstone of 
              delivering precision for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section class="leadership">
      <div class="container">
        <h2>Leadership</h2>
        <div class="leader-card">
          <div class="leader-info">
            <h3>Roland A. Ramirez, P.E.</h3>
            <p class="title">President & Principal Engineer</p>
            <p class="bio">
              With over 18 years of specialized experience in land development 
              and hydraulic engineering, Roland leads RCE’s technical strategy 
              and client delivery across the state of Texas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <p>Partner with an engineering team driven by principles.</p>
        <a routerLink="/contact" class="cta-button">Discuss Your Project</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 55vh;
      min-height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1a202c; /* Fallback */
      color: #ffffff;
      text-align: center;
      padding: 0 2rem;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(26, 32, 44, 0.5) 0%, rgba(15, 23, 42, 0.85) 100%);
    }

    .technical-overlay {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
      background-size: 38px 38px;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 800px;
    }

    .hero h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin: 0 0 1.25rem 0;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .hero .subtitle {
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin: 0;
      font-weight: 400;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .overview {
      padding: 4rem 0;
      background: #ffffff;
    }

    .overview h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 1.5rem 0;
    }

    .overview p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #374151;
      margin: 0 0 1.25rem 0;
    }

    .overview p:last-child {
      margin-bottom: 0;
    }

    .principles {
      padding: 5rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .principles h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 1.75rem;
      font-weight: 700;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .principle-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .principle-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .principle-item .icon {
      width: 48px;
      height: 48px;
      background: #2d3748;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    .principle-item h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a202c;
      margin: 0;
    }

    .culture {
      padding: 5rem 0;
      background: #ffffff;
    }

    .culture-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .culture-content h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .culture-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 2rem;
    }

    .training-box {
      background: #f8fafc;
      border-left: 4px solid #2d3748;
      padding: 2rem;
      border-radius: 0 4px 4px 0;
    }

    .training-box p {
      margin-bottom: 0;
      font-style: italic;
      color: #475569;
    }

    .leadership {
      padding: 4rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .leadership h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 2rem 0;
    }

    .leader-card {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .leader-info h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 0.25rem 0;
    }

    .leader-info .title {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0 0 1rem 0;
      font-weight: 500;
    }

    .leader-info .bio {
      font-size: 1rem;
      color: #374151;
      line-height: 1.7;
      margin: 0;
    }

    .credentials {
      padding: 4rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .credentials h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 2rem 0;
    }

    .credentials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .credential-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .credential-item .label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .credential-item .value {
      font-size: 1rem;
      color: #111827;
      font-weight: 500;
    }

    .cta {
      padding: 4rem 0;
      background: #2d3748;
      text-align: center;
    }

    .cta p {
      font-size: 1.35rem;
      color: #ffffff;
      margin: 0 0 1.5rem 0;
      font-weight: 500;
    }

    .cta-button {
      display: inline-block;
      padding: 0.875rem 2rem;
      background: #ffffff;
      color: #2d3748;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .cta-button:hover {
      background: #f3f4f6;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .hero {
        height: 40vh;
        min-height: 280px;
      }

      .overview,
      .values,
      .leadership,
      .credentials,
      .cta {
        padding: 2.5rem 0;
      }

      .values-grid,
      .credentials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .leader-card {
        flex-direction: column;
      }

      .container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class AboutComponent {}
