// transactions.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Transaction {
  expenseType: string;
  expenseAmount: number;
  month: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  todoform: FormGroup;
  transactions: Transaction[] = [
    { expenseType: 'Food', expenseAmount: 100, month: 'January' },
    { expenseType: 'Transport', expenseAmount: 50, month: 'January' },
    { expenseType: 'Rent', expenseAmount: 1500, month: 'February' },
    { expenseType: 'Utilities', expenseAmount: 100, month: 'February' },
    { expenseType: 'Food', expenseAmount: 120, month: 'March' },
    { expenseType: 'Entertainment', expenseAmount: 200, month: 'March' },
  ];
  selectedMonth!: string;

  constructor(private router: Router) {
    this.todoform = new FormGroup({
      month: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmitExpense(): void {
    console.log('Form submitted');
  }

  onChangeExpense(event: any): void {
    this.selectedMonth = event.target.value;
  }

  calculateTotalExpense(month: string): number {
    return this.transactions
      .filter((transaction) => transaction.month === month)
      .reduce((acc, current) => acc + current.expenseAmount, 0);
  }

  getFilteredExpense(): Transaction[] {
    return this.transactions.filter(
      (transaction) => transaction.month === this.selectedMonth
    );
  }

  onBack(): void {
    this.router.navigate(['dashboard']);
  }
}
