import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  incomeForm: any;
  selectedMonth: string = '';
  JanuaryIncome: any[] = [
    { source: 'Salary', amount: 10000, investments: '4052(k)' },
    { source: 'freelancing', amount: 10000, investments: 'stocks' },
  ];
  FebruaryIncome: any[] = [
    { source: 'Salary', amount: 10000, investments: '4052(k)' },
    { source: 'rent', amount: 10000, investments: 'real esate' },
  ];
  MarchIncome: any[] = [
    { source: 'Salary', amount: 10000, investments: '4052(k)' },
    { source: 'freelancing', amount: 10000, investments: 'stocks' },
    { source: 'rent', amount: 10000, investments: 'real esate' },
  ];
  monthselected: boolean = false;

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.incomeForm = new FormGroup({
      month: new FormControl(''),
      investments: new FormControl(''),
      Source: new FormControl(''), // Define the form control here
      amount: new FormControl(''),
    });

    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthselected = true;
    this.getFilteredIncomes();
  }

  getFilteredIncomes() {
    let FilteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        FilteredIncomes = [...this.JanuaryIncome];
        break;
      case 'February':
        FilteredIncomes = [...this.FebruaryIncome];
        break;
      case 'March':
        FilteredIncomes = [...this.MarchIncome];
        break;
      default:
        break;
    }
    return FilteredIncomes;
    throw new Error('Method not implemented.');
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomeForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomeForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.JanuaryIncome;
      case 'February':
        return this.FebruaryIncome;
      case 'March':
        return this.MarchIncome;
      default:
        return [];
    }
  }

  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.JanuaryIncome.push(newIncome);
          break;
        case 'February':
          this.FebruaryIncome.push(newIncome);
          break;
        case 'March':
          this.MarchIncome.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({
        month: '',
        source: '',
        amount: '',
        investments: '',
      });
    }
  }
  saveform(): void {
    alert('form saved');
  }
  onBack(): void {
    // Check the value of this.router
    this.router.navigate(['dashboard']);
  }
}
