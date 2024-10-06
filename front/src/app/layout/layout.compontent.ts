import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-layout',
    imports: [
        RouterOutlet,
        SidebarComponent,
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
})
export class LayoutComponent { }
