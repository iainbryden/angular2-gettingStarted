import {Component} from '@angular/core'
import {OnInit} from '@angular/core'

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <top-nav></top-nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `
}) 

export class AppComponent implements OnInit { 
    pageTitle: string = 'A Product Management'
    styleHref: string = 'app/assets/styles/bootstrap-solarized-dark.css'

    ngOnInit() {
        
    }

    setCss(): void {
        alert('')
    }

    getStyle(): string {
        return this.styleHref;
    }

}
