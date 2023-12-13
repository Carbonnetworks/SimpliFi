
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // List of local image paths
    const imagePaths = [
        "Background\image1.jpg",
        "Background\image2.jpg",
        "Background\image3.jpg",
        "Background\image4.jpg",
        "Background\wp1813217.jpg",
        "Background\image6.jpg",
        "Background\image7.jpg",
        "Background\image8.jpg",
        "Background\wp2599617.jpg",
        // Add more image paths as needed
    ];

    // Get a random index to select a random image
    const randomIndex = Math.floor(Math.random() * imagePaths.length);

    // Set the background image of the div
    const backgroundImageDiv = document.getElementById("background-image");
    backgroundImageDiv.style.backgroundImage = `url(${imagePaths[randomIndex]})`;
});
  