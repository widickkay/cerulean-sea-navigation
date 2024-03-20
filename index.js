import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

class CeruleanSeaNavigation {
  constructor() {
    this.initSmoothScroll();
    this.initAOS();
  }

  initSmoothScroll() {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true
    });
  }

  initAOS() {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }

  // Additional methods to dynamically add navigation elements or apply styles could be added here
}

export default CeruleanSeaNavigation;
