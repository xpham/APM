import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  // The Product component is "inputting" its product.rating into Star component
  @Input() rating = 0;

  starWidth: number;

  // The Star component is "outputting" rating click event to container Product component
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    //console.log(`The rating ${this.rating} was clicked!`);
  }

}
