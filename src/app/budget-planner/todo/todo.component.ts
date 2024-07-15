import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-transactions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html', // Make sure this file exists
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoform!: FormGroup;
  selectedMonth!: string;
  monthSelected: boolean = false;
  todoTransactions: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.todoform = new FormGroup({
      month: new FormControl('', Validators.required),
      expenseType: new FormControl('', Validators.required),
      expenseAmount: new FormControl('', Validators.required),
    });
  }

  onChangeExpense(event: any): void {
    this.selectedMonth = event.target?.value ?? ''; // Use optional chaining operator
  }

  onSubmitExpense(): void {
    if (this.todoform.valid) {
      const todoTransaction = {
        expenseType: this.todoform.get('expenseType')?.value, // Use optional chaining operator
        expenseAmount: this.todoform.get('expenseAmount')?.value, // Use optional chaining operator
        selected: false,
      };
      this.todoTransactions.push(todoTransaction);
      this.todoform.reset();
    }
  }

  getFilteredExpense(): any[] {
    return this.todoTransactions.filter(
      (todo) => todo.expenseType === this.selectedMonth
    );
  }

  calculateTotalExpense(month: string): number {
    let total = 0;
    this.todoTransactions.forEach((todo) => {
      if (todo.expenseType === month) {
        total += todo.expenseAmount;
      }
    });
    return total;
  }

  toggleSelection(todoTransaction: any): void {
    todoTransaction.selected = !todoTransaction.selected;
  }

  onBack(): void {
    this.router.navigate(['dashboard']); // Implement back button logic here
  }

  saveform(): void {
    alert('Form saved'); // Implement save form logic here
  }
}
