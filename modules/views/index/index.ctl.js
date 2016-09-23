/**
 * Created by 123 on 2016/8/29.
 */
define([
    'app',
    './data'
], function (app, resource) {


    app.controller("indexController", (function () {

        function IndexController() {
            this.resource = [];
            this.searchInfo = {
                name:null
            };
            this.options = [
                {key:'yuri',value:'yuri'},
                {key:'tiffany',value:'tiffany'},
                {key:'jessica',value:'jessica'}
            ]
        }

        IndexController.prototype.init = function () {
            var self = this;

            self.resource = resource.data;

        };

        return IndexController;

    })());
});