document.addEventListener('DOMContentLoaded', function() {
    const minervaImages = document.getElementById('minerva-images');
    const glowlibImages = document.getElementById('glowlib-images');

    // Fetch images from JSON file
    fetch('minerva-images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(imageUrl => {
                const extension = imageUrl.split('.').pop().toLowerCase();
                const supportedExtensions = ['jpg', 'jpeg', 'png', 'tga'];

                // Check if the image URL has a valid extension
                if (supportedExtensions.includes(extension)) {
                    // Create an image element
                    const img = document.createElement('img');
                    console.log("Creating IMG : ", imageUrl);
                    img.src = imageUrl;
                    img.classList.add('clickable'); // Add your custom class if needed

                    // Check if the image URL is valid
                    img.onerror = function() {
                        // Handle the case where the image failed to load
                        console.error(`Failed to load image: ${imageUrl}`);
                        img.style.display = 'none'; // Hide the image if it fails to load
                    };

                    // Create a list item and append the image
                    const li = document.createElement('li');
                    li.appendChild(img);

                    // Append the list item to the minervaImages ul
                    minervaImages.appendChild(li);
                } else {
                    console.warn(`Unsupported file format: ${extension}. Skipping image: ${imageUrl}`);
                }
            });

            // Attach lightbox functionality after images are added
            attachLightboxEventListeners();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });

    fetch('glowlib-images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(imageUrl => {
                const extension = imageUrl.split('.').pop().toLowerCase();
                const supportedExtensions = ['jpg', 'jpeg', 'png', 'tga'];

                // Check if the image URL has a valid extension
                if (supportedExtensions.includes(extension)) {
                    // Create an image element
                    const img = document.createElement('img');
                    console.log("Creating IMG : ", imageUrl);
                    img.src = imageUrl;
                    img.classList.add('clickable'); // Add your custom class if needed

                    // Check if the image URL is valid
                    img.onerror = function() {
                        // Handle the case where the image failed to load
                        console.error(`Failed to load image: ${imageUrl}`);
                        img.style.display = 'none'; // Hide the image if it fails to load
                    };

                    // Create a list item and append the image
                    const li = document.createElement('li');
                    li.appendChild(img);

                    // Append the list item to the glowlibImages ul
                    glowlibImages.appendChild(li);
                } else {
                    console.warn(`Unsupported file format: ${extension}. Skipping image: ${imageUrl}`);
                }
            });

            // Attach lightbox functionality after images are added
            attachLightboxEventListeners();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
});

function attachLightboxEventListeners() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.getElementById('close-lightbox');
    const clickableImages = document.querySelectorAll('.clickable');

    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            lightboxImage.src = image.src;
            lightbox.classList.remove('hidden');
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.classList.add('hidden');
        lightboxImage.src = ""; // Clear the src attribute
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.add('hidden');
            lightboxImage.src = ""; // Clear the src attribute
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
    const body = document.body;

    // Check local storage for dark mode preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode when checkbox changes
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
