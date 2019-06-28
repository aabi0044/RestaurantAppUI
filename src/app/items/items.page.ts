import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.navigateBack(['']);

  }

}
