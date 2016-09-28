/**
 * Created by 123 on 2016/8/29.
 */
define([
    'app',
    '../../directives/ngThumb.directive'
], function (app) {

    app.controller("imageController", (function () {

        function ImageController(FileUploader) {
            this.upLoader = null;
            this.FileUploader = FileUploader;
        }

        ImageController.prototype.init = function () {
            var self = this,
                upLoader = self.upLoader = new self.FileUploader({
                    url: 'upload.php'
                });

            upLoader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            upLoader.onAfterAddingFile = function (fileItem) {
                console.info('onAfterAddingFile', fileItem);
            };
            upLoader.onAfterAddingAll = function (addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);
            };
            upLoader.onBeforeUploadItem = function (item) {
                console.info('onBeforeUploadItem', item);
            };
            upLoader.onProgressItem = function (fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            upLoader.onProgressAll = function (progress) {
                console.info('onProgressAll', progress);
            };
            upLoader.onSuccessItem = function (fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
            };
            upLoader.onErrorItem = function (fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            upLoader.onCancelItem = function (fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            upLoader.onCompleteItem = function (fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            upLoader.onCompleteAll = function () {
                console.info('onCompleteAll');
            };

        };

        return ImageController;

    })());
});