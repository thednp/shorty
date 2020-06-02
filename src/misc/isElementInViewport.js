// check if element is in viewport
export function isElementInViewport(element) { 
  var bcr = element.getBoundingClientRect();
  return (
    bcr.top >= 0 &&
    bcr.left >= 0 &&
    bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}