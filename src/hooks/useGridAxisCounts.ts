import {
  GRID_CARD_HEIGHT,
  GRID_CARD_WIDTH,
  GRID_MX,
  GRID_MY,
  LAYOUT_GRID_BASE,
  MAX_GRID_COLUMNS,
  MIN_GRID_WIDTH,
} from 'config/sizes';

export type UseGridAxisCountsProps = {
  cardHeight?: number;
  cardWidth?: number;
  containerWidth: number;
  itemCount: number;
  maxColumns?: number;
  minWidth?: number;
  mx?: number;
  my?: number;
};

export type UseGridAxisCountsResponse = {
  columnCount: number;
  columnWidth: number;
  gridWidth: number;
  rowCount: number;
  rowHeight: number;
};

export const useGridAxisCounts = ({
  cardHeight = GRID_CARD_HEIGHT,
  cardWidth = GRID_CARD_WIDTH,
  containerWidth,
  itemCount,
  maxColumns = MAX_GRID_COLUMNS,
  minWidth = MIN_GRID_WIDTH,
  mx = GRID_MX,
  my = GRID_MY,
}: UseGridAxisCountsProps): UseGridAxisCountsResponse => {
  const columnWidth = cardWidth + mx * LAYOUT_GRID_BASE * 2;
  const rowHeight = cardHeight + my * LAYOUT_GRID_BASE * 2;

  // subtract 1px because if prevents scrollbars
  const gridWidth = Math.max(columnWidth, containerWidth, cardWidth, minWidth) - 1;

  const columnCount = Math.max(Math.min(Math.floor(gridWidth / columnWidth), maxColumns), 1);
  const rowCount = Math.ceil(itemCount / columnCount);

  return {
    columnCount,
    columnWidth,
    gridWidth,
    rowCount,
    rowHeight,
  };
};
