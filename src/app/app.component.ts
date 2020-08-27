import { CrudService } from './service/crud.service';
import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';


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

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.findByFundName('Three Sigma');
    this.findClass();

    this.options = {};
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
