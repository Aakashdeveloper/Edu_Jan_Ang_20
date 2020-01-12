import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class ChangeColorDirective {
    constructor(Element: ElementRef){
        Element.nativeElement.style.color='hotpink'
    }
}