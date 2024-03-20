# Cerulean Sea Navigation

Cerulean Sea Navigation is a lightweight, dependency-free library designed to enhance your website's scrolling and animation experiences. Leveraging the popular `smooth-scroll` and `aos` libraries, it offers an easy-to-use interface for smooth scrolling and on-scroll animations with minimal setup.

## Features

- Smooth scrolling to anchor links with customizable speed.
- On-scroll animations with AOS (Animate On Scroll) for any element, configurable with options such as duration and once-only animations.

## Installation

You can install cerulean-sea-navigation via npm:

```bash
npm install cerulean-sea-navigation
```

Or, if you prefer, yarn:

```bash
yarn add cerulean-sea-navigation
```

## Usage

First, import `cerulean-sea-navigation` in your JavaScript module:

```javascript
import CeruleanSeaNavigation from 'cerulean-sea-navigation';
```

Then, initialize it:

```javascript
new CeruleanSeaNavigation();
```

This sets up both the smooth scroll and AOS functionalities with default settings.

### Advanced Configuration

`CeruleanSeaNavigation` works out of the box with sensible defaults, but both smooth scrolling and AOS can be customized further if needed.

#### Smooth Scroll

To adjust smooth scroll settings, modify the `initSmoothScroll` method in `CeruleanSeaNavigation`:

```javascript
initSmoothScroll() {
new SmoothScroll('a[href*="#"]', {
speed: 500, // Adjust scrolling speed (in ms)
speedAsDuration: true // Use speed as duration rather than a velocity
});
}
```

#### AOS

Similarly, to customize AOS settings, adjust the `initAOS` method:

```javascript
initAOS() {
AOS.init({
duration: 1000, // Control animation duration
once: false, // Repeat animations on scroll
});
}
```

## Contributing

We welcome contributions to cerulean-sea-navigation! Whether it's bug reports, feature requests, or contributions to the code, please feel free to reach out or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
