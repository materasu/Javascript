import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-review',
  templateUrl: './item-review.component.html',
  styleUrls: ['./item-review.component.css']
})
export class ItemReviewComponent implements OnInit {
  @Input("value") review;
  constructor() { }

  ngOnInit() {
  }

}
