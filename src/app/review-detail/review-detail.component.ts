import { Component, Input } from '@angular/core';
import { Review } from '../classes/review';

@Component({
    selector: 'review-detail',
    templateUrl: './review-detail.component.html',
    styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
    @Input() review: Review;
}