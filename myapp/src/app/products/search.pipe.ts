import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product.model';

// decorator

@Pipe({
    name: 'SearchPipe'
})


export class MySearchPipe implements PipeTransform {
    transform(value:IProduct[], userInput:string){
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((data) => 
           ( (data.productName.toLowerCase().indexOf(userInput)  !== -1)||
            (data.productCode.toLowerCase().indexOf(userInput)  !== -1)
           )
        ) : value

    }
}


/*
var a = [18,16,24,26]


a.filter((data) => {return a>18})

a>10? a+1:a-1
*/