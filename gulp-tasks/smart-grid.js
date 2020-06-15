'use strict';

import gulp from 'gulp';
const smartgrid = require('smart-grid');

gulp.task('smart-grid', (cb) => {
  smartgrid('./src/styles/vendor/import/', {
    outputStyle: 'scss',
    filename: '_smart-grid',
    columns: 12, // number of grid columns
    offset: '1.875rem', // gutter width - 30px
    mobileFirst: true,
    mixinNames: {
      container: 'container',
    },
    container: {
      fields: '16px',
    },
    breakPoints: {
      xs: {
        width: '320px',
      },
      sm: {
        width: '600px',
        fields: '40px',
      },
      md: {
        width: '768px',
      },
      lg: {
        width: '1024px',
      },
      xl: {
        width: '1200px',
      },
    },
  });
  cb();
});
