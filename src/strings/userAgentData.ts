import type { NavigatorUA } from "../interface/navigatorUA";

// const uaDATA = (navigator as NavigatorUA).userAgentData;

/**
 * A global namespace for `userAgentData` object.
 */
const userAgentData: NavigatorUA["userAgentData"] =
  (navigator as NavigatorUA).userAgentData;
export default userAgentData;
