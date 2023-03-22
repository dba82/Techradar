import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, OnInit, Optional, Output } from '@angular/core';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbDragzone]',
  exportAs: 'dbDragzone'
})
export class DragzoneDirective implements AfterViewInit{
  public isSVG = false;
  
  constructor(
    @Optional() @Host() private ringsegmentComponent: RingsegmentComponent,
    @Optional() @Host() private elementRef: ElementRef
    ) { }

  @Output() outside : EventEmitter<undefined> = new EventEmitter();
  @Output() itemDropped : EventEmitter<unknown> = new EventEmitter();
  @Output() dragging : EventEmitter<boolean> = new EventEmitter(false);

  
  ngAfterViewInit(){
    this.isSVG = !!this.ringsegmentComponent;
    this.ringsegmentComponent.pathElement?.nativeElement.addEventListener('mouseleave', (event:Event) =>{
      this.outside.emit();
    })
    this.elementRef?.nativeElement.addEventListener('mouseleave', (event:Event) =>{
      this.outside.emit();
    })
  }

}
