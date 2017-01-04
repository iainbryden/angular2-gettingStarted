import {Component} from '@angular/core'

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

export class AppComponent { 
    pageTitle: string = 'A Product Management'
}
