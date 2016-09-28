/**
 * Created by 123 on 2016/8/29.
 */
define(function () {
    return {
        "index": {
            "hash": "/",
            "templateUrl": "modules/views/index/index.tpl.html",
            "controllerUrl": "modules/views/index/index.ctl",
            "controller": "indexController as ctrl"
        },
        "image": {
            "hash": "/image",
            "templateUrl": "modules/views/image/index.tpl.html",
            "controllerUrl": "modules/views/image/index.ctl",
            "controller": "imageController as ctrl"
        }
    };
});