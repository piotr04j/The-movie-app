import React from 'react';

const SortInput = ({label, optionInputs, getOptionValue}) => {

    return (
            <div className="col">
                <label className="sr-only"  htmlFor="inlineFormCustomSelectPref--one">{label}</label>
                <select className="custom-select"  id="inlineFormCustomSelectPref--one" onChange={(e) => getOptionValue(label,e.target.value)}>
                    {optionInputs.map( optionItem => {
                        return <option key={optionItem.val} value={optionItem.val}>{optionItem.content}</option>
                    })}
                </select>
            </div>
    )
}

export default SortInput;
