import React from 'react';

class Filter extends React.Component {
    render() {
        const{value, onChange}= this.props;

        return (
            <label >
                Search contacts:
                <input
                type="text"
                name="filter"  // Aici este important să fie "filter"
                value={value}
                onChange={onChange}
                />
            </label>
        )    
    }
}

export default Filter;