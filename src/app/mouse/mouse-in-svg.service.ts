import { Injectable } from '@angular/core';

@Injectable()
export class MouseInSvgService {
  private svg? : SVGGraphicsElement;
  
  setSvg(svg: SVGGraphicsElement){
    this.svg = svg;
  }

  svgPointFromMouseEvent(event:MouseEvent){
    const mouseposition = new DOMPoint(event.clientX,  event.clientY);
    return mouseposition.matrixTransform(this.svg?.getScreenCTM()?.inverse());
  }
  
  mouseOverShape(event:MouseEvent, shape: SVGGeometryElement){
    return shape.isPointInFill(this.svgPointFromMouseEvent(event))
  }
}
