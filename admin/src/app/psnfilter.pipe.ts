import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'psnfilter',
})

export class PsnfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      if(item.player1.psn && item.player1.psn.toLowerCase().includes(searchText)) {
        return true;
      } 
      if(item.player2.psn && item.player2.psn.toLowerCase().includes(searchText)) {
        return true;
      } 
    });
  }
}