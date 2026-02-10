import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <!-- BRAND -->
          <div class="footer-brand">
            <span class="logo-text">Ramirez Consulting Engineers</span>
            <p class="tagline">Civil Engineering Excellence in South Texas</p>
          </div>

          <!-- SERVICES -->
          <div class="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a routerLink="/services/water-resources">Water Resources</a></li>
              <li><a routerLink="/services/land-development">Land Development</a></li>
              <li><a routerLink="/services/transportation">Transportation</a></li>
              <li><a routerLink="/services/environmental">Environmental</a></li>
              <li><a routerLink="/services/permitting">Permitting</a></li>
            </ul>
          </div>

          <!-- COMPANY -->
          <div class="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- CONTACT -->
          <div class="footer-contact">
            <h4>Contact</h4>
            <p>San Antonio, Texas</p>
            <p>(210) 555-0100</p>
            <p>info&#64;ramirezce.com</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Ramirez Consulting Engineers, PLLC. All rights reserved.</p>
          <p class="certifications">HUB | SBE | DBE | AABE | SDB Certified</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #1f2937;
      color: #ffffff;
      padding: 3.5rem 0 0 0;
    }

    .footer-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 2rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-brand .logo-text {
      font-size: 1.1rem;
      font-weight: 600;
      color: #ffffff;
      display: block;
      margin-bottom: 0.5rem;
    }

    .footer-brand .tagline {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
      line-height: 1.5;
    }

    .footer-links h4,
    .footer-contact h4 {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.5);
      margin: 0 0 1rem 0;
    }

    .footer-links ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
    }

    .footer-links a:hover {
      color: #ffffff;
    }

    .footer-contact p {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.85);
      margin: 0 0 0.35rem 0;
      line-height: 1.5;
    }

    .footer-bottom {
      padding: 1.5rem 0;
      text-align: center;
    }

    .footer-bottom p {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }

    .footer-bottom .certifications {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .site-footer {
        padding: 2.5rem 0 0 0;
      }

      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      .footer-brand {
        grid-column: 1 / -1;
        margin-bottom: 0.5rem;
      }

      .footer-container {
        padding: 0 1.25rem;
      }
    }

    @media (max-width: 480px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
