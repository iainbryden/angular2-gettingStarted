import {Component} from '@angular/core'

@Component({
    selector: 'ib-status',
    templateUrl: 'app/footer/footer.component.html'
}) 

export class Footer { 
    status: string = 'this is status';

    setCss(style: string): void {
        var path = "";
        switch(style) {
            case('a'):
                path = 'app/assets/styles/cerulean-bootstrap-theme.min.css';
            break;
            case('b'):
                path = 'app/assets/styles/slate-bootstrap-theme.min.css';
            break;
            case('c'):
                path = 'app/assets/styles/superhero-bootstrap-theme.min.css';
            break;
            case('d'):
                path = 'app/assets/styles/united-bootstrap-theme.min.css';
            break;
            case('e'):
                path = '';
            break;
        }
    };
}
