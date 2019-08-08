import React from 'react';
import propTypes from 'prop-types'
import './FilterItem.css'

const FilterItem = ({ title, items, onChange }) => {
    const [showChildren, setShowChildren] = React.useState(false);
    const [selectedItems, setSelectedItems] = React.useState([]);
    let height = {}
    if (showChildren)
        height = {
            height: 100
        }
    else
        height = {
            height: 0
        }
    return <React.Fragment>
        <div className="title"
            onClick={() => {
                setShowChildren(!showChildren);
            }}
            style={{ display: 'flex' }}>
            <h4>{title}</h4>
            <i

                className="fas fa-sort-down" style={{
                    textAlign: 'center',
                    height: 20,
                    width: 20,
                    lineHeight: '20px',
                }}></i>
        </div>

        <span className=""></span>
        <ul className="filter-item" style={height}>
            {items.map((item, index) => <li key={item.value}>
                <span className="label">
                    {item.label}
                </span>
                <input type="checkbox" onChange={(e) => {
                    if (e.target.checked) {
                        const newSelectedItems = selectedItems.concat(item.value);
                        setSelectedItems(newSelectedItems);
                        onChange(newSelectedItems);
                    }
                    else {
                        const newSelectedItems = [...selectedItems]
                        newSelectedItems.splice(index, 1);
                        setSelectedItems(newSelectedItems);
                        onChange(newSelectedItems);
                    }
                }} />
            </li>)}
        </ul>
    </React.Fragment>
}

FilterItem.prototype = {
    title: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({ label: propTypes.string, value: propTypes.string }))
}


export default FilterItem;