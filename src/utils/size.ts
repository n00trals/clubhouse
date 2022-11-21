import {
  ALERT_DEFAULT_SIZE,
  ALERT_MINIMUM_SIZE,
  PAPER_TOP_OFFSET,
  PAPER_SIDE_OFFSET,
  SMALL_PAPER_TOP_OFFSET,
  SMALL_PAPER_SIDE_OFFSET,
} from 'config/sizes';
import { viewports } from 'config/viewports';

export const showMobileLayout = (width = 0): boolean => width <= viewports.small.max;
export const showDesktopLayout = (width = 0): boolean => width >= viewports.medium.min;

export const getPaperTopOffset = (width = 0): number =>
  width <= viewports.small.max ? SMALL_PAPER_TOP_OFFSET : PAPER_TOP_OFFSET;

export const getPaperSideOffset = (width = 0): number =>
  width <= viewports.small.max ? SMALL_PAPER_SIDE_OFFSET : PAPER_SIDE_OFFSET;

export const getAlertSize = (width?: number): number =>
  Math.max(ALERT_MINIMUM_SIZE, width ? Math.min(width * 0.8, ALERT_DEFAULT_SIZE) : ALERT_DEFAULT_SIZE);
