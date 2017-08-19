import { Injectable } from '@angular/core'
import { Review } from '../classes/review';
// import { REVIEWS } from './mock-reviews';
import { Headers, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReviewService {
    private reviewUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
    private paramsQuery;

    constructor(private http: Http) { }

    getReviews(value: string): Promise<Review[]> {
        if (value.trim() != '') {
            this.paramsQuery = {
                'api-key': "df4d47f55c4745fda523d38d211630b7",
                'critics-pick': 'Y',
                'query': value
            };
        }
        else {
            this.paramsQuery = {
                'api-key': "df4d47f55c4745fda523d38d211630b7",
                'critics-pick': 'Y',
                'offset': '20'
            };
        }
        return this.http.get(
            this.reviewUrl,
            {
                params: this.paramsQuery
            }
        )
            .toPromise()
            .then(response => response.json().results as Review[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error', error);
        return Promise.reject(error.message || error);
    }
}