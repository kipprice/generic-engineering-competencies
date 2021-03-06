import React, { KeyboardEvent, useCallback } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { ListGroupProps } from '..';
import EXPAND_COLLAPSE_ICON from '../../../../../res/down_caret.png';
import EX_ICON from '../../../../../res/ex.png';
import { createHiddenRowsAction } from '../../../../reducers';
import { fontFamilies, isDarkMode } from '../../../../helpers/styles';
import { HeadingWrapper } from '../../../../components';

export type ListGroupHeaderProps = ListGroupProps & {
    onExpandCollapse: () => void;
};

export const ListGroupHeader = ({
    row,
    column,
    onExpandCollapse,
}: ListGroupHeaderProps) => {
    const dispatch = useDispatch();

    const onDelete = useCallback(() => {
        dispatch(createHiddenRowsAction(row, 'HIDE_ROW'));
    }, [dispatch, row]);

    const onKeyDown = (event: KeyboardEvent<any>) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            onExpandCollapse();
            event.preventDefault();
        }
    };

    const collapseIcon = (
        <img
            className='caret'
            alt={`collapse the ${column || row} group`}
            src={EXPAND_COLLAPSE_ICON}
        ></img>
    );

    const exIcon = (
        <img
            className='ex'
            alt={`hide the ${row} group`}
            src={EX_ICON}
            onClick={(e) => {
                onDelete();
                e.stopPropagation();
            }}
        ></img>
    );

    const headerType = column ? 'h3' : 'h2';

    return (
        <StyledColumn
            isDarkMode={isDarkMode}
            f={fontFamilies}
            tabIndex={0}
            className='colName'
            onClick={onExpandCollapse}
            onKeyDown={onKeyDown}
        >
            {collapseIcon}
            <HeadingWrapper
                as={headerType}
                type={column ? 'column' : 'row'}
                mode='list'
                text={column || row}
            >
                {column || row}
            </HeadingWrapper>
            {!column && exIcon}
        </StyledColumn>
    );
};

const StyledColumn = styled.span<{
    f: typeof fontFamilies;
    isDarkMode: boolean;
}>`
    margin: 1rem;
    font-family: ${(p) => p.f.headerFont};
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: -1.2em;

    img {
        width: 1.5em;
        height: 1.5em;
        transform: rotate(180deg);
        transform-origin: 50% 50%;
        filter: ${(p) => (p.isDarkMode ? 'invert(1)' : 'invert(0)')};
    }

    img.ex {
        margin-top: 5px;
    }
`;
