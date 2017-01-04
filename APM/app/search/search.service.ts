import {Injectable} from '@angular/core';
import {IResult} from './result';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
    private _searchUrl = 'api/search/results.json';

    constructor(private _http: Http){}

    getResults(searchInput: string): Observable<IResult[]> {
        if (searchInput.length) {
            let params = new URLSearchParams();
            params.set('q', searchInput);

            return this._http.get(this._searchUrl, {search: params})
            .map((response:Response) => <IResult[]>response.json())
            .do(data => console.log('ALL:' + JSON.stringify(data)))
            .catch(this.handleError);
        }

        //return new Observable<IResult[]>();
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}