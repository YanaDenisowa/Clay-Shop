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

       let dropdowns = document.getElementsByClassName("dropdown_content");

        let dropdownsBurger = document.getElementsByClassName("dropdown_content_burger");
        let i;
        for (i = 0; i < dropdowns.length; i++) {

            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                toggleDropdownIcon("dropdown_icon");
                toggleDropdownIcon("dropdown_icon_burger");
            }
        }
        for (i = 0; i < dropdownsBurger.length; i++) {

            let openDropdown = dropdownsBurger[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}


function menuShow() {
    let ulMenuShow = document.getElementById("right_menu_burger");
    ulMenuShow.style.transform = "none";
}
function menuHide(){
    let ulMenuHide=document.getElementById("right_menu_burger");
    ulMenuHide.style.transform = "translate(0, -100%)";
}