import { Component } from '@angular/core';
import { ServicesTabComponent } from '../services-tab/services-tab.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOnServices:boolean = false;
  isOnContact:boolean = false;

  

  toggleAll(){
    this.isOnContact = false;
    this.isOnServices = false;
  }

  toggleServices(){
    this.isOnServices = !this.isOnServices;
    this.isOnContact = false;
  }

  toggleContact(){
    this.isOnContact = !this.isOnContact;
    this.isOnServices = false;
  }

}
