import { Component, OnInit } from '@angular/core';
import { Review } from '../classes/review';
import { ReviewService } from './review.service';

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
    constructor(private reviewService: ReviewService) { }

    ngOnInit(): void {
        this.getReviews('');
    }

    title = 'New York Times - Reviews';
    reviews: Review[];
    selectedReview: Review;

    onSelect(review: Review): void {
        this.selectedReview = review;
    }

    getReviews(value: string): void {
        this.reviewService.getReviews(value).then(reviews => this.reviews = reviews);
    }

    filterReviews(value: string) {
        this.selectedReview = null;
        this.reviews = null;
        this.getReviews(value);
    }
}