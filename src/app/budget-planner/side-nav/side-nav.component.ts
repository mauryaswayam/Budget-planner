import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  isSlideOut = true;
  constructor(private router: Router) {}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDash() {
    this.router.navigate(['dashboard']);
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onHistory() {
    this.router.navigate(['history']);
  }

  onLogout() {
    this.router.navigate(['']);
  }
}
