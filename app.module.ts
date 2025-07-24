import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from './search-filter.pipe';
import { SortDirective } from './directive/sort.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { MultisearchPipe } from './multisearch.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SearchFilterPipe,
    SortDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideNavbarComponent,
    MultisearchPipe,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule, NgxPaginationModule, FormsModule, ReactiveFormsModule, NgbModule, ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
