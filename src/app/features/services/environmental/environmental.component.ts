import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-environmental',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './environmental.component.html',
  styleUrl: './environmental.component.css'
})
export class EnvironmentalComponent implements AfterViewInit, OnDestroy {
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

    const targetStr = numberElement.getAttribute('data-target') || '0';
    const target = parseInt(targetStr, 10);
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
