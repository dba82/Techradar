import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DragzoneDirective } from './dragzone.directive';
import { MouseInSvgService } from './mouse-in-svg.service';
import { Point } from './point';

@Directive({
  selector: '[dbDraggable]'
})
export class DraggableDirective implements AfterViewInit {
  private anchor? : DOMPoint|Point;
  private dragging = false;

  @Input('dbDraggable') dragzone? : DragzoneDirective;
  @Input() itemData? : unknown;

  constructor(public elementRef: ElementRef, private mouseInSvgService:MouseInSvgService) { }

  ngAfterViewInit(){
    this.dragzone?.outside.subscribe(()=> this.reset())
  }

  @HostListener('mousedown', ['$event'])
  grap(event: MouseEvent){
    this.anchor =  this.dragzone?.isSVG ? this.mouseInSvgService.svgPointFromMouseEvent(event) : new Point(event.pageX, event.pageY);
    this.dragging = true;
    this.dragzone?.dragging.emit(true);
  }

  @HostListener('document:mouseup', ['$event'])
  drop(event?: MouseEvent){
    if(this.dragging){
      this.reset();
      this.dragzone?.itemDropped.emit({ event: event, itemData: this.itemData});
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event: MouseEvent){
    if (this.dragging){
      const mouseposition = this.dragzone?.isSVG ? this.mouseInSvgService.svgPointFromMouseEvent(event) : new Point(event.pageX, event.pageY);
      this.elementRef.nativeElement.style = `z-index:2000000;pointer-events:none; transform: translate(${(mouseposition.x- this.anchor!.x!) }px, ${(mouseposition.y - this.anchor!.y)}px)`;
    }
  }

  reset(){
    this.dragging = false;
    this.elementRef.nativeElement.style = `transform: none`;
    this.dragzone?.dragging.emit(false);

  }
}
