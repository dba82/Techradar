import { AfterViewInit, Directive, EventEmitter, Host, OnInit, Output } from '@angular/core';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbDragzone]',
  exportAs: 'dbDragzone'
})
export class DragzoneDirective implements AfterViewInit{

  constructor(@Host() private ringsegmentComponent: RingsegmentComponent) { }
  @Output() outside : EventEmitter<undefined> = new EventEmitter();
  @Output() itemDropped : EventEmitter<unknown> = new EventEmitter();
  @Output() dragging : EventEmitter<unknown> = new EventEmitter();

  
  ngAfterViewInit(){
    this.ringsegmentComponent.pathElement?.nativeElement.addEventListener('mouseleave', (event:Event) =>{
      console.log("unn raus")
      this.outside.emit();
    })
  }

}
