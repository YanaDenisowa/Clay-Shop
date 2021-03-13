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
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
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
                }
            }

        ]
    });
});

// Close the dropdown menu if the user clicks outside of it
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop_btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}