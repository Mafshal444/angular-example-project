import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  providers: [CommonService]
})
export class HomeComponentComponent {
  @Input() title: any;
  @Output() update: EventEmitter<any> = new EventEmitter();
  constructor( private CommonService: CommonService ){}
  updateProps(){
    console.log("function is called.", this.CommonService.list())
    this.update.emit("Props Updated.")
  }
}
