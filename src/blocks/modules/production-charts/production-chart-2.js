export const options2 = {
  chart: {
    events: {
      mouseMove: function (event, chartContext, config) {
        const dataPointIndex = config.dataPointIndex;
        const dataSeries = config.globals.series.flat();

        const currentDataSeries = dataSeries.find(
          (el) => dataSeries.indexOf(el) === dataPointIndex
        );

        const currentPercent = dataPercent2.find(
          (el) => dataPercent2.indexOf(el) === dataPointIndex
        );

        if (currentDataSeries) {
          units2.textContent = currentDataSeries.toLocaleString('ru-RU');
          percent2.textContent = currentPercent;
        } else {
          units2.textContent = dataSeries2[dataSeries2.length - 1].toLocaleString('ru-RU');
          percent2.textContent = dataPercent2[dataPercent2.length - 1];
        }
      },
    },
  },
  series: [
    {
      name: '',
      data: [29000, 18000, 38000, 47000],
      percent: [44, 25, 108, 194],
    },
  ],
};

const dataSeries2 = options2.series.map((el) => el.data).flat();
const dataPercent2 = options2.series.map((el) => el.percent).flat();
const units2 = document.getElementById('units2');
const percent2 = document.getElementById('percent2');
units2.textContent = dataSeries2[dataSeries2.length - 1].toLocaleString('ru-RU');
percent2.textContent = dataPercent2[dataPercent2.length - 1];
