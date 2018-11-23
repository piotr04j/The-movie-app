import React,{ Component } from 'react';

class SortInput extends Component {

    state = {
        value: 'descending'
    }

    handeValue = (e) => {
        this.setState({ value: e.target.value})
        this.props.getOptionValue(e.target.value)
    }

    render(){
        const {label, optionInputs} = this.props;
        return (
            <div className="col">
                <label className="sr-only"  htmlFor="inlineFormCustomSelectPref--one">{label}</label>
                <select className="custom-select"  id="inlineFormCustomSelectPref--one" onChange={(e) => this.handeValue(e)} value={this.state.value}>
                    {optionInputs.map( optionItem => {
                        return <option key={optionItem.val} value={optionItem.val}>{optionItem.content}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default SortInput;
