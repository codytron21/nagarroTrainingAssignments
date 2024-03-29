document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Hey there.", "I'm Rohan kumar.", "A Web developer.", "Technology Enthusiast"];


    function typeWriter(text, i, fnCallback) {

        if (i < (text.length)) {

            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';


            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 150);
        }

        else if (typeof fnCallback == 'function') {

            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 200);
        }

        if (i < dataText[i].length) {

            typeWriter(dataText[i], 0, function () {

                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});