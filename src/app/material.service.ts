import { Injectable, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [    
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MaterialService {

  constructor() { }
}
