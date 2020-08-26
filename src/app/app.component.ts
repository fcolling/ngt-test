import { CrudService } from './service/crud.service';
import { Component, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { Register } from './shared/register';
import { Observable } from 'rxjs';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Observable<any[]>;
  number = 0;

  dataSource: MatTableDataSource<Register>;
  // @ViewChild(MatPaginator, null) paginator: MatPaginator;
  data: any = [];
  displayedColumns: any[] = [
    'index',
    'fund_name',
    'subfund_name',
    'share_class_name',
    'date',
    'report_status',
    'nb_alerts'
  ];

  obj;
  database;
  obser;

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  constructor(private crudservice: CrudService) { }


  ngOnInit(): void {
    this.crudservice.getObj().subscribe(arg => this.obj = arg);
    this.crudservice.getObservable().subscribe(arg => {
      this.obser = arg;
      this.number = arg.length;
    });

    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 3, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
    //console.log(this.crudservice.getDatabase());
  }


  /* Delete */
  //  deleteBook(index: number, e) {
  //   if(window.confirm('Are you sure?')) {
  //     const data = this.dataSource.data;
  //     data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
  //     this.dataSource.data = data;
  //     this.crudservice.DeleteRegister(esindex)
  //   }
  // console.log(index);
  //  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push();
  }
}
