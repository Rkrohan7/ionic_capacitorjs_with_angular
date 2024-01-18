import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  image: string = '';
  latitude: number = 0; 
  longitude: number = 0; 
  address: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    this.image = `data:image/jpeg;base64,${image.base64String}`;
  }

  async goToLocation() {
    this.router.navigate(['/screenreader']);
  }
}
