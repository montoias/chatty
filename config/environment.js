/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-chat',
    podModulePrefix: 'ember-chat/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    //auth
    firebase: 'https://kewl-chat.firebaseio.com/',
    torii: {
      sessionServiceName: 'session',
      providers: {
        'firebase-simple-auth': {}
      }
    },

    'ember-simple-auth': {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'chat'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com https://*.firebaseio.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' wss://*.firebaseio.com auth.firebase.com",
      'img-src': "'self' www.facebook.com p.typekit.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net https://fonts.googleapis.com storage.googleapis.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com https://*.firebaseio.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
