declare module '*.mp4' {
    const src: string;
    export default src;
  }

  interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;

    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;

    onClick(): () => void;
}