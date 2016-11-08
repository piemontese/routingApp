import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private myUrl:any;
    
  constructor( private route:ActivatedRoute ) { 
     this.route.url.subscribe(
     (data: any) => {
         for (let i of data) {
            this.myUrl = i.path;
            // ... get whatever you want
         }
//         console.log("My Current Url ", this.myUrl);
//         console.log("There is something more: ",data);
     },
     (error: any) => console.debug("URL ERROR", error));
  }

  ngOnInit() {
  }

}
