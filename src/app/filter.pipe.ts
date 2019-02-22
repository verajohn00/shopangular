import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  /*transform(value: any, args?: any): any {
    return null;
  }*/
  
    /*transform(items: any[], filter: Object): any {
        if (!items || !filter || filter.title == undefined) {
            return items;
        }
        
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        
        console.log("here: "+filter.title);
        var elementos = items.filter(item => item.nombre.indexOf(filter.title) !== -1);
        console.log(elementos);
        return elementos;
    }*/
    
    transform(value: any, query: string, field: string): any {
      return query ? value.reduce((prev, next) => {
        if (next[field].includes(query)) { prev.push(next); }
        return prev;
      }, []) : value;
    }
}
