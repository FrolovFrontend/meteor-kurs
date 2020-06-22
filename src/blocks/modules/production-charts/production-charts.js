import ApexCharts from 'apexcharts';

const options1 = {
  chart: {
    height: 96,
    toolbar: {
      show: false,
    },
    type: 'line',
    events: {
      mouseMove: function (event, chartContext, config) {
        const dataPointIndex = config.dataPointIndex;
        const dataSeries = config.globals.series.flat();

        const currentDataSeries = dataSeries.find(
          (el) => dataSeries.indexOf(el) === dataPointIndex
        );

        const currentPercent = dataPercent1.find(
          (el) => dataPercent1.indexOf(el) === dataPointIndex
        );

        if (currentDataSeries) {
          units1.textContent = currentDataSeries;
          percent1.textContent = currentPercent;
        } else {
          units1.textContent = dataSeries1[dataSeries1.length - 1];
          percent1.textContent = dataPercent1[dataPercent1.length - 1];
        }

        // console.log(currentDataSeries, dataPointIndex);
      },
    },
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
      percent: [41, 56, 64, 74],
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

const dataSeries1 = options1.series.map((el) => el.data).flat(); // получили копию массива data первого графика
const dataPercent1 = options1.series.map((el) => el.percent).flat(); // получили массив процентов

const units1 = document.getElementById('units1');
const percent1 = document.getElementById('percent1');

units1.textContent = dataSeries1[dataSeries1.length - 1]; // показываем последнее значение по умолчанию
percent1.textContent = dataPercent1[dataPercent1.length - 1];
