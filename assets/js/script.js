/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on("load", function () {
    const elements = document.querySelectorAll(".my-text,.my-image");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach((element) => observer.observe(element));
    function animateElement(element) {
        gsap.fromTo(
            element,
            { "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0, y: 10 },
            { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 1.2 }
        );
    }
});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */



$(document).ready(function () {


            //Faq page - Start
    //tab-category-filter
    const tabLinks = document.querySelectorAll(".tablinks");
    const items = document.querySelectorAll(".item");

    for (const link of tabLinks) {
        link.addEventListener("click", () => {
            // Get the filter value from the data-filter attribute
            const filterValue = link.getAttribute("data-filter");

            // Loop through all items and hide/show them based on the filter value
            for (const item of items) {
                if (filterValue === "all") {
                    item.style.display = "block";
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }

            // Set the active class on the clicked button and remove from others
            for (const tabLink of tabLinks) {
                tabLink.classList.remove("active");
            }
            link.classList.add("active");
        });
    }

    // Accordion
    
    $(function () {
        if ($('.accordion-list').length) {
            $('.accordion-list').on('click', '.accordion-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
                $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

                // add slideToggle into this
                $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
                $(this).find('.ni').toggleClass('ni-plus ni-minus');
            });
        }
    });

    //Faq page - End





    // recent-deals-active = slider
    let recentDealsActive = new Swiper(".recent-deals-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".recent-deals-swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".recent-deals-swiper-next",
            prevEl: ".recent-deals-swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    // testimonial = slider
    let testimonialItems = new Swiper(".testimonial-items", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".recent-deals-swiper-pagination2",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
        },
    });

    // wow js init
    // $(function () {
    //     var wow = new WOW({
    //         animateClass: 'animated',
    //         mobile: true
    //     });
    //     wow.init();
    // });


});







// before load

tl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: "expo.inOut",
        delay: 1,
    },
});

tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
