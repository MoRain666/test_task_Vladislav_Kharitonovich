import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// scroll view markup
export const ITEM_WIDTH = 120;
export const EDGE = (width - ITEM_WIDTH) / 2;
export const FEATHER_CONTAINER_VALUE_HEIGHT = 85;
export const FADING_EDGE_LEFT_START = {x: 0, y: 0};
export const FADING_EDGE_LEFT_END = {x: 0.5, y: 0};
export const FADING_EDGE_RIGHT_START = {x: 1, y: 0};
export const FADING_EDGE_RIGHT_END = {x: 0.5, y: 0};
export const FADING_EDGE_BOTTOM_START = {x: 0, y: 1};
export const FADING_EDGE_BOTTOM_END = {x: 0, y: 0.6};
export const FADING_EDGE_TOP_START = {x: 0, y: 0};
export const FADING_EDGE_TOP_END = {x: 0, y: 0.5};

// scroll view functionality
export const DECELERATION_RATE = 15;
export const NUMBER_SCROLLING_SPEED = 50;


export const FONT_SIZE_MULTIPLIER = 7;
export const MAX_VALUE_LENGTH = 10;
export const DEFAULT_FONT_SIZE_EDGE_LENGTH = 3;
export const DEFAULT_FONT_SIZE = 56;