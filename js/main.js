// Gets the modal
var imageModal = document.getElementById("image-modal");

// Gets the image and insert it inside the modal
var img = document.querySelectorAll(".work-image, .resume-image, .town-image");
var modalImg = document.getElementById("img01");

// Loop through all images and add click event listener
img.forEach(function(image) {
    image.onclick = function() {
        imageModal.style.display = "block";
        modalImg.src = this.src;
    }
});
  
// Close the modal when the user clicks on <span> (x) or outside the modal content
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    imageModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}
