$(function () {
    'use strict';
    var images = [];

    $(document).mousemove(function (e) {
        var createImageDiv, imageDiv, divNode;

        createImageDiv = function () {
            var createImage, imageDivNode, imageNode;

            createImage = function () {
                var imageNode, heightWidthRatio;

                imageNode = document.createElement('img');
                imageNode.src = 'http://littleguurrl.files.' +
                    'wordpress.com/2012/01/598270.jpg?w=584';

                heightWidthRatio = imageNode.height / imageNode.width;
                imageNode.height = (Math.random() / Math.random()) % 100;
                imageNode.width = imageNode.height * heightWidthRatio;

                return imageNode;
            };

            imageNode = createImage()
            imageDivNode = document.createElement('div');
            imageDivNode.appendChild(imageNode);

            imageDivNode.style.position = 'absolute';
            imageDivNode.style.left = e.pageX - imageNode.width;
            imageDivNode.style.top = e.pageY - imageNode.height;

            return imageDivNode;
        };

        imageDiv = createImageDiv();
        divNode = document.createElement('div');

        document.body.appendChild(imageDiv);
        images.push(imageDiv);
    });
});
