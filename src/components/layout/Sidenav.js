import React from 'react';
import { observer, inject } from 'mobx-react'
import './sidenav.css'
import { withRouter } from 'react-router-dom'
import Rippable from 'react-ripples'
import Articles from '../../stores/articles'

const Category = ({ item, push }) => {
    const [showChildren, setShowChildren] = React.useState(false);
    let rotate = {}
    let height = {}
    if (showChildren) {
        height = {
            maxHeight: '450px'
        }
        rotate = {
            transform: 'rotate(90deg)'
        }
    }

    const selectCategory = (item) => {
        Articles.getArticles({ category: item });
        push('/');
    }

    return <React.Fragment>
        <div className="link">
            <span className="link" onClick={()=>{
                selectCategory({ _id: item._id, title: item.title });
            }}>
                {item.title}
            </span>
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
        <ul className="sub-categories" style={{ ...height }}>
            {(item.children || []).map(item => <li key={item._id}>
                <span className="link" onClick={() => selectCategory({ _id: item._id, title: item.title })}>
                    {item.title}
                </span>

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
                    <Category push={this.props.history.push} item={item} />
                </li>)}
            </ul>
        </sidebar>
    }
}

export default withRouter(Sidenav);