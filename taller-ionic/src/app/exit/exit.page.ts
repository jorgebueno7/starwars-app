import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  constructor(private alertController: AlertController) { }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'The app will be closed.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  ngOnInit() {
  }

}
