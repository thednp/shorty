import type { NavigatorUA } from "../interface/navigatorUA.d.ts";

/**
 * A global namespace for `userAgentData` object.
 */
const userAgentData: NavigatorUA["userAgentData"] =
  (navigator as NavigatorUA).userAgentData;
export default userAgentData;
