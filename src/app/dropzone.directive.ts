import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, Input, Output } from '@angular/core';
import { DragzoneDirective } from './dragzone.directive';
import { RingsegmentComponent } from './ringsegment/ringsegment.component';

@Directive({
  selector: '[dbDropzone]'
})
export class DropzoneDirective implements AfterViewInit {
  @Output() dropped : EventEmitter<unknown> = new EventEmitter<unknown>()
 
  @Input('dbDropzone') dragzone? :DragzoneDirective;

  @HostBinding('class.activeDropzone') active = false;
  @HostBinding('class.dropzone') dropzoneClass = true;
  
  constructor(@Host() private ringsegmentComponent: RingsegmentComponent) { }
  
  ngAfterViewInit(){
    this.dragzone?.itemDropped.subscribe((data:any) => {
      this.active = false;
      if (data.event.target === this.ringsegmentComponent.pathElement?.nativeElement){
        this.dropped.emit(data.itemData)
      }
    });
    this.dragzone?.dragging.subscribe((data:any) => {
      this.active = true;
    });
  }
}
