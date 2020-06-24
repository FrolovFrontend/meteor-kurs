export const options1 = {
  chart: {
    events: {
      mouseMove: function (event, chartContext, config) {
        const dataPointIndex = config.dataPointIndex;
        const dataSeries = config.globals.series.flat();

        let currentDataSeries = dataSeries.find(
          (el) => dataSeries.indexOf(el) === dataPointIndex
        );

        let currentPercent = dataPercent1.find(
          (el) => dataPercent1.indexOf(el) === dataPointIndex
        );

        if (currentDataSeries) {
          units1.textContent = currentDataSeries;
          percent1.textContent = currentPercent;
        } else {
          units1.textContent = dataSeries1[dataSeries1.length - 1];
          percent1.textContent = dataPercent1[dataPercent1.length - 1];
        }
      },
    },
  },
  series: [
    {
      name: '',
      data: [17000, 34000, 53000, 86000],
      percent: [41, 56, 64, 74],
    },
  ],
};

const dataSeries1 = options1.series.map((el) => el.data).flat(); // получили копию массива data
const dataPercent1 = options1.series.map((el) => el.percent).flat(); // получили массив процентов
const units1 = document.getElementById('units1'); // едениц произведено
const percent1 = document.getElementById('percent1'); // проценты
units1.textContent = dataSeries1[dataSeries1.length - 1]; // показываем последнее значение по умолчанию
percent1.textContent = dataPercent1[dataPercent1.length - 1]; // показываем последнее значение по умолчанию
