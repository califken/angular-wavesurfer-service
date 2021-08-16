export interface AngularWavesurferServiceOptions {
    container?: string;
    backgroundColor?: string;
    cursorColor?: string;
    progressColor?: string;
    waveColor?: string;
    backend?: string;
    barGap?: number;
    barHeight?: number;
    barMinHeight?: number;
    barRadius?: number;
    barWidth?: number;
    autoCenter?: boolean;
    hideScrollbar?: boolean;
    height?: number;
    interact?: boolean;
    loopSelection?: boolean;
    mediaControls?: boolean;
    normalize?: boolean;
    partialRender?: boolean;
    removeMediaElementOnDestroy?: boolean;
    scrollParent?: boolean;
    splitChannels?: boolean;
    splitChannelsOptions?: object;
    splitChannelsOptionsoverlay?: boolean;
    splitChannelsOptionsrelativeNormalization?: boolean;
    responsive?: boolean;
    skipLength?: number;
    maxCanvasWidth?: number;
    minPxPerSec?: number;
    pixelRatio?: number;
    fillParent?: boolean;
    cursorWidth?: number;
    audioRate?: number;
  }
  export interface BackendOptions {
    name: string;
    code: string;
  }
  export interface SplitChannelsOptions {
    overlay?: boolean;
    relativeNormalization?: boolean;
  }
