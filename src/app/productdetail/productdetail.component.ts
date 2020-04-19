import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service'
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
    selector: 'app-productdetail',
    templateUrl: './productdetail.component.html',
    styleUrls: ['./productdetail.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut(),
        visibility(),
        expand()
    ]
})
export class ProductdetailComponent implements OnInit {

    product: Product;
    productCopy: Product;
    productIds: string[];
    prev: string;
    next: string;
    errMessage: string;
    visibility = 'shown';

    feedbackForm: FormGroup;
    productFeedback: Comment;
    @ViewChild('fform') feedbackFormDirective;

    formErrors = {
        'author': '',
        'comment': ''
    };


    validationMessages = {
        'author': {
            'required': 'Name is required',
            'minlength': 'Name should be at least 2 characters long'
        },
        'comment': {
            'required': 'Comment is required',
            'minlength': 'Comment should be at least 10 characters long'
        }
    }

    constructor(private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,
        @Inject('BaseURL') private BaseURL) {
        this.createForm();
    }

    createForm() {
        this.feedbackForm = this.fb.group({
            author: ['', [Validators.required, Validators.minLength(2)]],
            rating: 5,
            comment: ['', [Validators.required, Validators.minLength(10)]]
        });
        this.feedbackForm.valueChanges.
            subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.feedbackForm) { return; }
        const form = this.feedbackForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }

    }

    ngOnInit() {
        this.productService.getAllIds()
            .subscribe(productIds => this.productIds = productIds,
                errMessage => this.errMessage = errMessage);
        this.route.params.pipe(switchMap((params: Params) => {
            this.visibility = 'hidden';
            return this.productService.get(params['id']);
        }))
            .subscribe(product => {
                this.product = product;
                this.productCopy = product;
                this.setPrevNext(product.id);
                this.visibility = 'shown';
            }, errMessage => this.errMessage = errMessage);
    }

    setPrevNext(id: string) {
        const index = this.productIds.indexOf(id);
        this.prev = this.productIds[(this.productIds.length + index - 1) % (this.productIds.length)];
        this.next = this.productIds[(index + 1) % (this.productIds.length)];
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.productFeedback = this.feedbackForm.value;
        this.productFeedback.date = new Date().toISOString();
        this.productCopy.comments.push(this.productFeedback);
        this.productService.update(this.productCopy)
            .subscribe(product => {
                this.product = product; this.productCopy = product;
            }, errMessage => {
                this.product = null; this.productCopy = null;
                this.errMessage = <any>errMessage
            });
        this.feedbackFormDirective.resetForm({
            author: '',
            rating: 5,
            comment: ''
        });
    }

}
