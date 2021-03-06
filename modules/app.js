/**
 * Created by 123 on 2016/8/29.
 */
define([
    'angularAMD',
    'angular',
    'modules/router'
], function (angularAMD, angular, routes) {

    var mainApp = angular.module('app', [
            'ngRoute',
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'localytics.directives',
            'angularFileUpload'
        ])

        .constant('cRoutes', routes)

        .config(function ($routeProvider) {

            _.each(routes, function (module) {
                return $routeProvider.when(module.hash, angularAMD.route(module));
            });

        })

        .controller("appCtrl", appCtrl);

    function appCtrl($location, cRoutes) {
        //$location.path(cRoutes.index.url);
    }

    return angularAMD.bootstrap(mainApp);
});