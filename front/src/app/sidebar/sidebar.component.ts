import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    RouterOutlet,
  ],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(private router: Router) {
    this.checkWindowSize();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Verifica el tamaño de la ventana
  checkWindowSize() {
    if (window.innerWidth <= 768) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  logout(): void {
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  // Listener para el evento de redimensionamiento
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }
}
