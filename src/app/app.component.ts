import { CrudService } from './service/crud.service';
import { Component, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { Register } from './shared/register';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Observable<any[]>;
  number = 0;

  dataSource: MatTableDataSource<Register>;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
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

  constructor(private crudservice: CrudService, firestore: AngularFirestore) {

    this.crudservice.getAll()
      .snapshotChanges().subscribe(data => {

        data.forEach(item => {
          let a = item.payload.toJSON();
          a['index'] = item.key;
          this.data.push(a as Register);
        });
        /* Data table */
        this.dataSource = new MatTableDataSource(this.data);
        /* Pagination */
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });

    //this.obj = this.crudservice.getColection();
    //this.crudservice.getObj().subscribe(arg =>console.log(arg));

    // .toPromise()
    // .then(data => {
    //   console.log(data);
    // }).catch(erro => {
    //   console.log(erro);
    // });

  }


  ngOnInit(): void {
    this.crudservice.getObj().subscribe(arg => this.obj = arg);
    this.crudservice.getObservable().subscribe(arg => {
      this.obser = arg;
      this.number = arg.length;
    });

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

}
