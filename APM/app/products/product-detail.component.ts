import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'pm-product',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

onBack(): void {
    this._router.navigate(['/products']);
}

    constructor(private _route:ActivatedRoute,
                private _router: Router) {}
    
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
};

