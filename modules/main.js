
require.config({
    baseUrl: '../',
    paths: {
        'angular-animate': 'libs/angular.js/1.5.6/angular-animate',
        'angular-route': 'libs/angular.js/1.5.6/angular-route',
        'angular-sanitize': 'libs/angular.js/1.5.6/angular-sanitize',
        'angular-cookies': 'libs/angular.js/1.5.6/angular-cookies',
        'angular': 'libs/angular.js/1.5.6/angular',
        'angularAMD': 'libs/angularAMD/0.2.1/angularAMD.min',
        'ngload': 'libs/angularAMD/0.2.1/ngload.min',
        'underscore': 'libs/underscore.js/1.8.3/underscore',
        'chosen': 'libs/chosen/1.4.2/chosen.jquery',
        'angular-chosen': 'libs/angular-chosen/1.2.0/angular-chosen',
        'md5': 'libs/angular-md5/0.1.8/angular-md5',
        'angular-drag':'libs/angular-drag/angular-drag',
        'app': 'modules/app'
    },
    waitSeconds: 0,
    shim: {
        'angular-sanitize': ['angular'],
        'angular-route': ['angular'],
        'angular-animate': ['angular'],
        'angular-cookies': ['angular'],
        'angular': {exports: 'angular'},
        'angularAMD': ['angular', 'ngload'],
        'app': [
            'underscore',
            'angular-route',
            'angular-sanitize',
            'angular-animate',
            'angular-cookies'
        ]
    },
    deps: ['app']
});