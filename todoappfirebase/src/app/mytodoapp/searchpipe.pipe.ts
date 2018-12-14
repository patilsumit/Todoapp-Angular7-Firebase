import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, userInput1: any): any {
    if(userInput1=="" || userInput1==undefined || userInput1==null) {
      return value;
    }

    else{
      return value.filter( item => {
        return item['name'].toLowerCase().includes(userInput1.toLowerCase()) +
        item['category'].toLowerCase().includes(userInput1.toLowerCase()) +
        item['priority'].toLowerCase().includes(userInput1.toLowerCase()) + 
        item['description'].toLowerCase().includes(userInput1.toLowerCase());
      })
    } 
  }

}
