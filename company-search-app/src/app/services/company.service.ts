import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiKey: string = 'YOUR_API_KEY';
  private headers: HttpHeaders = new HttpHeaders({ 'x-api-key': this.apiKey });

  constructor(private http: HttpClient) {}

  searchCompanies(query: string): Observable<any> {
    const url: string = `/TruProxyAPI/rest/Companies/v1/Search?Query=${query}`;
    return this.http.get(url, { headers: this.headers });
  }

  getCompanyOfficers(companyNumber: string): Observable<any> {
    const url: string = `/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=${companyNumber}`;
    return this.http.get(url, { headers: this.headers });
  }
}
