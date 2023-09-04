import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent {
  constructor( private commonService: CommonService ){}
  title = 'Props From Parent Component.';
  update(value:any){
    console.log("callback called from child component.", this.commonService.list())
    this.title = value
  }
}
