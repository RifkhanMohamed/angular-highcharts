import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { pieChartOption } from "./_helpers/pieChartOption";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-charts';
  pieChart = new Chart(pieChartOption);
}
