class Slider {
  constructor(containerSelector, interval) {
    this.container = document.querySelector(containerSelector);
    this.images = this.container.querySelectorAll('.slider_image');
    this.currentImageIndex = 0;
    this.interval = interval;
    this.intervalId = null;
    this.start();
    
    var nextButton = document.getElementById('next_image_button');
    var previousButton = document.getElementById('before_image_button');
    
    nextButton.addEventListener('click', this.nextImage.bind(this));
    previousButton.addEventListener('click', this.previousImage.bind(this));
  }

  start() {
    this.intervalId = setInterval(this.next.bind(this), this.interval);
  }
  
  stop() {
      clearInterval(this.intervalId);
  }

  next() {
    this.images[this.currentImageIndex].style.display = 'none';
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.images[this.currentImageIndex].style.display = 'block';
  }
  
  nextImage() {
    this.stop();
    this.next();
    this.start();
  }
  
  previousImage() {
    this.stop();
    this.images[this.currentImageIndex].style.display = 'none';
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
    this.images[this.currentImageIndex].style.display = 'block';
    this.start();
  }
}

var slider = new Slider('#slider', 7000);
