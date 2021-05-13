import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  clicked: boolean = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("click") mouseClick(){
    this.clicked = !this.clicked;
    if(this.clicked){
      this.renderer.addClass(this.elRef.nativeElement,"open");
    }else{
      this.renderer.removeClass(this.elRef.nativeElement, "open");
    }
  }

}
