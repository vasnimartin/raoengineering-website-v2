import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how RCE can support your next development.</p>
        <a routerLink="/contact" class="cta-button">Contact Us</a>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: 4rem 0;
      background: #2d3748;
      text-align: center;
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 0.75rem 0;
    }

    p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin: 0 0 2rem 0;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: #ffffff;
      color: #2d3748;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .cta-button:hover {
      background: #f3f4f6;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .cta-section {
        padding: 3rem 0;
      }

      h2 {
        font-size: 1.5rem;
      }

      .container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class CtaComponent {}
