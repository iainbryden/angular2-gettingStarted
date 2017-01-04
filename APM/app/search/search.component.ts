import { Component, OnInit } from '@angular/core';
import { IResult } from './result';
import { SearchService } from './search.service';

@Component({
    templateUrl: 'app/search/search.component.html'
})
export class SearchComponent implements OnInit {
    public placeholder: string = 'Search for Items';
    onNotify(message: string): void{}
    errorMessage: string;
    results: IResult[];

    constructor (private _searchService: SearchService) {}

    ngOnInit(): void {
        //this.doSearch('');
    }

    public doSearch(searchInput : string) : void {
        this._searchService.getResults(searchInput)
        .subscribe(products => this.results = products,
        error => this.errorMessage = <any>error);
    }
}
