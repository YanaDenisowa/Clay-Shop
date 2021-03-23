$(document).ready(function(){
    $('.slider_block').slick({
        arrows: true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:4,
        slidesToScroll:4,
        speed:1000,
        easing:'ease',
        infinite:true,
        autoplay:false,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        pauseOnHover:true,
        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }


        ]
    });
});
$(document).ready(function(){
    $('.product_slider').slick({
        arrows: true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1000,
        easing:'ease',
        infinite:true,
        autoplay:false,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        pauseOnHover:true,
        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }

        ]
    });
});
function toggleDropdownList() {
    document.getElementById("myDropdownBurger").classList.toggle("show");
    document.getElementById("myDropdown").classList.toggle("show");

    toggleDropdownIcon("dropdown_icon");
    toggleDropdownIcon("dropdown_icon_burger");
}

function toggleDropdownIcon(iconId) {

    if (document.getElementById(iconId).classList.contains("fa-caret-down")) {
        document.getElementById(iconId).classList.remove("fa-caret-down");
        document.getElementById(iconId).classList.add("fa-caret-right");
    } else {
        document.getElementById(iconId).classList.remove("fa-caret-right");
        document.getElementById(iconId).classList.add("fa-caret-down");
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.drop_btn')) {

        var dropdowns = document.getElementsByClassName("dropdown_content");

        var dropdownsBurger = document.getElementsByClassName("dropdown_content_burger");
        var i;
        for (i = 0; i < dropdowns.length; i++) {

            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                toggleDropdownIcon("dropdown_icon");
                toggleDropdownIcon("dropdown_icon_burger");
            }
        }
        for (i = 0; i < dropdownsBurger.length; i++) {

            var openDropdown = dropdownsBurger[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}


function test() {
    var ulMenu = document.getElementById("ul_menu_1");
    ulMenu.style.transform = "none";
    console.log(ulMenu);
}
function test2(){
    var ulMenu2=document.getElementById("ul_menu_1");
    ulMenu2.style.transform = "translate(0, -100%)";
    console.log(ulMenu2);
}