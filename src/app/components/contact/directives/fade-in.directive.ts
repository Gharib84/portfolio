import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  private isVisible = false; // Track the visibility state

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Set my  initial styles for the fade-in effect
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s ease-out, transform 1s ease-out');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Check in case of  the element is in the viewport
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0 && !this.isVisible) {
      // Element is visible in the viewport
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
      this.isVisible = true; // Mark as visible
    } else if ((rect.top >= windowHeight || rect.bottom <= 0) && this.isVisible) {
      // Element is outside the viewport
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
      this.isVisible = false; // Reset visibility state
    }
  }
}
