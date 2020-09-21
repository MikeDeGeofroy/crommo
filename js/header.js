$(function() {
    HeaderProportions();
    MarqueeProportions();
    $("#buttons").click(function() {
        $(".shopimg").hide();
    });
});

$(window).resize(function() {
    HeaderProportions();
    MarqueeProportions();
});

function HeaderProportions(){
    // Getting height of header to then define the size of the text and logo based on the headder, then centering the text and logo.
    headerheight = $("#header").height();
    textsize = headerheight/4;
    $("#header a:not(#logo)").css("font-size", textsize);
    textoffset = headerheight/2 - textsize/2;
    $("#header a:not(#logo)").css("margin-top", textoffset);

    windowheight = $(document).width();

    if(windowheight > 800){
        logosize = headerheight/2;
    } else {
        logosize = headerheight/3;
    }

    logooffset = headerheight-logosize/1.2;
    $("#logo img").css("height", logosize);
    $("#logo img").css("margin-top", logooffset/2);
}

// Marquee

function MarqueeProportions(){
    // Centering Marquee Text & Setting text size.
    marqueeheight = $("#marquee").height();
    marqueetextsize = marqueeheight/1.8;
    marqueetextoffset = marqueeheight/2 - marqueetextsize/1.8;
    $("#marquee p").css("font-size", marqueetextsize);
    $("#marquee p").css("margin-top", marqueetextoffset);

    $marquee = $("#marquee p");
    $marqueetext = $("#marquee p span");
    text = ["MEDICAL TREATMENT - DO NOT WALK OUTISDE THIS AREA"];
    
    maxoffset = $marquee.width();

    startoffset = $marqueetext.height();

    position = 0;

    textindent = parseInt($marquee.css("text-indent"), 10);
    
    scroll();

    function scroll(){
        $marquee.css("text-indent", "-550");
        $marqueetext.html(text[position]);
        position++;
        if(position >= text.length){
            position = 0;
        }
        $marquee.animate({ "text-indent":`${maxoffset}` }, 20000, "linear", function(){
            scroll();
        });
    }
}