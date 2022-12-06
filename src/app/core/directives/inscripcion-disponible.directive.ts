
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inscripcionAbierta]'
})
export class InscripcionDisponibleDirective implements OnInit{
  @Input('inscripcionAbierta') inscripcionAbierta!: boolean;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF');
    this.renderer.setStyle(this.elemento.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(
      this.elemento.nativeElement, 
      'background-color', 
      this.inscripcionAbierta ? '#247c27' : '#b84b43'
    );
  }

}
