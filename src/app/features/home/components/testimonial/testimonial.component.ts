import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonial-section">
      <div class="container">
        <blockquote>
          <p>
            "RCE Engineering continues to exceed expectations for us and our partners. 
            Their team has been a trusted resource across projects ranging from early 
            site selection to complex, multi-phase developments. Their attention to 
            detail, understanding of local codes, and ability to deliver innovative 
            solutions have played a key role in our continued success."
          </p>
          <footer>
            <cite>— Long-term Development Partner</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  `,
  styles: [`
    .testimonial-section {
      padding: 4rem 0;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    blockquote {
      margin: 0;
      text-align: center;
    }

    blockquote p {
      font-size: 1.25rem;
      font-style: italic;
      color: #374151;
      line-height: 1.8;
      margin: 0 0 1.5rem 0;
      font-weight: 400;
    }

    blockquote footer {
      margin-top: 1rem;
    }

    cite {
      font-size: 0.9rem;
      font-style: normal;
      color: #6b7280;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .testimonial-section {
        padding: 2.5rem 0;
      }

      blockquote p {
        font-size: 1.1rem;
      }

      .container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class TestimonialComponent {}
