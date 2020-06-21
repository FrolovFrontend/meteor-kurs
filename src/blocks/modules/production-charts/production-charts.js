import ApexCharts from 'apexcharts';

const options1 = {
  chart: {
    height: 96,
    toolbar: {
      show: false,
    },
    type: 'line',
  },
  stroke: {
    width: 2,
    colors: ['#222730'],
  },
  markers: {
    size: 4,
    colors: ['#071FEF'],
  },
  series: [
    {
      name: '',
      data: [17000, 34000, 53000, 86000],
    },
  ],
  xaxis: {
    lines: {
      show: false,
    },
    categories: [2017, 2018, 2019, 2020],
    tooltip: {
      enabled: false,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: true,
      color: '#898989',
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    followCursor: false,
    theme: false,
    style: {
      fontSize: '15px',
      fontFamily: 'PT Root UI, sans-serif',
    },
    marker: {
      show: false,
    },
  },
};

const chart1 = new ApexCharts(document.querySelector('#chart-1'), options1);
const chart2 = new ApexCharts(document.querySelector('#chart-2'), options1);
const chart3 = new ApexCharts(document.querySelector('#chart-3'), options1);

chart1.render();
chart2.render();
chart3.render();
