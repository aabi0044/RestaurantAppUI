import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  back(){
this.navCtrl.navigateBack(['']);
  }
}
