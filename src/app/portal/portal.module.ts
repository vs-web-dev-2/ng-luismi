import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';



@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: {
    PortalModule
  }
})
export class PortalModule { }
