import { State } from '../models';
import { selectHasElements } from './elements';

export const selectDisplayMode = (state: State) => {
    const hasElements = selectHasElements(state);
    if (!hasElements) { return 'none'; }
    return state.displayMode;
}

export const selectHiddenRows = (state: State) => state.hiddenRows;

export const selectHiddenColumns = (state: State) => state.hiddenColumns;

export const selectAreDiffsEnabled = (state: State) => state.enableDiffs;

export const selectRenderHtml = (state: State) => state.renderHtml;

export const selectCollapsingDisabled = (state: State) => state.disableCollapsing;

export const selectSpecificDisabledForCollapsing = (state: State) => state.specificDisabledForCollapsing;