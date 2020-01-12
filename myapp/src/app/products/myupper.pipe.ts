import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'myUpperCase'
})

export class MyUpperCasePipe implements PipeTransform {
    transform(value:string,typereq:string){
        if(typereq=="upper"){
            value = value.toUpperCase()
        }else{
            value = value.toLowerCase()
        }
        return value
    }
}