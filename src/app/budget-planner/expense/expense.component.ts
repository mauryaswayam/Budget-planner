import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  expenseform!: FormGroup;
  selectedMonth: string;
  monthSelected: boolean = false;

  januaryExpense: { expenseType: string; expenseAmount: number }[] = [
    { expenseType: 'Rent', expenseAmount: 1200 },
    { expenseType: 'Groceries', expenseAmount: 12000 },
  ];
  februaryExpense: { expenseType: string; expenseAmount: number }[] = [
    { expenseType: 'Utilities', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 15000 },
  ];
  marchExpense: { expenseType: string; expenseAmount: number }[] = [
    { expenseType: 'Rent', expenseAmount: 12520 },
    { expenseType: 'Utilities', expenseAmount: 52800 },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', {
      month: 'long',
    });
  }

  ngOnInit(): void {
    this.expenseform = this.fb.group({
      month: new FormControl('', Validators.required),
      expenseType: new FormControl('', Validators.required),
      expenseAmount: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  onChangeExpense(event: any): void {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
  }

  onSubmitExpense(): void {
    if (this.expenseform.valid) {
      const newExpense = this.expenseform.value;
      const filteredExpenses = this.getFilteredExpense();
      filteredExpenses.push({
        expenseType: newExpense.expenseType,
        expenseAmount: newExpense.expenseAmount,
      });
      this.expenseform.reset();
      this.expenseform.patchValue({ month: this.selectedMonth });
    }
  }

  calculateTotalExpense(month: string): number {
    return this.getFilteredExpense().reduce(
      (acc, curr) => acc + curr.expenseAmount,
      0
    );
  }

  getFilteredExpense(): { expenseType: string; expenseAmount: number }[] {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      default:
        return [];
    }
  }

  onBack(): void {
    this.router.navigate(['dashboard']); // Implement back button logic here
  }

  saveform(): void {
    alert('Form saved'); // Implement save form logic here
  }
}
