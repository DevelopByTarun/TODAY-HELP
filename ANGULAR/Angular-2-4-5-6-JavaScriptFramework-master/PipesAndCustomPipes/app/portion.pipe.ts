import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portion'
})
export class PortionPipe implements PipeTransform {

  transform(value: any, pipeParamStart:number, pipeParamEnd:number): any {
    return value.substring(pipeParamStart, pipeParamEnd);
  }

}
