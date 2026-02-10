import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-water-resources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- ELITE HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="assets/rce_topographic_texture_1768626380325.png" alt="Engineering Intelligence Mesh" class="bg-image">
        <div class="hero-overlay"></div>
        <div class="technical-grid"></div>
        <div class="data-pulse" style="top: 20%; left: 15%;"></div>
        <div class="data-pulse" style="top: 65%; left: 80%;"></div>
      </div>
      
      <div class="hero-content">
        <div class="eyebrow">AUSTIN INFRASTRUCTURE STANDARD</div>
        <h1>Water Resources Engineering</h1>
        <p class="subtitle">
          Advanced hydraulics, GSI solutions, and Edwards Aquifer protection 
          for Central Texas's most sensitive watersheds.
        </p>
        <div class="technical-specs">
          <div class="spec"><span>COORD:</span> 30.2672° N, 97.7431° W</div>
          <div class="spec"><span>STATUS:</span> SYSTEM_ACTIVE_OPTIMIZED</div>
        </div>
      </div>
    </section>

    <!-- CONTEXTUAL IMAGE -->
    <section class="context-image-section">
      <div class="context-image-container">
        <div class="service-context-image">
          <img src="/assets/water-calm.png" alt="Engineered stormwater detention basin" loading="lazy">
        </div>
      </div>
    </section>

    <!-- OVERVIEW: AUSTIN FOCUS -->
    <section class="overview">
      <div class="container">
        <p class="premium-lead">
          In Austin's high-stakes regulatory environment, water isn't just a utility—it's a critical environmental asset. 
          RCE delivers elite hydraulic engineering that bridges the gap between ambitious development and 
          stringent Central Texas environmental mandates.
        </p>
        <p>
          Our team specializes in **Green Stormwater Infrastructure (GSI)** and **Edwards Aquifer Recharge Zone (EARZ)** 
          compliance. We protect Austin's downstream assets—including Lady Bird Lake and the Barton Springs Segment—by 
          designing resilient, low-impact drainage systems that mitigate flash-flood risks and remove urban pollutants 
          before they enter our vital waterways.
        </p>
      </div>
    </section>

    <!-- CORE CAPABILITIES -->
    <section class="capabilities">
      <div class="container">
        <h2>Core Capabilities</h2>
        <ul>
          <li>Advanced Hydrologic Modeling (HEC-HMS, PondPack)</li>
          <li>Two-Dimensional (2D) Hydraulic Analysis (HEC-RAS 6.x)</li>
          <li>Regional Stormwater Detention & Channel Stabilization</li>
          <li>FEMA Floodplain Mapping & CLOMR/LOMR Management</li>
          <li>Green Stormwater Infrastructure (GSI) & Water Quality Design</li>
          <li>Edwards Aquifer Recharge Zone (EARZ) WPAP & SCS Coordination</li>
          <li>Strategic Wastewater Master Planning & Lift Station Design</li>
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
              <li>HEC-HMS</li>
              <li>PondPack</li>
              <li>Hydroflow Hydrographs</li>
            </ul>
          </div>

          <div class="expertise-column">
            <h3>Agencies & Regulatory Depth</h3>
            <ul>
              <li>City of Austin (Watershed Protection / DSD)</li>
              <li>Edwards Aquifer Authority (EAA)</li>
              <li>TCEQ (EARZ/SCS/WPAP)</li>
              <li>LCRA & Travis County Compliance</li>
              <li>SAWS & Bexar County Drainage</li>
              <li>FEMA / USACE Coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <p>Ready to discuss your water resources requirements?</p>
        <a routerLink="/contact" class="cta-button">Request a Consultation</a>
      </div>
    </section>
  `,
  styles: [`
    /* HERO - Lighter tone */
    .hero {
      position: relative;
      height: 75vh;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: #0f172a;
      color: #ffffff;
      padding: 0 5%;
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
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 32, 44, 0.6) 100%);
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);
    }

    .technical-grid {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
    }

    .data-pulse {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #4fd1c5;
      border-radius: 50%;
      box-shadow: 0 0 10px #4fd1c5;
      animation: pulse 4s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(3); opacity: 0.2; }
      100% { transform: scale(1); opacity: 0.8; }
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
      text-align: left;
      padding-left: 5%;
    }

    .eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      color: #4fd1c5;
      margin-bottom: 1rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      letter-spacing: -0.04em;
      line-height: 1;
      color: #f8fafc;
    }

    .hero .subtitle {
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      color: rgba(241, 245, 249, 0.85);
      line-height: 1.5;
      margin: 0 0 2rem 0;
      max-width: 650px;
      font-weight: 300;
    }

    .technical-specs {
      display: flex;
      gap: 2rem;
      font-family: 'Roboto Mono', monospace;
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.4);
    }

    .spec span {
      color: #4fd1c5;
      margin-right: 0.5rem;
    }

    .premium-lead {
      font-size: 1.6rem;
      font-weight: 300;
      color: #1a202c;
      line-height: 1.4;
      margin-bottom: 2rem;
      border-left: 4px solid #4fd1c5;
      padding-left: 1.5rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* CONTEXTUAL IMAGE */
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
export class WaterResourcesComponent {}
