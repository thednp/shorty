export default function(element) {
  let bcr = element.getBoundingClientRect(), 
      viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
}