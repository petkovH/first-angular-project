import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { CounterComponent } from './components/counter/counter.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';

@NgModule({
  declarations: [SearchFieldComponent, CounterComponent, AppDashboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchFieldComponent, CounterComponent, AppDashboardComponent],
})
export class AppDashboardModule {}
