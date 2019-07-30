import React from 'react';
import { observer, inject } from 'mobx-react'
import './sidenav.css'
import { Link } from 'react-router-dom'
import Rippable from 'react-ripples'

const Category = ({ item }) => {
    const [showChildren, setShowChildren] = React.useState(false);
    let rotate = {    }
    let height = { }
    if (showChildren){
        height = {
            maxHeight: '450px' 
        }
        rotate = {
            transform: 'rotate(90deg)'
        }
    }

    return <React.Fragment>
        <div className="link">
            <Link to={`/categories/${item._id}`}>
                {item.title}
            </Link>
            <Rippable onClick={() => {
                setShowChildren(!showChildren);
            }}>
                <i className="fas fa-sort-down" style={{
                    textAlign: 'center',
                    height: 20,
                    width: 20,
                    display: 'block',
                    lineHeight: '20px',
                    ...rotate,
                }}></i>
            </Rippable>

        </div>
        <ul className="sub-categories" style={{ ...height  }}>
            {(item.children || []).map(item => <li key={item._id}>
                <Link>
                    {item.title}
                </Link>

            </li>)}
        </ul>
    </React.Fragment>
}

@inject('Sidenav') @observer
class Sidenav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Sidenav.setCategories();
    }

    render() {

        return <sidebar>
            <h4>دسته بندی ها</h4>
            <ul className="categories">
                {this.props.Sidenav.categories.map(item => <li key={item._id}>
                    <Category item={item} />
                </li>)}
            </ul>
        </sidebar>
    }
}

export default Sidenav;