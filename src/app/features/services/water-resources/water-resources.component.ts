import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-water-resources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/assets/generated-images/water_resources.png" alt="Water Resources Engineering" class="bg-image">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <h1>Water Resources Engineering</h1>
        <p class="subtitle">
          Managing Texas' water challenges—from drought to flooding—with practical drainage solutions and regulatory expertise.
        </p>
        <div class="cta-buttons">
          <a routerLink="/contact" class="cta-button primary">Request Drainage Analysis</a>
          <a routerLink="/contact" class="cta-button secondary">Discuss Your Project</a>
        </div>
      </div>
    </section>

    <!-- STATS CALLOUT -->
    <section class="stats" #statsSection>
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item animate-on-scroll">
            <span class="stat-number" [attr.data-target]="154">0</span><span class="stat-number">B</span>
            <span class="stat-label">TX Water Investment Needed</span>
          </div>
          <div class="stat-item animate-on-scroll">
            <span class="stat-number" [attr.data-target]="500">0</span><span class="stat-number">+</span>
            <span class="stat-label">Stormwater Projects</span>
          </div>
          <div class="stat-item animate-on-scroll">
            <span class="stat-number">100%</span>
            <span class="stat-label">TCEQ Permit Approval</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXT IMAGE -->
    <section class="context-image-section">
      <div class="context-image-container">
        <div class="service-context-image">
          <img src="/assets/generated-images/water_future.png" alt="Advanced hydraulic modeling" loading="lazy">
        </div>
      </div>
    </section>

    <!-- TEXAS WATER REALITY -->
    <section class="challenges">
      <div class="container">
        <h2>Texas Water Reality</h2>
        <p class="intro">
          Texas is dealing with something unusual: severe drought and catastrophic flooding at the same time. 
          Our water systems need to handle both extremes, and that's where smart engineering makes the difference.
        </p>
        
        <div class="challenges-grid">
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">💧</div>
            <h3>Drought Meets Flooding</h3>
            <p>
              Multi-year drought since 2020 has depleted reservoirs. Then 2025 brought catastrophic floods. 
              You need systems that can capture and store water during floods, then use it during droughts.
            </p>
          </div>
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">📋</div>
            <h3>TCEQ Permit Maze</h3>
            <p>
              Stormwater permits are renewing in August 2026. NPDES and MS4 requirements keep changing. 
              One mistake delays your project months. We navigate this daily.
            </p>
          </div>
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">🏗️</div>
            <h3>Aging Infrastructure</h3>
            <p>
              Texas loses billions in water from leaking pipes. Outdated drainage causes urban flooding. 
              The state approved $20B in funding starting 2027—but projects must be in the State Water Plan to qualify.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="services">
      <div class="container">
        <h2>What We Do</h2>
        
        <div class="services-grid">
          <div class="service-card animate-on-scroll">
            <h3>Stormwater Management</h3>
            <ul>
              <li>Detention and retention basins</li>
              <li>Green infrastructure (rain gardens, bioswales)</li>
              <li>Water quality treatment systems</li>
              <li>Rainwater harvesting for dual-purpose use</li>
            </ul>
          </div>
          
          <div class="service-card animate-on-scroll">
            <h3>Drainage Engineering</h3>
            <ul>
              <li>Storm sewer design and analysis</li>
              <li>Channel and culvert hydraulics</li>
              <li>Site grading and drainage plans</li>
              <li>Parking lot and roadway drainage</li>
            </ul>
          </div>
          
          <div class="service-card animate-on-scroll">
            <h3>Flood Control</h3>
            <ul>
              <li>FEMA floodplain compliance</li>
              <li>Flood risk assessments</li>
              <li>Master drainage plans</li>
              <li>Emergency flood mitigation</li>
            </ul>
          </div>
          
          <div class="service-card animate-on-scroll">
            <h3>Regulatory Compliance</h3>
            <ul>
              <li>NPDES/MS4 permitting</li>
              <li>TCEQ coordination and approvals</li>
              <li>Water quality monitoring plans</li>
              <li>State Water Plan compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNOLOGY -->
    <section class="tech">
      <div class="container">
        <h2>Tools We Use</h2>
        <p class="tech-intro">
          Modern water engineering requires sophisticated modeling. Here's what we use to design your systems:
        </p>
        
        <div class="tech-grid">
          <div class="tech-badge animate-on-scroll">
            <div class="tech-icon">🌊</div>
            <h4>HEC-RAS</h4>
            <p>Hydraulic modeling for channels and floodplains</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <div class="tech-icon">💧</div>
            <h4>SWMM</h4>
            <p>Stormwater runoff and water quality analysis</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <div class="tech-icon">🗺️</div>
            <h4>GIS</h4>
            <p>Watershed delineation and spatial analysis</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <div class="tech-icon">📐</div>
            <h4>Civil 3D</h4>
            <p>Drainage design and construction documents</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY RAO -->
    <section class="advantages">
      <div class="container">
        <h2>Why Work With Us</h2>
        
        <div class="advantages-grid">
          <div class="advantage animate-on-scroll">
            <h3>Texas Regulatory Expertise</h3>
            <p>
              We work with TCEQ, TWDB, and local authorities regularly. We know the people, the processes, 
              and the shortcuts that keep your project moving. 100% permit approval rate because we do it right the first time.
            </p>
          </div>
          
          <div class="advantage animate-on-scroll">
            <h3>Drought + Flood Solutions</h3>
            <p>
              Most firms design for one or the other. We design systems that handle both. Detention basins that double 
              as rainwater harvesting. Green infrastructure that reduces flooding while recharging groundwater.
            </p>
          </div>
          
          <div class="advantage animate-on-scroll">
            <h3>Funding Navigation</h3>
            <p>
              The $20B Texas Water Fund starts in 2027. We help you get your project into the State Water Plan so 
              you qualify for funding. We've done this before—we know what works.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DELIVERABLES -->
    <section class="deliverables">
      <div class="container">
        <h2>What You Get</h2>
        <div class="deliverables-grid">
          <div class="deliverable-column">
            <h3>Studies & Plans</h3>
            <ul>
              <li>Drainage studies</li>
              <li>Master drainage plans</li>
              <li>Stormwater management plans</li>
              <li>Hydraulic modeling reports</li>
            </ul>
          </div>
          
          <div class="deliverable-column">
            <h3>Permits & Compliance</h3>
            <ul>
              <li>NPDES/MS4 applications</li>
              <li>TCEQ permit packages</li>
              <li>FEMA LOMR/CLOMR</li>
              <li>Water quality monitoring plans</li>
            </ul>
          </div>
          
          <div class="deliverable-column">
            <h3>Construction Documents</h3>
            <ul>
              <li>Detailed design drawings</li>
              <li>Technical specifications</li>
              <li>Construction cost estimates</li>
              <li>Bid support and review</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMITMENT -->
    <section class="commitment">
      <div class="container">
        <h2>Our Commitment</h2>
        <div class="commitment-grid">
          <div class="commitment-column">
            <h3>Responsive Service</h3>
            <ul>
              <li>24-hour response to flooding emergencies</li>
              <li>Weekly project updates</li>
              <li>Direct engineer phone/email access</li>
              <li>No account manager layers</li>
            </ul>
          </div>
          <div class="commitment-column">
            <h3>Regulatory Navigation</h3>
            <ul>
              <li>TCEQ permit expertise</li>
              <li>FEMA compliance assistance</li>
              <li>Proactive code interpretation</li>
              <li>Agency coordination on your behalf</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="cta">
      <div class="container">
        <h2>Ready to Solve Your Water Challenges?</h2>
        <p>Whether you're dealing with flooding, need a drainage study, or navigating TCEQ permits—we can help.</p>
        <div class="cta-buttons">
          <a routerLink="/contact" class="cta-button primary">Request Drainage Analysis</a>
          <a routerLink="/contact" class="cta-button secondary">Schedule Consultation</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* HERO */
    .hero {
      position: relative;
      height: 65vh;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0c4a6e;
      color: #ffffff;
      text-align: center;
      padding: 0 2rem;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
    }

    .bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.05);
      transition: transform 8s ease-out;
    }

    .hero:hover .bg-image {
      transform: scale(1.1);
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(12, 74, 110, 0.5) 0%, rgba(7, 89, 133, 0.85) 100%);
      transition: background 0.5s ease;
    }

    .hero:hover .hero-overlay {
      background: linear-gradient(180deg, rgba(12, 74, 110, 0.4) 0%, rgba(7, 89, 133, 0.75) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 800px;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      line-height: 1.1;
    }

    .hero .subtitle {
      font-size: clamp(1.1rem, 2vw, 1.3rem);
      margin: 0 0 2rem 0;
      line-height: 1.6;
      opacity: 0.95;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-block;
      padding: 0.875rem 2rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .cta-button.primary {
      background: #d97706;
      color: #ffffff;
    }

    .cta-button.primary:hover {
      background: #b45309;
      transform: translateY(-2px);
    }

    .cta-button.secondary {
      background: transparent;
      color: #ffffff;
      border: 2px solid #ffffff;
    }

    .cta-button.secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    /* STATS */
    .stats {
      background: linear-gradient(135deg, #075985 0%, #0c4a6e 100%);
      padding: 4rem 0;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      text-align: center;
    }

    .stat-item {
      opacity: 1;
    }

    .stat-number {
      display: inline-block;
      font-size: 3.5rem;
      font-weight: 700;
      color: #fbbf24;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      display: block;
      font-size: 0.9rem;
      color: #cbd5e1;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* CONTEXT IMAGE */
    .context-image-section {
      padding: 3rem 0;
      background: #f8fafc;
    }

    .context-image-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .service-context-image {
      aspect-ratio: 21 / 9;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .service-context-image:hover {
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }

    .service-context-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .service-context-image:hover img {
      transform: scale(1.05);
    }

    /* CHALLENGES */
    .challenges {
      padding: 5rem 0;
      background: #ffffff;
    }

    .challenges h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 1rem 0;
      text-align: center;
    }

    .intro {
      font-size: 1.2rem;
      line-height: 1.7;
      color: #475569;
      max-width: 800px;
      margin: 0 auto 3rem auto;
      text-align: center;
    }

    .challenges-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .challenge-card {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 2rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .challenge-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .challenge-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .challenge-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 0.75rem 0;
    }

    .challenge-card p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #64748b;
      margin: 0;
    }

    /* SERVICES */
    .services {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .services h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 3rem 0;
      text-align: center;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .service-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 2rem;
    }

    .service-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #075985;
      margin: 0 0 1rem 0;
    }

    .service-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .service-card li {
      font-size: 0.95rem;
      color: #475569;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .service-card li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #075985;
      font-weight: 700;
    }

    /* TECHNOLOGY */
    .tech {
      padding: 5rem 0;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: white;
    }

    .tech h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      text-align: center;
    }

    .tech-intro {
      font-size: 1.1rem;
      color: #cbd5e1;
      max-width: 700px;
      margin: 0 auto 3rem auto;
      text-align: center;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .tech-badge {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 2rem 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .tech-badge:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-4px);
    }

    .tech-icon {
      display: block;
      font-size: 3rem;
      margin-bottom: 1rem;
      transition: transform 0.3s ease;
    }

    .tech-badge:hover .tech-icon {
      transform: scale(1.15) rotate(5deg);
      animation: pulse 0.6s ease;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1.15) rotate(5deg);
      }
      50% {
        transform: scale(1.25) rotate(5deg);
      }
    }

    .tech-badge h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
    }

    .tech-badge p {
      font-size: 0.85rem;
      color: #94a3b8;
      margin: 0;
    }

    /* ADVANTAGES */
    .advantages {
      padding: 5rem 0;
      background: #ffffff;
    }

    .advantages h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 3rem 0;
      text-align: center;
    }

    .advantages-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .advantage {
      background: #f8fafc;
      border-left: 4px solid #075985;
      padding: 2rem;
      border-radius: 4px;
    }

    .advantage h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #075985;
      margin: 0 0 1rem 0;
    }

    .advantage p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #475569;
      margin: 0;
    }

    /* DELIVERABLES */
    .deliverables {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .deliverables h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 3rem 0;
      text-align: center;
    }

    .deliverables-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    .deliverable-column h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #075985;
      margin: 0 0 1rem 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .deliverable-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .deliverable-column li {
      font-size: 0.95rem;
      color: #475569;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .deliverable-column li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #075985;
    }

    /* COMMITMENT */
    .commitment {
      padding: 5rem 0;
      background: #ffffff;
    }

    .commitment h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 3rem 0;
      text-align: center;
    }

    .commitment-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .commitment-column h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #075985;
      margin: 0 0 1rem 0;
    }

    .commitment-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .commitment-column li {
      font-size: 0.95rem;
      color: #475569;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .commitment-column li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #075985;
      font-weight: 700;
    }

    /* CTA */
    .cta {
      padding: 5rem 0;
      background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      text-align: center;
      color: white;
    }

    .cta h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
    }

    .cta p {
      font-size: 1.2rem;
      margin: 0 0 2rem 0;
      opacity: 0.9;
    }

    /* ANIMATIONS - Professional & Noticeable */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(50px) scale(0.95);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .animate-on-scroll.no-animation {
      opacity: 1;
      transform: none;
      transition: none;
    }

    /* Stagger animation for grid items */
    .challenges-grid .animate-on-scroll:nth-child(1) {
      transition-delay: 0s;
    }

    .challenges-grid .animate-on-scroll:nth-child(2) {
      transition-delay: 0.2s;
    }

    .challenges-grid .animate-on-scroll:nth-child(3) {
      transition-delay: 0.4s;
    }

    .services-grid .animate-on-scroll:nth-child(1) {
      transition-delay: 0s;
    }

    .services-grid .animate-on-scroll:nth-child(2) {
      transition-delay: 0.2s;
    }

    .services-grid .animate-on-scroll:nth-child(3) {
      transition-delay: 0.4s;
    }

    .services-grid .animate-on-scroll:nth-child(4) {
      transition-delay: 0.6s;
    }

    .tech-grid .animate-on-scroll:nth-child(1) {
      transition-delay: 0s;
    }

    .tech-grid .animate-on-scroll:nth-child(2) {
      transition-delay: 0.2s;
    }

    .tech-grid .animate-on-scroll:nth-child(3) {
      transition-delay: 0.4s;
    }

    .tech-grid .animate-on-scroll:nth-child(4) {
      transition-delay: 0.6s;
    }

    .advantages-grid .animate-on-scroll:nth-child(1) {
      transition-delay: 0s;
    }

    .advantages-grid .animate-on-scroll:nth-child(2) {
      transition-delay: 0.2s;
    }

    .advantages-grid .animate-on-scroll:nth-child(3) {
      transition-delay: 0.4s;
    }

    /* Respect user preference for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .animate-on-scroll {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }

    /* RESPONSIVE */
    @media (max-width: 968px) {
      .stats-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .challenges-grid,
      .services-grid,
      .advantages-grid,
      .deliverables-grid {
        grid-template-columns: 1fr;
      }

      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .commitment-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class WaterResourcesComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private animatedStats = new Set<HTMLElement>();

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.initializeAnimations();
    }, 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initializeAnimations(): void {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.skipAnimations();
      return;
    }

    // Set up Intersection Observer for scroll animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is entering viewport - show it
            entry.target.classList.add('visible');

            // Trigger stats counter animation for each stat item
            if (entry.target.classList.contains('stat-item')) {
              const element = entry.target as HTMLElement;
              if (!this.animatedStats.has(element)) {
                this.animatedStats.add(element);
                this.animateStats(element);
              }
            }
          } else {
            // Element is leaving viewport - hide it (except stats)
            if (!entry.target.classList.contains('stat-item')) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => this.observer?.observe(el));
  }

  private skipAnimations(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => {
      el.classList.add('no-animation');
      el.classList.add('visible');
    });
  }

  private animateStats(element: HTMLElement): void {
    const numberElement = element.querySelector('.stat-number[data-target]') as HTMLElement;
    if (!numberElement) return;

    const target = parseInt(numberElement.getAttribute('data-target') || '0', 10);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.floor(increment * step), target);
      numberElement.textContent = current.toString();

      if (step >= steps) {
        numberElement.textContent = target.toString();
        clearInterval(timer);
      }
    }, duration / steps);
  }
}
