import { CrudService } from './service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  innerWidth;
  obser;
  classfilter;
  register;

  options: GridsterConfig;

  static itemChange(item, itemComponent) {
    //console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    //console.info('itemResized', item, itemComponent);
  }

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.findByFundName('Three Sigma');
    this.findClass();

    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };
  }

  findByIndex(index) {
    this.crudservice.findByIndex(index).subscribe(arg => {
      this.register = arg;
    });
  }

  findByFundName(fund_name) {
    this.crudservice.findByFundName(fund_name).subscribe(arg => {
      this.obser = arg;
    });
  }

  findClass() {
    this.crudservice.findClass().subscribe(arg => {
      this.classfilter = arg;
    });
  }
}
