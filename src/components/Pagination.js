import React from 'react'

const range = (from, to) => {
    return [...Array(to).keys()].map(item => item + from);
}

const PAGE_LENGTH = 5;

function Pagination({ max, }) {

    return <div>
        {max <= PAGE_LENGTH && range(1, max).map(item => <div>{item}</div>)}
    </div>
}

export default Pagination;