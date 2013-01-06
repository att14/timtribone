jQuery(document).ready(function () {
    'use strict';
    var images = [],
        mouseX,
        mouseY,
        createAndMoveImages = function (e) {
            var createImageDiv = function () {
                var createImage = function () {
                    var imageNode, heightWidthRatio;

                    imageNode = document.createElement('img');
                    imageNode.src = 'http://littleguurrl.files.' +
                        'wordpress.com/2012/01/598270.jpg?w=584';

                    heightWidthRatio = imageNode.height / imageNode.width;
                    imageNode.height = Math.random() * 100;
                    imageNode.width = imageNode.height * heightWidthRatio;

                    return imageNode;
                },
                    imageNode = createImage(),
                    imageDivNode = document.createElement('div');

                imageDivNode.appendChild(imageNode);

                imageDivNode.className = 'image'
                imageDivNode.style.position = 'absolute';
                imageDivNode.style.left = mouseX - imageNode.width;
                imageDivNode.style.top = mouseY - imageNode.height;

                return imageDivNode;
            },
                moveImages = function () {
                    $('.image').each(function () {
                        var leftRight = Math.random() > .5 ? true : false,
                            moveY = '-=30',
                            moveX = leftRight ? '-=10' : '+=10';

                        $(this).animate(
                            {
                                top: moveY,
                                left: moveX
                            },
                            1
                        );
                        if(parseInt(this.style.top) < 0) {
                            this.className = 'del';
                        }
                    });

                    $('.del').remove();
                },
                imageDiv = createImageDiv();

            document.body.appendChild(imageDiv);
            moveImages()

            setTimeout(createAndMoveImages, 50);
        };

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    createAndMoveImages();
});
