import { Routes } from '@angular/router';
import {CompanySearchComponent} from "./components/company-search/company-search.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";
import {SearchResultsComponent} from "./components/search-results/search-results.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {CompanyOfficersComponent} from "./components/company-officers/company-officers.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent as the parent
    children: [
      { path: '', component: CompanySearchComponent },
      { path: 'search-results/:searchTerm', component: SearchResultsComponent },
      { path: 'company/:companyNumber', component: CompanyDetailsComponent },
      { path: 'company-officers', component: CompanyOfficersComponent } // New route for officers list
    ]
  }
];
