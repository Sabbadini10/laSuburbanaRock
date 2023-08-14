import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, ToolbarModule, ButtonModule],
  exports: [ToolbarComponent],
})
export class SharedModule {}
