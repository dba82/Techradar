import { AfterViewInit, ContentChildren, Directive, ElementRef, EventEmitter, Host, HostBinding, OnInit, Optional, Output, QueryList } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
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

  @ContentChildren(DraggableDirective, { descendants: true }) draggableItems? : QueryList<DraggableDirective>;

  @Output() outside : EventEmitter<undefined> = new EventEmitter();
  @Output() itemDropped : EventEmitter<unknown> = new EventEmitter();
  @Output() dragging : EventEmitter<boolean> = new EventEmitter(false);

  @HostBinding('class.activeDragzone') active=false;
  ngAfterViewInit(){
    this.isSVG = !!this.ringsegmentComponent;
    this.ringsegmentComponent.pathElement?.nativeElement.addEventListener('mouseleave', (event:Event) =>{
      this.outside.emit();
    })
    this.elementRef?.nativeElement.addEventListener('mouseleave', (event:Event) =>{
      this.outside.emit();
    })
    this.dragging.subscribe(x => {
      this.active = x;
      if (x){
        this.draggableItems?.forEach(item=>{
          item.elementRef.nativeElement.style['pointer-events'] = 'none';
        });
      } else {
        this.draggableItems?.forEach(item=>item.elementRef.nativeElement.style['pointer-events'] = 'visible');
      }
    })
  }

}
