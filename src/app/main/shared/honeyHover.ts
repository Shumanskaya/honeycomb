import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Directive({
    selector: '[honeyHover]'
})
export class HoneyHoverDirective implements AfterViewInit {

    public printHoneyComb$: Observable<Event> = fromEvent(this.elementRef.nativeElement, 'mouseover');

    public stopHoneyComb$: Observable<Event> = fromEvent(this.elementRef.nativeElement, 'mouseleave');

    public valueOpacity: number = 0;

    public interval: number;


    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    public setOpacity(value: number) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', value / 10)
    }


    ngAfterViewInit(): void {

        const print = this.printHoneyComb$.subscribe(() => {
            this.interval = setInterval(() => {
                this.valueOpacity += 1;
                this.setOpacity(this.valueOpacity);
            }, 10) as unknown as number;
        });

        this.stopHoneyComb$.subscribe(() => {
            if (this.elementRef.nativeElement.style.opacity >= '1') {
                print.unsubscribe();
            }
            clearInterval(this.interval);
        })

    }
       

}