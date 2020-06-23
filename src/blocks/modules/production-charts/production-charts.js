import ApexCharts from 'apexcharts';
import './production-global-charts';
import { options1 } from './production-chart-1';
import { options2 } from './production-chart-2';
import { options3 } from './production-chart-3';

const chart1 = new ApexCharts(document.querySelector('#chart-1'), options1);
const chart2 = new ApexCharts(document.querySelector('#chart-2'), options2);
const chart3 = new ApexCharts(document.querySelector('#chart-3'), options3);

chart1.render();
chart2.render();
chart3.render();
