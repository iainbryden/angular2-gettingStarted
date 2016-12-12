import {Component} from '@angular/core'

@Component({
    selector: 'ib-status',
    template: `
    <div><h1>{{status}}</h1>
        <div>My Status</div>
    </div>
    `
}) 

export class IbStatus { 
    status: string = 'this is status'
}
