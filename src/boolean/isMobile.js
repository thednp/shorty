const mobileBrands = /iPhone|iPad|iPod|Android/i;
const isMobile = navigator.userAgentData
  ? navigator.userAgentData.brands.some((x) => mobileBrands.test(x.brand))
  : mobileBrands.test(navigator.userAgent);

export default isMobile;
