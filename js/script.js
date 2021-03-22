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

// Close the dropdown menu if the user clicks outside of it
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
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}


