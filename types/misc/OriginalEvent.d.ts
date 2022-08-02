import OriginalEvent from '../interface/originalEvent';
declare const OriginalEvent: <T>(EventType: string, config?: CustomEventInit<T>) => OriginalEvent<T>;
export default OriginalEvent;
