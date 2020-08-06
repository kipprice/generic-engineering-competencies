import React from 'react';
import cx from 'classnames';
import { Competency, State } from '../../models'
import { useSelector } from 'react-redux';
import { selectSimilarValues } from '../../selectors/similarities';

export type CompetencyViewProps = {
    competency: Competency;
    className?: string;
};

export const CompetencyView: React.FC<CompetencyViewProps> = ({ competency, className }) => {

    const similarities = useSelector((state: State) => selectSimilarValues(state, competency.id));

    // only do this for one similarity for now
    // TODO: handle multiple similarities
    if (similarities.length >= 1) {
        const { splitBy, differences } = similarities[0]
        const split = competency.name.split(splitBy);
        return (
            <div className={cx('name', className)}>
                {split.map((chunk, idx) => {
                    const diff = differences[idx];

                    return (
                        <span className={diff === 'ø' ? '' : 'diff'}>
                            {chunk + (splitBy === '' ? '' : ' ' )}
                        </span>
                    )
                })}
            </div>
        )
    } else {
        return(
            <div className={cx('name', className)}>
                {competency.name}
            </div>
        );
    }
    
    
};