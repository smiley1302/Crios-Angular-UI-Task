import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  open(type: string): void {
    if (type === 'navList') {
      // navList functionality code here
    } else if (type === 'search') {
      // navList functionality code here
    }
  }

}
