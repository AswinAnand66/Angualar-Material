import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MaterialComponent = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponent,
  ],
  exports:[MaterialComponent]
})
export class MaterialModule { }
