$(document).ready(function () {
    var func;
    var walkPassed=0;
    $("#hello").click(function () {
        func = (Math.floor(Math.random() * 5) + 1);
        switchCase();
        clicked();
    });

    function clicked(){
        walkPassed++;
        $("#counter").html("Ziggys Past: "+walkPassed)
    }
    function switchCase() {
        switch (func) {
            case 1:
                hej1();
                break;
            case 2:
                hej2();
                break;
            case 3:
                hej3();
                break;
            case 4:
                hej4();
                break;
            case 5:
                hej5();
                break;

        }

    }

    function hej1() {
        hejhej1.play();
    }

    function hej2() {
        hejhej2.play();
    }

    function hej3() {
        hejhej3.play();
    }

    function hej4() {
        hejhej4.play();
    }

    function hej5() {
        hejhej5.play();
    }


    var hejhej1 = new Audio('sound/1.mp3');
    hejhej1.volume=0.3;
    var hejhej2 = new Audio('sound/2.mp3');
    hejhej2.volume=0.3;
    var hejhej3 = new Audio('sound/3.mp3');
    hejhej3.volume=0.3;
    var hejhej4 = new Audio('sound/4.mp3');
    hejhej4.volume=0.3;
    var hejhej5 = new Audio('sound/5.mp3');
    hejhej5.volume=0.3;

});