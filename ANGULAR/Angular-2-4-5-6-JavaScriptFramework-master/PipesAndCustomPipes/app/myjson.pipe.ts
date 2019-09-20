import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myjson'
})
export class MyjsonPipe implements PipeTransform {

  transform(value:any, prettyprint:number, fields:string):string {
    let array = (fields == null? null : fields.split(','));
    let pp = (prettyprint == null? 0 : prettyprint);
    let result = JSON.stringify(value, array, pp);
    return result;
  }

}
