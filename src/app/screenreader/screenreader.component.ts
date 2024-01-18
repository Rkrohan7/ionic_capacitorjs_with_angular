// screenreader.component.ts
import { Component } from '@angular/core';
import { ScreenReaderService } from '../services/screen-reader.service';

@Component({
  selector: 'app-screenreader',
  templateUrl: 'screenreader.component.html',
  styleUrls: ['screenreader.component.scss'],
})
export class ScreenreaderComponent {
  constructor(public screenReaderService: ScreenReaderService) {}

  toggleScreenReader(): void {
    if (this.screenReaderService.isScreenReaderActive()) {
      this.screenReaderService.disableScreenReader();
    } else {
      this.screenReaderService.enableScreenReader();
    }
  }
}
