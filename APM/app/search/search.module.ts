import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from  '../shared/shared.module';
import { SearchComponent }  from './search.component';
import { SearchService } from './search.service'
import { ResultsComponent } from  '../search/results.component';

@NgModule({
    declarations: [
        SearchComponent,
        ResultsComponent
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