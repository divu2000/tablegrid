

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multisearch'
})
export class MultisearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string, columnName: string): any[] {
    if (!searchTerm) {
      return data;
    }

    const filteredData = [];

    for (const row of data) {
      const searchValue = String(row[columnName]).toLowerCase();
      const searchTextLower = searchTerm.toLowerCase();

      if (searchValue.includes(searchTextLower)) {
        filteredData.push(row);
      }
    }

    return filteredData;
  }

}