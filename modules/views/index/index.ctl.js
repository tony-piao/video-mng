/**
 * Created by 123 on 2016/8/29.
 */
define([
    'app',
    './data'
], function (app, resource) {


    function scrollFunc() {

        var _dir = "scrollLeft";

        var scrollSize = "300";

        var newPos = _scrollObj[_dir] + 1;
        if (newPos >= scrollSize) {
            newPos -= scrollSize;
        }
        _scrollObj[_dir] = newPos;

    }

    app.controller("indexController", (function () {

        function IndexController() {
            this.resource = [];
        }

        IndexController.prototype.init = function () {
            var self = this;

            self.resource = resource.data;

            _scrollObj =  document.getElementById("content");

            setInterval(scrollFunc, 20);
        };

        return IndexController;

    })());
});