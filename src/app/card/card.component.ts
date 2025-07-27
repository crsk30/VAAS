import { Component } from '@angular/core';
import { Card2Component } from "../card2/card2.component"; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [ Card2Component, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardId: number[] = [];

  add() {
    this.cardId.push(Date.now()); // unique id for each child
  }


}
