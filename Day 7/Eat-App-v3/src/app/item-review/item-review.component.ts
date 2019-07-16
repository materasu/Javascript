import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-review',
  templateUrl: './item-review.component.html',
  styleUrls: ['./item-review.component.css']
})
export class ItemReviewComponent implements OnInit {

  @Input("value") review;

  stars = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.stars = []
    for (let i = 0; i < this.review.stars; i++)
      this.stars.push(i)
  } 

}
