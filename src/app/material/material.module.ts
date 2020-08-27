import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule  } from '@angular/material/input';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
   imports: [
      MatProgressSpinnerModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatBadgeModule,
      MatProgressBarModule,
      MatButtonModule,

   ],
   exports: [
      MatProgressSpinnerModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatBadgeModule,
      MatProgressBarModule,
      MatButtonModule,
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }