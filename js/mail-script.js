    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".menu_nav .nav-link");

        function changeActiveLink() {
            let scrollPosition = window.scrollY + 100; // Offset for proper detection

            let activeFound = false;
            sections.forEach((section) => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === section.id) {
                            link.classList.add("active");
                            activeFound = true;
                        }
                    });
                }
            });

            // If no active section found (at top), default to Home tab
            if (!activeFound) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector('.menu_nav .nav-link[href="#home"]').classList.add("active");
            }
        }

        // Run on page load and scroll
        window.addEventListener("scroll", changeActiveLink);
        changeActiveLink(); // Run immediately to set the correct active tab
    });



