import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Income
  lastMonthsIncome = ['January: $50000', 'March: $100000', 'April: $50000'];
  currentMonthIncome = '$200000000';

  // Expense
  lastMonthsExpenses = ['January: $50000', 'March: $100000', 'April: $50000'];
  currentMonthExpense = '$200000000';

  // Todo transactions
  todoTransactions = [
    { description: 'pay electricity bill' },
    { description: 'submit monthly report' },
    { description: 'Flipkart' },
    { description: 'Amazon' },
  ];

  constructor(public router: Router) {}

  onIncome() {
    this.router.navigate(['income']);
  }

  onExpense() {
    this.router.navigate(['expense']);
  }

  onTodo() {
    this.router.navigate(['todo']);
  }

  onTotalIncome() {
    this.router.navigate(['totalincome']);
  }
}
