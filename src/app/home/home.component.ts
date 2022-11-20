import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalService } from '../shared/components/modal/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private titleService: Title, private modalService: ModalService) {
    this.titleService.setTitle('Crios - Home')
  }

  showModal() {
    this.modalService.open('modal');
  }

  goToLink(link: string): void {
    if (!link) {
      console.error('should must pass link');
      return;
    }
    window.open(link, "_blank");
  }

}
