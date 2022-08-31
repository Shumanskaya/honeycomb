import { Injectable } from '@angular/core';

function getWindow(): Window {
  return window;
}

@Injectable()
export class WindowService {
  get nativeWindow(): Window {
    return getWindow();
  }
}