import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridService } from './service/grid.service';
import { User } from './user';
import { FormsModule } from '@angular/forms';


// export interface User {
//   orderid: number;
//   customerid: string;
//   customername: string;
//   freight: number;
//   orderdate: Date;
//   shipcountry: string;
//   shipstate: string;
//   shipcity: string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tablegrid';
  sideNavStatus: boolean = false;

  ngOnInit(): void {

  }
}