$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    init = function(){

    bindEvents();

        if(validIndex(openedIndex)){
        animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }

    },

    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $(".button").hover(
            function(){
                $(this).addClass("hovered");
            },
            function(){
                $(this).removeClass("hovered");
            }
        );

        $(".button").click(function(){
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },

    validIndex = function(indexToCheck){
        return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
    },

    animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
        $btns = $item.find(".btn"),
        itemParam = toOpen ? {width: "420px"} : {width: "140px"},
        colorItemParam = toOpen ? {left: "0px"} : {left: "140px"};

        $colorImage.animate(colorItemParam, speed);
        $item.animate(itemParam, speed, function() {
        if(toOpen){
        $btns.fadeIn();
        } else {
        $btns.fadeOut();
        }
    });

    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate){
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            }
            else{
                if(validIndex(indexToCheckAndAnimate)){
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
    }
};

    init();

});