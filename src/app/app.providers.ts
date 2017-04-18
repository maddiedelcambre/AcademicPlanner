import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { AuthProvider } from '../providers/auth';

import{ AngularFire } from 'angularfire2';
import { TaskData } from '../providers/data';


export function GetProviders() {
  let providers;
  if(document.URL.includes('https://') || document.URL.includes('http://')){
    // Use browser providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
      TaskData

    ];
  } else {
    // Use device providers
    providers = [

      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
      TaskData

    ];
  }
  return providers;
}
