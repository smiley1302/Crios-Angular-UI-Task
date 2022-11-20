import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  goToLink(link: string): void {
    if (!link) {
      console.error('should must pass link');
      return;
    }
    window.open(link, "_blank");
  }

}
