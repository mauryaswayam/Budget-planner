import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget-planner';
}
