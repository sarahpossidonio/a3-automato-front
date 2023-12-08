import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { appConfig } from './app.config';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientJsonpModule),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
