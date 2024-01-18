// src/app/services/screen-reader.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenReaderService {
  private isScreenReaderEnabled = false;

  enableScreenReader(): void {
    this.isScreenReaderEnabled = true;
  }

  disableScreenReader(): void {
    this.isScreenReaderEnabled = false;
  }

  isScreenReaderActive(): boolean {
    return this.isScreenReaderEnabled;
  }
}
