import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss'],
})
export class CompanySearchComponent {
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  searchCompanies() {
    if (this.isValidInput(this.searchTerm)) {
      this.errorMessage = ''; // Clear error if valid
      this.router.navigate(['/search-results', this.searchTerm]);
    } else {
      this.errorMessage = 'Please enter a valid company name or number (max 10 digits).';
    }
  }

  // Validation method
  isValidInput(input: string): boolean {
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allows letters, numbers, and spaces
    const numericRegex = /^[0-9]{1,10}$/; // Allows only numbers, up to 10 digits

    if (input.trim() === '') {
      return false; // Empty input is invalid
    }

    // Check if the input is either alphanumeric or a valid number (<= 10 digits)
    return alphanumericRegex.test(input) || numericRegex.test(input);
  }
}
