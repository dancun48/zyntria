function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += "responsive";
    } else {
        x.className = "navbar";
    }
}
/*
const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    let index = 0;

    function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    // Auto slide every 4 seconds
   // setInterval(() => nextSlide(), 1000);

*/