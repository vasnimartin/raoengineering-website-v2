import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-environmental',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="assets/environmental-context.jpg" alt="Environmental engineering site" class="bg-image">
        <div class="hero-overlay"></div>
        <div class="technical-overlay"></div>
      </div>
      <div class="hero-content">
        <h1>Environmental Services</h1>
        <p class="subtitle">
          Environmental compliance, permitting support, and ecological
          assessments for development projects across Texas.
        </p>
      </div>
    </section>

    <!-- CONTEXTUAL IMAGE -->
    <section class="context-image-section">
      <div class="context-image-container">
        <div class="service-context-image environmental-image">
          <img src="/assets/permitting-context.jpg" alt="Managed environmental systems with sustainable infrastructure" loading="lazy">
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="overview">
      <div class="container">
        <p>
          RCE provides environmental consulting services that support project
          development while ensuring regulatory compliance. Our team navigates
          federal, state, and local environmental requirements to keep your
          project moving forward.
        </p>
      </div>
    </section>

    <!-- CORE CAPABILITIES -->
    <section class="capabilities">
      <div class="container">
        <h2>Core Capabilities</h2>
        <ul>
          <li>NEPA Documentation (CE, EA, EIS)</li>
          <li>Phase I & Phase II Environmental Site Assessments</li>
          <li>Wetland Delineation & Permitting</li>
          <li>Waters of the U.S. Identification</li>
          <li>Threatened & Endangered Species Surveys</li>
          <li>Stormwater Pollution Prevention Plans (SWPPP)</li>
          <li>Environmental Impact Mitigation</li>
        </ul>
      </div>
    </section>

    <!-- REGULATORY & TECHNICAL EXPERTISE -->
    <section class="expertise">
      <div class="container">
        <h2>Regulatory & Technical Expertise</h2>

        <div class="expertise-grid">
          <div class="expertise-column">
            <h3>Standards & Tools</h3>
            <ul>
              <li>GIS Spatial Analysis</li>
              <li>GPS Field Data Collection</li>
              <li>ASTM ESA Standards</li>
              <li>Wetland Delineation Protocols</li>
            </ul>
          </div>

          <div class="expertise-column">
            <h3>Agencies & Compliance</h3>
            <ul>
              <li>U.S. Army Corps of Engineers</li>
              <li>U.S. Fish & Wildlife Service</li>
              <li>TCEQ</li>
              <li>EPA</li>
              <li>Texas Parks & Wildlife</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <p>Ready to discuss your environmental requirements?</p>
        <a routerLink="/contact" class="cta-button">Request a Consultation</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 60vh;
      min-height: 380px;
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
      background: linear-gradient(180deg, rgba(26, 32, 44, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%);
    }

    .technical-overlay {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 800px;
    }

    .hero h1 {
      font-size: clamp(2.25rem, 4.5vw, 3.5rem);
      font-weight: 700;
      margin: 0 0 1.25rem 0;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .hero .subtitle {
      font-size: clamp(1.05rem, 1.8vw, 1.25rem);
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

    .context-image-section {
      padding: 2.5rem 0 0 0;
      background: #ffffff;
    }

    .context-image-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .service-context-image {
      aspect-ratio: 21 / 9;
      border-radius: 8px;
      overflow: hidden;
    }

    .service-context-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Environmental: slightly more desaturated for subtle compliance feel */
    .environmental-image img {
      filter: brightness(1.08) saturate(0.75) contrast(0.92);
    }

    .overview {
      padding: 2rem 0 3rem 0;
      background: #ffffff;
    }

    .overview p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #374151;
      margin: 0;
    }

    .capabilities {
      padding: 4rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .capabilities h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 1.75rem 0;
    }

    .capabilities ul {
      list-style: disc;
      padding: 0 0 0 1.5rem;
      margin: 0;
    }

    .capabilities li {
      font-size: 1.05rem;
      color: #374151;
      padding: 0.5rem 0;
      line-height: 1.5;
    }

    .expertise {
      padding: 4rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .expertise h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 2rem 0;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    .expertise-column h3 {
      font-size: 0.8rem;
      font-weight: 600;
      color: #6b7280;
      margin: 0 0 0.75rem 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .expertise-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .expertise-column li {
      font-size: 0.95rem;
      color: #4b5563;
      padding: 0.4rem 0;
      line-height: 1.5;
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
        height: 45vh;
        min-height: 300px;
      }

      .context-image-section {
        padding: 2rem 0 0 0;
      }

      .service-context-image {
        aspect-ratio: 4 / 3;
      }

      .overview,
      .capabilities,
      .expertise,
      .cta {
        padding: 2.5rem 0;
      }

      .expertise-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .container,
      .context-image-container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class EnvironmentalComponent {}
