import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ContentChildren, Directive, ElementRef, QueryList, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'pathdddd , circleddddd'
})
export class FlatDirective implements AfterContentChecked{
  @ContentChildren(FlatDirective, {read: ViewContainerRef}) children? : QueryList<ViewContainerRef>
  constructor(private elementRef: ElementRef, private renderer : Renderer2, private cd : ChangeDetectorRef) { }

  flatten(){
    const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    if (parentNode instanceof SVGElement){
      this.children!.forEach(element => {
          const nextSibling = this.renderer.nextSibling(this.elementRef.nativeElement);
          if (nextSibling){
            this.renderer.insertBefore(parentNode, element.element.nativeElement, nextSibling);
          }
          else {
            this.renderer.appendChild(parentNode, element.element.nativeElement);
          }
        }
      )
    }
  }

  ngAfterContentChecked(): void {
    if (this.children){
      this.children.changes.subscribe(()=> this.flatten());
      this.flatten()    
    }
  }
}
