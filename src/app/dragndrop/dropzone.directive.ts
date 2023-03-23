import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, HostListener, Input, Output } from '@angular/core';
import { DragzoneDirective } from './dragzone.directive';
import { MouseInSvgService } from '../mouse/mouse-in-svg.service';
import { RingsegmentComponent } from '../ringsegment/ringsegment.component';

@Directive({
  selector: '[dbDropzone]'
})
export class DropzoneDirective implements AfterViewInit {
  @Output() dropped : EventEmitter<unknown> = new EventEmitter<unknown>()
 
  @Input('dbDropzone') dragzone? :DragzoneDirective;

  @HostBinding('class.activeDropzone') active = false;
  @HostBinding('class.dropzone') dropzoneClass = true;
  @HostBinding('class.overDropzone') overDropzone = false;

  private svg?:any;

  constructor(@Host() private ringsegmentComponent: RingsegmentComponent, private mouseInSvgService : MouseInSvgService) { }
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event:MouseEvent){
    if (this.active && this.mouseOverMe(event)){
      this.overDropzone = true;
    } else {
      this.overDropzone = false;
    }
  }

  mouseOverMe(event:MouseEvent){
    return this.mouseInSvgService.mouseOverShape(event, this.ringsegmentComponent.pathElement!.nativeElement)
  }



  ngAfterViewInit(){
    this.dragzone?.itemDropped.subscribe((data:any) => {
      this.active = false;
      this.overDropzone = false;
      if (this.mouseOverMe(data.event)){
        this.dropped.emit(data.itemData);
      }
    });

    this.dragzone?.dragging.subscribe((b:boolean) => {
      this.active = b;
    });
  }
}
