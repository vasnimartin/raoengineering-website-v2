import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-land-development',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="assets/generated-images/land_future.png" alt="Advanced land development with GPS precision technology" class="bg-image">
        <div class="hero-overlay"></div>
        <div class="technical-overlay"></div>
      </div>
      <div class="hero-content">
        <h1>Land Development Engineering</h1>
        <p class="subtitle">
          Transforming raw land into buildable sites with GPS-accurate grading, 
          digital terrain modeling, and proven regulatory expertise across Texas.
        </p>
      </div>
    </section>

    <!-- STATS CALLOUT -->
    <section class="stats" #statsSection>
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item animate-on-scroll">
            <span class="stat-number" [attr.data-target]="18">0</span><span class="stat-number">+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item animate-on-scroll">
            <span class="stat-number" [attr.data-target]="500">0</span><span class="stat-number">+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-item animate-on-scroll">
            <span class="stat-number">±2cm</span>
            <span class="stat-label">GPS Precision</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CHALLENGES WE SOLVE -->
    <section class="challenges">
      <div class="container">
        <h2>Challenges We Solve</h2>
        <div class="challenges-grid">
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">⚡</div>
            <h3>Permitting Delays Killing Your Timeline?</h3>
            <p>
              Our direct relationships with San Antonio, Austin, and Houston officials 
              accelerate approvals. Proven fast-track processes get you building faster.
            </p>
          </div>
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">💰</div>
            <h3>Worried About Hidden Site Conditions?</h3>
            <p>
              Comprehensive feasibility studies and advanced soil analysis prevent 
              costly surprises during construction. Know the true costs upfront.
            </p>
          </div>
          <div class="challenge-card animate-on-scroll">
            <div class="challenge-icon">🎯</div>
            <h3>Need Single-Source Accountability?</h3>
            <p>
              From initial survey to final as-builts, one team handles everything—
              no finger-pointing between consultants. One partner, one point of contact.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXTUAL IMAGE -->
    <section class="context-image-section">
      <div class="context-image-container">
        <div class="service-context-image">
          <img src="assets/generated-images/land_development.png" alt="Precision grading operations at golden hour" loading="lazy">
        </div>
      </div>
    </section>

    <!-- THE RCE ADVANTAGE -->
    <section class="advantage">
      <div class="container">
        <h2>The RCE Advantage</h2>
        <div class="advantage-grid">
          <div class="advantage-item">
            <span class="advantage-label">Texas-Deep Expertise</span>
            <p>18+ years navigating local regulations across San Antonio, Austin, Houston, and Cedar Park</p>
          </div>
          <div class="advantage-item">
            <span class="advantage-label">Speed Without Compromise</span>
            <p>Proven fast-track permitting processes that maintain quality and compliance</p>
          </div>
          <div class="advantage-item">
            <span class="advantage-label">Technology-Driven Precision</span>
            <p>GPS (±2cm accuracy), drones, Civil 3D, BIM—modern tools for flawless execution</p>
          </div>
          <div class="advantage-item">
            <span class="advantage-label">Direct Engineer Access</span>
            <p>Talk to the engineer designing your project, not an account manager</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECT TYPES -->
    <section class="project-types">
      <div class="container">
        <h2>Project Types We Serve</h2>
        <div class="types-grid">
          <div class="type-item">
            <span class="type-icon">🏘️</span>
            <span>Residential Communities</span>
          </div>
          <div class="type-item">
            <span class="type-icon">🏢</span>
            <span>Commercial Developments</span>
          </div>
          <div class="type-item">
            <span class="type-icon">🏭</span>
            <span>Industrial Sites</span>
          </div>
          <div class="type-item">
            <span class="type-icon">🏗️</span>
            <span>Mixed-Use Projects</span>
          </div>
          <div class="type-item">
            <span class="type-icon">💧</span>
            <span>MUD Developments</span>
          </div>
          <div class="type-item">
            <span class="type-icon">🖥️</span>
            <span>Data Centers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE CAPABILITIES -->
    <section class="capabilities">
      <div class="container">
        <h2>Core Capabilities</h2>
        <div class="capabilities-grid">
          <div class="capability-column">
            <h3>Site Planning & Analysis</h3>
            <ul>
              <li>Site Feasibility Studies & Due Diligence</li>
              <li>Conceptual Site Planning & Layout</li>
              <li>Alignment Studies & Optimization</li>
              <li>Compliance Review & Permitting Strategy</li>
            </ul>
          </div>
          <div class="capability-column">
            <h3>Design & Engineering</h3>
            <ul>
              <li>Digital Terrain Modeling (DTM)</li>
              <li>Grading & Earthwork Design</li>
              <li>Paving & Parking Lot Design</li>
              <li>Water & Sanitary Sewer Systems</li>
              <li>Private Fire Line Design</li>
            </ul>
          </div>
          <div class="capability-column">
            <h3>Technology & Delivery</h3>
            <ul>
              <li>GPS-Guided Grading (±2cm precision)</li>
              <li>Drone-Based Surveys & Photogrammetry</li>
              <li>BIM Integration & 3D Visualization</li>
              <li>Construction Documents & Specifications</li>
              <li>As-Built Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNOLOGY SHOWCASE -->
    <section class="technology">
      <div class="container">
        <h2>Technology-Driven Precision</h2>
        <p class="tech-intro">Modern tools for flawless execution and data-driven decision making</p>
        <div class="tech-grid">
          <div class="tech-badge animate-on-scroll">
            <span class="tech-icon">📐</span>
            <h4>Civil 3D</h4>
            <p>Advanced 3D modeling</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <span class="tech-icon">🛰️</span>
            <h4>GPS ±2cm</h4>
            <p>Precision grading</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <span class="tech-icon">🚁</span>
            <h4>Drone Surveys</h4>
            <p>Aerial photogrammetry</p>
          </div>
          <div class="tech-badge animate-on-scroll">
            <span class="tech-icon">🏗️</span>
            <h4>BIM Integration</h4>
            <p>3D visualization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS TIMELINE -->
    <section class="process">
      <div class="container">
        <h2>Our Proven Process</h2>
        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3>Feasibility</h3>
            <p>Site analysis, due diligence, soil investigation, and regulatory review</p>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <h3>Design</h3>
            <p>Grading plans, utility layout, Civil 3D modeling, and 3D visualization</p>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <h3>Permitting</h3>
            <p>Municipal approvals, agency coordination, and fast-track processing</p>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <h3>Construction Support</h3>
            <p>GPS staking, field inspection, problem resolution, and as-builts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUALITY & ACCOUNTABILITY -->
    <section class="quality">
      <div class="container">
        <h2>Quality & Accountability</h2>
        <div class="quality-grid">
          <div class="quality-item">
            <h3>Precision Verification</h3>
            <p>GPS technology ensures ±2cm grading accuracy. Third-party verification available for critical projects.</p>
          </div>
          <div class="quality-item">
            <h3>Construction Oversight</h3>
            <p>Field inspection services ensure design intent is maintained throughout construction.</p>
          </div>
          <div class="quality-item">
            <h3>Comprehensive Documentation</h3>
            <p>Detailed as-built drawings and digital deliverables for your permanent records.</p>
          </div>
          <div class="quality-item">
            <h3>Responsive Problem Resolution</h3>
            <p>Direct engineer access for rapid issue identification and solution implementation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR COMMITMENT -->
    <section class="commitment">
      <div class="container">
        <h2>Our Commitment to You</h2>
        <div class="commitment-grid">
          <div class="commitment-column">
            <h3>Responsive Communication</h3>
            <ul>
              <li>24-hour response to all inquiries</li>
              <li>Weekly project status updates</li>
              <li>Direct engineer phone/email access</li>
              <li>No account manager layers</li>
            </ul>
          </div>
          <div class="commitment-column">
            <h3>Transparent Process</h3>
            <ul>
              <li>Clear timeline expectations</li>
              <li>Budget tracking and alerts</li>
              <li>Proactive issue identification</li>
              <li>Regular progress reporting</li>
            </ul>
          </div>
          <div class="commitment-column">
            <h3>Partnership Approach</h3>
            <ul>
              <li>Your vision drives our design</li>
              <li>Collaborative problem-solving</li>
              <li>Long-term relationship focus</li>
              <li>Post-project support</li>
            </ul>
          </div>
        </div>
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
              <li>AutoCAD Civil 3D</li>
              <li>GPS/GNSS Technology</li>
              <li>Drone Photogrammetry</li>
              <li>BIM Integration</li>
              <li>ADA / TAS Compliance</li>
              <li>ASCE Design Standards</li>
            </ul>
          </div>
          <div class="expertise-column">
            <h3>Agencies & Jurisdictions</h3>
            <ul>
              <li>City of San Antonio (COSA)</li>
              <li>Bexar County</li>
              <li>City of Austin</li>
              <li>City of Houston</li>
              <li>Cedar Park</li>
              <li>TxDOT Access Management</li>
              <li>Private Utility Coordination</li>
              <li>Municipal Utility Districts (MUDs)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <p>Ready to transform your land into a buildable site?</p>
        <div class="cta-buttons">
          <a routerLink="/contact" class="cta-button primary">Request Site Analysis</a>
          <a routerLink="/contact" class="cta-button secondary">Schedule Consultation</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 65vh;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1a202c;
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
      transform: scale(1.05);
      transition: transform 8s ease-out;
    }

    .hero:hover .bg-image {
      transform: scale(1.1);
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(26, 32, 44, 0.45) 0%, rgba(15, 23, 42, 0.85) 100%);
      transition: background 0.5s ease;
    }

    .hero:hover .hero-overlay {
      background: linear-gradient(180deg, rgba(26, 32, 44, 0.35) 0%, rgba(15, 23, 42, 0.75) 100%);
    }

    .technical-overlay {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
    }

    .hero h1 {
      font-size: clamp(2.25rem, 4.5vw, 3.5rem);
      font-weight: 700;
      margin: 0 0 1.25rem 0;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .hero .subtitle {
      font-size: clamp(1.05rem, 1.8vw, 1.3rem);
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
      margin: 0;
      font-weight: 400;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* STATS SECTION */
    .stats {
      padding: 3rem 0;
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .stat-item {
      text-align: center;
      padding: 1.5rem;
      background: #f9fafb;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
    }

    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #d5a021;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      display: block;
      font-size: 0.9rem;
      color: #6b7280;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .challenges {
      padding: 5rem 0;
      background: #ffffff;
    }

    .challenges h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
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
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .challenge-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .challenge-card h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 0.75rem 0;
      line-height: 1.4;
    }

    .challenge-card p {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.6;
      margin: 0;
    }

    .context-image-section {
      padding: 0;
      background: #ffffff;
    }

    .context-image-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
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

    .advantage {
      padding: 5rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .advantage h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .advantage-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .advantage-item {
      background: #ffffff;
      border-left: 4px solid #d5a021;
      padding: 1.5rem;
      border-radius: 4px;
    }

    .advantage-label {
      display: block;
      font-size: 0.85rem;
      font-weight: 700;
      color: #d5a021;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
    }

    .advantage-item p {
      font-size: 1rem;
      color: #374151;
      line-height: 1.6;
      margin: 0;
    }

    /* PROJECT TYPES */
    .project-types {
      padding: 4rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .project-types h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 2.5rem 0;
    }

    .types-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .type-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 500;
      color: #374151;
      transition: all 0.2s ease;
    }

    .type-item:hover {
      background: #ffffff;
      border-color: #d5a021;
      transform: translateX(4px);
    }

    .type-icon {
      font-size: 1.5rem;
    }

    .capabilities {
      padding: 5rem 0;
      background: #ffffff;
      background-image: url('/assets/generated-images/bg_texture_land.png');
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
      background-color: rgba(255, 255, 255, 0.97);
      border-top: 1px solid #e5e7eb;
    }

    .capabilities h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .capabilities-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .capability-column h3 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #6b7280;
      margin: 0 0 1rem 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e7eb;
    }

    .capability-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .capability-column li {
      font-size: 0.95rem;
      color: #4b5563;
      padding: 0.5rem 0;
      line-height: 1.5;
      border-bottom: 1px solid #f3f4f6;
    }

    .capability-column li:last-child {
      border-bottom: none;
    }

    /* TECHNOLOGY SHOWCASE */
    .technology {
      padding: 5rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .technology h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 0.75rem 0;
    }

    .tech-intro {
      text-align: center;
      font-size: 1.05rem;
      color: #6b7280;
      margin: 0 0 3rem 0;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .tech-badge {
      text-align: center;
      padding: 2rem 1.5rem;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .tech-badge:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
      border-color: #d5a021;
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
      color: #111827;
      margin: 0 0 0.5rem 0;
    }

    .tech-badge p {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
    }

    .process {
      padding: 5rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .process h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .process-timeline {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .process-step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: #d5a021;
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1rem auto;
    }

    .process-step h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 0.5rem 0;
    }

    .process-step p {
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.5;
      margin: 0;
    }

    .quality {
      padding: 5rem 0;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }

    .quality h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .quality-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .quality-item {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      padding: 2rem;
      border-radius: 4px;
    }

    .quality-item h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 0.75rem 0;
    }

    .quality-item p {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.6;
      margin: 0;
    }

    .commitment {
      padding: 5rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .commitment h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .commitment-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .commitment-column h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 1rem 0;
    }

    .commitment-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .commitment-column li {
      font-size: 0.95rem;
      color: #4b5563;
      padding: 0.4rem 0;
      line-height: 1.5;
      position: relative;
      padding-left: 1.25rem;
    }

    .commitment-column li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #d5a021;
      font-weight: 700;
    }

    .expertise {
      padding: 5rem 0;
      background: #f9fafb;
      background-image: url('/assets/generated-images/bg_texture_land.png');
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
      background-color: rgba(249, 250, 251, 0.97);
      border-top: 1px solid #e5e7eb;
    }

    .expertise h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #111827;
      text-align: center;
      margin: 0 0 3rem 0;
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
      padding: 5rem 0;
      background: #2d3748;
      text-align: center;
    }

    .cta p {
      font-size: 1.5rem;
      color: #ffffff;
      margin: 0 0 2rem 0;
      font-weight: 500;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2.5rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .cta-button.primary {
      background: #d5a021;
      color: #ffffff;
    }

    .cta-button.primary:hover {
      background: #b8891c;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
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

    @media (max-width: 768px) {
      .hero {
        height: 50vh;
        min-height: 320px;
      }

      .stats-grid,
      .challenges-grid,
      .advantage-grid,
      .types-grid,
      .capabilities-grid,
      .tech-grid,
      .process-timeline,
      .quality-grid,
      .commitment-grid,
      .expertise-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .service-context-image {
        aspect-ratio: 4 / 3;
      }

      .stats,
      .challenges,
      .advantage,
      .project-types,
      .capabilities,
      .technology,
      .process,
      .quality,
      .commitment,
      .expertise,
      .cta {
        padding: 3rem 0;
      }

      .container,
      .context-image-container {
        padding: 0 1.25rem;
      }
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

    /* Respect user preference for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .animate-on-scroll {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
  `]
})
export class LandDevelopmentComponent implements AfterViewInit, OnDestroy {
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

  private animateStats(element: HTMLElement): void {
    const numberElement = element.querySelector('[data-target]') as HTMLElement;
    if (!numberElement) return;

    const target = parseInt(numberElement.getAttribute('data-target') || '0');
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        numberElement.textContent = target.toString();
        clearInterval(timer);
      } else {
        numberElement.textContent = Math.floor(current).toString();
      }
    }, stepDuration);
  }

  private skipAnimations(): void {
    // Make all elements immediately visible if user prefers reduced motion
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => {
      el.classList.add('visible', 'no-animation');
    });

    // Set final stat values immediately
    const statElements = this.elementRef.nativeElement.querySelectorAll('[data-target]');
    statElements.forEach((el: HTMLElement) => {
      const target = el.getAttribute('data-target');
      if (target) {
        el.textContent = target;
      }
    });
  }
}
