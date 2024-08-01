document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Rotating banner functionality
    let slideIndex = 0;
    const slides = document.getElementsByClassName("banner-slide");
    const indicators = document.getElementsByClassName("indicator");

    let autoSlideTimeout;

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            indicators[i].className = indicators[i].className.replace(" active-indicator", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active-indicator";
        autoSlideTimeout = setTimeout(showSlides, 10000); // Change image every 10 seconds
    }

    function changeSlide(n) {
        clearTimeout(autoSlideTimeout);
        slideIndex += n;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            indicators[i].className = indicators[i].className.replace(" active-indicator", "");
        }
        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active-indicator";
        autoSlideTimeout = setTimeout(showSlides, 10000);
    }

    function currentSlide(n) {
        clearTimeout(autoSlideTimeout);
        slideIndex = n;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            indicators[i].className = indicators[i].className.replace(" active-indicator", "");
        }
        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active-indicator";
        autoSlideTimeout = setTimeout(showSlides, 10000);
    }

    showSlides();

    autoSlideTimeout = setTimeout(showSlides, 10000);
    window.changeSlide = changeSlide;
    window.currentSlide = currentSlide;
});
