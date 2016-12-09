<<<<<<< HEAD
import { Component } from '@angular/core'; 
@Component({
    selector: 'pm-app',
    template: 
    `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `,
    templateUrl: ''
})
export class AppComponent {
    pageTitle: string = "Products";
}
=======
import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1>
    `
})
export class AppComponent { }
>>>>>>> ddcc5cd563fe51aac52e4097eb02c92e0a1c34c1
