import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private myUrl:any;
  private show:boolean;
    
  constructor(/*private router: Router, */private route:ActivatedRoute) {
     this.route.url.subscribe(
     (data: any) => {
        this.show = true;
        for (let i of data) {
          this.myUrl = i.path;
          this.show = false;
          // ... get whatever you want
        }
        console.log("My Current Url ", this.myUrl);
        console.log("There is something more: ",data);
        console.log("show = ", this.show);
     },
     (error: any) => console.debug("URL ERROR", error));
  }
}
