import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SharedModule } from  '../shared/shared.module';
import { SearchComponent }  from './search.component';
import { SearchService } from './search.service'

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'search', component: SearchComponent},
        ])
    ],
    providers: [SearchService]
})

export class SearchModule {} 