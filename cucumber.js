module.exports = {
  default: {
    require: ['src/tests/steps/**/*.js',
      'src/tests/support/hooks.js'
    ],
    paths: ['src/resources/features/**/*.feature']
  }
};
