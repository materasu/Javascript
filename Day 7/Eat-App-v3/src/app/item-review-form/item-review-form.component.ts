import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ItemService } from '../item.service';
@Component({
  selector: 'app-item-review-form',
  templateUrl: './item-review-form.component.html',
  styleUrls: ['./item-review-form.component.css']
})
export class ItemReviewFormComponent implements OnInit {

  isOpen = false;
  reviewForm: FormGroup

  @Input() itemId;
  @Output() onSubmit = new EventEmitter()

  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: [5],
      author: ['Nag@email.com'],
      body: ['']
    })
  }
  handleFormSubmit() {
    if (this.reviewForm.valid) {
      let formData = this.reviewForm.value;
      this.itemService.postReview(this.itemId, formData)
      this.onSubmit.emit(formData);
      this.toggleForm()
    }
  }
}
