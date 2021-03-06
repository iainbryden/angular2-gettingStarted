import {Component} from '@angular/core'
import {ElementRef} from '@angular/core'
import {OnInit} from '@angular/core'

@Component({
    selector: 'ib-status',
    templateUrl: 'app/footer/footer.component.html'
}) 

export class Footer implements OnInit{ 
    status: string = 'this is status';
    path: string;

    constructor(private _elRef: ElementRef) {}

    ngOnInit():any {
        //jQuery(this._elRef.nativeElement).find('.cssStyle').attr('href', 'app/assets/styles/cerulean-bootstrap-theme.min.css')
    }

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
                path = 'app/assets/styles/bootstrap-solarized-dark.css';
            break;
            case('f'):
                path = 'app/assets/styles/bootstrap-solarized-light.css';
            break;
            case('g'):
                path = '';
            break;
        }
        
        //jQuery(this._elRef.nativeElement).find('.cssStyle').attr('href', path);
    };
}
