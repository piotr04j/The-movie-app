import React from 'react';
import SortInput from './SortInput';

const SortBar = ({getOptionValue, sorting}) => {

    let optionSorting = sorting === 'descending' 
            ? [{content: 'Descending', val: 'descending'}, {content: 'Ascending', val: 'ascending'}] 
            : [{content: 'Ascending', val: 'ascending'}, {content: 'Descending', val: 'descending'}] ;


    return (
        <form className="form-inline container justify-content-end">
            <div className="form-row mt-3 ">
                <SortInput
                    optionInputs={[{content: 'Movies', val: 'movie'}, {content: 'TV Shows', val: 'tv'}]}
                    label="Check"
                    getOptionValue={getOptionValue}
                />
                <SortInput 
                    optionInputs={[{content: 'Top rated', val: 'vote_average'}, {content: 'Popular', val: 'popularity'}]}
                    label="Sort by"
                    getOptionValue={getOptionValue}
                />
                <SortInput
                    optionInputs={optionSorting}
                    label="Order"
                    getOptionValue={getOptionValue}
                />
            </div>
        </form>
    )
}

export default SortBar