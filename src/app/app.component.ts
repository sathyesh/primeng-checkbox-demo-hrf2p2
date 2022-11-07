import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
    { name: 'Administration', key: 'Adm' },
  ];

  checked: boolean = false;

  ngOnInit() {
    // this.selectedCategories = this.categories.slice(1,3);
  }
}
