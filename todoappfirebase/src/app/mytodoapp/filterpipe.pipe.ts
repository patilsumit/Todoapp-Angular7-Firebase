import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filter1: any): any {
   console.log("filter value"+value);
    if(filter1=="" || filter1==undefined || filter1==null || filter1=="select")
    {
      return value;
    }
    if(filter1=="High")
    {
     return value.filter(item=>{
       return item['priority']=='High';
     });
    }
    if(filter1=="Low")
    {
     return value.filter(item=>{
       return item['priority']=='Low';
     });
    }
    if(filter1=="Medium")
    {
     return value.filter(item=>{
       return item['priority']=='Medium';
     });
    }
  }

}
