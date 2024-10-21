import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  companies: any[] = [];
  totalResults: number = 0;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm') || '';

    if (this.searchTerm.trim()) {
      this.companyService.searchCompanies(this.searchTerm).subscribe(response => {
        this.companies = response.items;
        this.totalResults = response.total_results;
      });
    }
  }
}
