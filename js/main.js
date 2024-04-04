
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Function to fetch image information from JSON file
async function fetchImageInfo() {
  try {
    const response = await fetch('image_info.json');
    const data = await response.json();
    const reversedData = data.reverse()
    return reversedData;
  } catch (error) {
    console.error('Error fetching image information:', error);
    return [];
  }
}

// Function to dynamically load images and corresponding information
async function loadGallery() {
  const gallery = document.getElementById('gallery');
  const imageInfo = await fetchImageInfo();

  imageInfo.forEach(item => {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const img = document.createElement('img');
    img.src = 'images/' + item.filename;
    img.alt = item.title;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('image-info');
    const title = document.createElement('h3');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description;

    infoDiv.appendChild(title);
    infoDiv.appendChild(description);

    imageDiv.appendChild(img);
    imageDiv.appendChild(infoDiv);

    img.addEventListener('click', () => {
      expandImage(img.src, item.title, item.description);
    });

    gallery.appendChild(imageDiv);
  });
}

// Function to expand image in lightbox
function expandImage(src, title, description) {
  const lightbox = document.getElementById('lightbox');
  const expandedImage = document.getElementById('expanded-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');

  expandedImage.src = src;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = description;
  lightbox.style.display = 'block';
}


const images = document.querySelectorAll('.image img')
const lightbox = document.getElementById('lightbox')
const expandedImage = document.getElementById('expanded-image')
const closeBtn = document.getElementById('close-btn')

images.forEach((image) => {
  image.addEventListener('click', () => {
    expandedImage.src = image.src
    lightbox.style.display = 'block'
    document.body.style.overflow = 'hidden' // Disable scrolling
  })
})

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none'
  document.body.style.overflow = 'auto' // Enable scrolling
})

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none'
    document.body.style.overflow = 'auto' // Enable scrolling
  }
})

// Call the function to load the gallery when the page loads
window.onload = loadGallery;














