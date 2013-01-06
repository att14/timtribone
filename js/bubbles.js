jQuery(document).ready(function () {
    'use strict';
    var images = [],
        mouseX,
        mouseY,
        createImage,
        moveImages;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    createImage = function () {
        var createImageDiv, imageDiv;

        createImageDiv = function () {
            var createImage,
                imageNode,
                imageDivNode = document.createElement('div');

            createImage = function () {
                var imageNode, heightWidthRatio;

                imageNode = document.createElement('img');
                imageNode.src = 'http://littleguurrl.files.' +
                    'wordpress.com/2012/01/598270.jpg?w=584';

                heightWidthRatio = imageNode.height / imageNode.width;
                imageNode.height = 10;
                imageNode.width = imageNode.height * heightWidthRatio;

                return imageNode;
            };
            imageNode = createImage();

            imageDivNode.appendChild(imageNode);

            imageDivNode.className = 'image'
            imageDivNode.style.position = 'absolute';
            imageDivNode.style.left = mouseX - imageNode.width;
            imageDivNode.style.top = mouseY - imageNode.height;

            return imageDivNode;
        };

        imageDiv = createImageDiv();
        document.body.appendChild(imageDiv);

        setTimeout(createImage, 75);
    };

    moveImages = function () {
        $('.image').each(function () {
            var leftRight =  Math.floor(Math.random() * mouseY) % 2 == 0 ? true : false,
                moveY = '-=20',
                moveX = leftRight ? '-=10' : '+=10';

            $(this).animate(
                {
                    top: moveY,
                    left: moveX
                },
                15
            );

            if(parseInt(this.style.top) < 0) {
                $(this).remove()
            }
        });

        setTimeout(moveImages, 15);
    };

    createImage()
    moveImages()
});
