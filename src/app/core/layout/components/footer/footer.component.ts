import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  brandlogo='https://png.pngtree.com/png-vector/20220601/ourmid/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png';
  year=new Date().getFullYear();
  brand='BuyVerse';
}
