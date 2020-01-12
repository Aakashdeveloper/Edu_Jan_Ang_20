import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'Discount'
})

export class MyDiscountPipe implements PipeTransform{
    transform(value: number, amount:number){
        value = value - amount
        return value
    }
}