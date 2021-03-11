/* eslint-env node */
'use strict';

module.exports = function () {
  let ENV = {
    build: {},
    rootURL: '/seconds/',
    locationType: 'hash',
    ghpages: {
      gitRemoteUrl: 'git@github.com:/nolaneo/seconds',
    },
  };
  return ENV;
};
