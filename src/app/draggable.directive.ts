import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DragzoneDirective } from './dragzone.directive';
import { Point } from './point';

@Directive({
  selector: '[dbDraggable]'
})
export class DraggableDirective implements AfterViewInit {
  private anchor? : Point;
  private dragging = false;

  @Input('dbDraggable') dragzone? : DragzoneDirective;
  @Input() itemData? : unknown;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.dragzone?.outside.subscribe(()=> this.reset())
  }

  @HostListener('mousedown', ['$event'])
  grap(event: MouseEvent){
    this.anchor = new Point(event.pageX, event.pageY);
    this.dragging = true;
    this.dragzone?.dragging.emit();
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
      this.elementRef.nativeElement.style = `pointer-events:none; transform: translate(${(event.pageX - this.anchor!.x!)*window.devicePixelRatio }px, ${(event.pageY - this.anchor!.y)*window.devicePixelRatio}px)`;
    }
  }

  reset(){
    this.dragging = false;
    this.elementRef.nativeElement.style = `transform: none`;
  }
}
