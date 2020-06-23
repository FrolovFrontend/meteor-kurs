export const options3 = {
  chart: {
    events: {
      mouseMove: function (event, chartContext, config) {
        const dataPointIndex = config.dataPointIndex;
        const dataSeries = config.globals.series.flat();

        const currentDataSeries = dataSeries.find(
          (el) => dataSeries.indexOf(el) === dataPointIndex
        );

        const currentPercent = dataPercent3.find(
          (el) => dataPercent3.indexOf(el) === dataPointIndex
        );

        if (currentDataSeries) {
          units3.textContent = currentDataSeries;
          percent3.textContent = currentPercent;
        } else {
          units3.textContent = dataSeries3[dataSeries3.length - 1];
          percent3.textContent = dataPercent3[dataPercent3.length - 1];
        }
      },
    },
  },
  series: [
    {
      name: '',
      data: [22000, 35000, 38000, 39000],
      percent: [4, 17, 21, 23],
    },
  ],
};

const dataSeries3 = options3.series.map((el) => el.data).flat();
const dataPercent3 = options3.series.map((el) => el.percent).flat();
const units3 = document.getElementById('units3');
const percent3 = document.getElementById('percent3');
units3.textContent = dataSeries3[dataSeries3.length - 1];
percent3.textContent = dataPercent3[dataPercent3.length - 1];
