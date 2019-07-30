import React from 'react';
import { inject, observer } from 'mobx-react'
import './Articles.css'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Loading from '../components/Loading';

const articleCardStyle = {
    boxShadow: '0 1px 6px 0 rgba(0,0,0,.12), 0 1px 6px 0 rgba(0,0,0,.12)',
    marginTop: '16px',
    padding: '16px',
    display: 'flex',
    direction: 'rtl'
}

const imageStyle = {
    objectFit: 'cover',
    width: 250,
    height: 200,
    display: 'block'
}

const Article = ({ _id, title, body, image, views }) => {
    return <div style={articleCardStyle}>
        <div style={{ flexGrow: 1, overflow: "hidden", width: '80%' }}>
            <Link to={`/article/${_id}`}>
                <h4>
                    {title}
                </h4>
            </Link>
            <span style={{ display: 'block', padding: 8 }}>
                {body.slice(0, 255)}
            </span>

            <span style={{ fontSize: 12, color: '#767c8c' }}>
                تعداد بازدید {views}
            </span>
        </div>
        <img style={imageStyle} src={`${image}`} alt={title} />
    </div>
}

const sorts = [
    { label: 'تاریخ ثبت', value: 'date' },
    { label: 'تعداد بازدید', value: 'views' },
    { label: 'تعداد نظرات', value: 'comments' }
]

@inject('Articles') @observer
class Articles extends React.Component {


    componentDidMount() {
        this.props.Articles.getArticles();
    }

    fetchNew = (options) => {
        this.props.Articles.getArticles(options);
    }

    render() {

        const { Articles } = this.props;

        const ArticlesPage = parseInt(Articles.page);
        console.log('PAGE', ArticlesPage)
        return <div className="articles">

            <div className="card" style={{ display: 'flex' }}>
                <div style={{ flexGrow: 1, display: 'flex' }}>
                    <span style={{ marginLeft: 8 }}>مرتب سازی</span>
                    {sorts.map(item => <button
                        key={item.value}
                        style={{ backgroundColor: this.props.Articles.sort === item.value ? 'blue' : '#4285f4' }}
                        onClick={() => this.fetchNew({ sort: item.value, page: 1 })} className="sort-chip">{item.label}</button>)}
                </div>
            </div>
            <Loading>
                {(this.props.Articles.articles || []).map(item => <Article {...item} />)}
            </Loading>


            <ul className="pagination">
                {_.range(ArticlesPage, ArticlesPage + 4).map(page => <li
                    onClick={() => this.fetchNew({ page })}
                    style={{ backgroundColor: page === ArticlesPage ? 'red' : 'darkred' }} key={page}>{page}</li>)}
            </ul>
        </div>

    }

    componentWillUnmount() {
        this.props.Articles.clear();
    }
}

export default Articles;