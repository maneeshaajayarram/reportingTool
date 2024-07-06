import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any,arg:any,arg2:any,value2:any):any {
    console.log(arg,'arggggg',arg2,'ascccccc', value, 'value11111', value2,'orgnal')
    if( arg2 == 'asc'){
      let asscending;
      value.sort ((a: any,b:any)=>{
        if(typeof(a[arg]) && typeof(b[arg])== 'string'){
          asscending =a[arg].localeCompare(b[arg]);
          return asscending;
        }
        else{
          asscending = a[arg]-b[arg];
          return asscending;
        }
      });
      return value;
    }
    else if( arg2 == 'dsc'){
      let descending;
      value.sort ((a: any,b:any)=>{
        if(typeof(a[arg]) && typeof(b[arg])== 'string'){
          descending =b[arg].localeCompare(a[arg]);
          return descending;
        }
        else{
          descending = b[arg]-a[arg];
          return descending;
        }
      });
      return value;
    }
    else if( arg2 == 'emp' ){
      return value2;
    }

   
  }

}



