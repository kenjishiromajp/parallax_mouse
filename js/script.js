$(function () {
    $("body").mousemove(function (ev) {
        var x = ev.pageX - parseInt($(this).css("marginLeft"));
        var y = ev.pageY - parseInt($(this).css("marginTop"));
        var cWidth = $(this).width();
        var cHeight = $(this).height();

        $("#main .container > *").attr("style", "");


        $.each($("#b1,#b5"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 5;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 5;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });


        $.each($("#b2"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 3;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 5;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });



        $.each($("#b3"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 10;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 10;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });


        $.each($("#b4"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 7;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 7;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });


        $.each($("#b6"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 12;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 11;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });

        $.each($("#b7"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 18;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 18;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });

        $.each($("#b8"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 12;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 12;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });


        $.each($("#b9"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 9;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 9;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });

        $.each($("#b10"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 18;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 18;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });

        $.each($("#b11"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 12;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 18;
            calc = (parseInt($(this).css("top")) + calc) + "px";
            $(this).css({ top: calc });
        });

        $.each($("#escafandro"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 15;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });
        });

        $.each($("#cadeira"), function (index) {
            var calc;
            calc = ((cWidth / 2) - x) / 12;
            calc = (parseInt($(this).css("left")) + calc) + "px";
            $(this).css({ left: calc });

            calc = ((cHeight / 2) - y) / 20;
            calc = (parseInt($(this).css("bottom")) + calc) + "px";
            $(this).css({ bottom: calc });
        });

        var calc;
        var newX = ((cWidth / 2) - x) / 15;
        var newY = ((cHeight / 2) - y) / 20;
        $("#lettering .shadow").css({ transform: "translate("+newX+"px,"+newY+"px)" });


        var calc;
        var newX = ((cWidth / 2) - x) / 8;
        var newY = ((cHeight / 2) - y) / 12;
        $("#lettering .content").css({ transform: "translate("+newX+"px,"+newY+"px)" });



    });
     new Vivus('lettering', {duration: 200, type: "sync", animTimingFunction: Vivus.EASE_OUT}).play();
})