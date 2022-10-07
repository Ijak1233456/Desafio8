import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomCard]'
})
export class CustomCardDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'border', '1px solid #d1d1d1');
    renderer.setStyle(elementRef.nativeElement, 'border-radius', '15px');
    renderer.setStyle(elementRef.nativeElement, 'padding', '5px');
    renderer.setStyle(elementRef.nativeElement, 'margin-bottom', '5px');
  }

}
