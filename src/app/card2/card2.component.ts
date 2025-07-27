import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card2',
  imports: [ FormsModule],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.scss'
})
export class Card2Component {
firstname = '';
lastname = '';

fullname = `${this.firstname} ${this.lastname}`;

delete() {
    this.firstname = '';
    this.lastname = '';
  } 
}
