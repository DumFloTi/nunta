/*
document.addEventListener("DOMContentLoaded", function() {    
    const folder = '../Images'; // Adjust the folder path as per your directory structure
    const arr = [];
    for (let i = 1; i <= 844; i++) {
        arr.push(`D & M  Jpeg  (${i}).jpg`);
    }

    const imgCntr = document.getElementById('imageGrid');
    arr.forEach(image => {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add('col-md-3', 'image-item');
        const img = document.createElement("img");
        img.onload = function() {
            imgDiv.appendChild(img);
            imgCntr.appendChild(imgDiv);
        };
        img.src = `${folder}/${image}`;

        // Add click event listener to each image
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents event from bubbling up to document
            // Toggle inline expansion of clicked image
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                // Reset opacity for all images
                document.querySelectorAll('.image-item img').forEach(function(image) {
                    image.style.opacity = 1;
                });
            } else {
                // Remove 'expanded' class from all images
                document.querySelectorAll('.image-item img').forEach(function(image) {
                    if (image !== img) {
                        image.style.opacity = 0.1; // Adjust opacity level as needed
                    }
                });
                // Add 'expanded' class to clicked image
                img.classList.add('expanded');
                // Set full opacity for clicked image
                img.style.opacity = 1;
                
                // Focus on the expanded image
                img.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
        });
    });

    // Add click event listener to document to handle clicks outside of expanded images
    document.addEventListener('click', function(event) {
        // Remove 'expanded' class from all images
        document.querySelectorAll('.image-item img').forEach(function(image) {
            image.classList.remove('expanded');
            image.style.opacity = 1;
        });
    });
});
*/
/*
document.addEventListener("DOMContentLoaded", function() {    
    const imgCntr = document.querySelector('.imageGrid'); // Corrected selector
    const images = document.querySelectorAll('.image-item img'); // Select all images inside .image-item

    images.forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation();

            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                images.forEach(image => {
                    image.style.opacity = 1;
                });
            } else {
                images.forEach(image => {
                    if (image !== img) {
                        image.style.opacity = 0.1;
                    }
                });
                img.classList.add('expanded');
                img.style.opacity = 1;

                img.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
        });
    });

    document.addEventListener('click', function(event) {
        images.forEach(image => {
            image.classList.remove('expanded');
            image.style.opacity = 1;
        });
    });
});
*/