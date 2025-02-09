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
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        function changeActiveLink() {
            let scrollPosition = window.scrollY + 100; // Offset to trigger active state

            sections.forEach((section) => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active"); // Remove active from all
                        if (link.getAttribute("href").substring(1) === section.id) {
                            link.classList.add("active"); // Add active to current section
                        }
                    });
                }
            });
        }

        window.addEventListener("scroll", changeActiveLink);
    });
