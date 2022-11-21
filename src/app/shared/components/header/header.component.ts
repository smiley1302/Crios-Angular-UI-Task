import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  open(type: string): void {
    if (type === 'navList') {
      // navList functionality code here
    } else if (type === 'search') {
      // navList functionality code here
    } else if (type === 'home') {
      this.router.navigate(['/home']);
    }
  }

}
