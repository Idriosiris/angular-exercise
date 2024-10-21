import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-officers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-officers.component.html',
  styleUrls: ['./company-officers.component.scss']
})
export class CompanyOfficersComponent implements OnInit {
  companyName: string = '';
  companyNumber: string = '';
  officers: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    const navigation = history.state;
    this.companyName = navigation.companyName || '';
    this.companyNumber = navigation.companyNumber || '';

    if (this.companyNumber) {
      this.companyService.getCompanyOfficers(this.companyNumber).subscribe(response => {
        this.officers = response.items;
      });
    }
  }
}
``
