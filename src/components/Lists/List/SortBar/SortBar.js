import React from 'react';
import SortInput from './SortInput';

const SortBar = ({handleSetOrder, sortValue}) => {

    return (
        <form className="form-inline container justify-content-end">
            <div className="form-row mt-3 ">
                <SortInput
                    optionInputs={[{content: 'Descending', val: 'descending'}, {content: 'Ascending', val: 'ascending'}]}
                    label="Order"
                    getOptionValue={handleSetOrder}
                />
            </div>
        </form>
    )
}

export default SortBar
