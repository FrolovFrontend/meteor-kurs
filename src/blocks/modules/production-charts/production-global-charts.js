export default window.Apex = {
  chart: {
    type: 'line',
    height: 96,
    offsetX: 3,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
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
