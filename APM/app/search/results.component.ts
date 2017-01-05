import {Component, Input, Output} from '@angular/core';
import {IResult} from './result';

@Component({
    moduleId: module.id,
    selector:'search-results',
    templateUrl: 'results.component.html'
})

export class ResultsComponent {
    @Input() results: IResult[];
}