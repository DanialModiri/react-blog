import React from 'react';
import { inject, observer } from 'mobx-react'
import './Articles.css'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Loading from '../components/Loading';
import Paginate from 'react-paginate'
import FilterItem from '../components/FilterItem';

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

const SortCard = ({ sorts, onChange, currentSort }) => {

    return <div className="card" style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1, display: 'flex' }}>
            <span style={{ marginLeft: 8 }}>مرتب سازی</span>
            {sorts.map(item => <button
                key={item.value}
                style={{ backgroundColor: currentSort === item.value ? 'blue' : '#4285f4' }}
                onClick={() => onChange(item.value)} className="sort-chip">{item.label}</button>)}
        </div>
    </div>
}

const SearchCard = ({ search, category, clearSearch, clearCategory }) => {

    if (search || category)
        return <div className="articles-search">
            {search && <div>
                {search}
                <span className="fa fa-times" onClick={() => {
                    clearSearch();
                }} />
            </div>}
            {category && <div>
                {category.title}
                <span className="fa fa-times" onClick={() => {
                    clearCategory();
                }} />
            </div>}
        </div>
    else
        return null;
}

const Article = ({ _id, title, body, image, views, date }) => {
    date = new Date(date);
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
            <div style={{ display: 'flex' }}>
                <span style={{ fontSize: 12, color: '#767c8c', flexGrow: 1 }}>
                    تعداد بازدید {views}
                </span>
                <span style={{ fontSize: 12, color: '#767c8c', marginLeft: 16 }}>
                    تاریخ
                    {' '}
                    {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}
                </span>
            </div>

        </div>
        <img style={imageStyle} src={`${image}`} alt={title} />
    </div>
}

const renderArticles = (articles) => {

    return articles.map(article => <Article key={article._id} {...article} />)
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

        const ArticlesPage = parseInt(Articles.query.page);
        const ArticlesSize = parseInt(Articles.size);
        console.log('CURRENT PAGE', typeof ArticlesPage)
        console.log('Size', ArticlesSize)

        return <div className="articles">
            <SearchCard
                category={Articles.query.category}
                clearCategory={() => {
                    Articles.clear('category');
                }}
                clearSearch={() => {
                    Articles.clear('search');
                }} search={Articles.query.search} />

            <SortCard currentSort={Articles.query.sort} onChange={(value) => {
                Articles.getArticles({ sort: value, page: 1 });
            }} sorts={sorts} />
            <div className="card">
                <FilterItem onChange={(values) => {
                    Articles.getArticles({ day: values });
                }} title={'روز های هفته'} items={[
                    { label: 'شنبه', value: 1 },
                    { label: 'یکشنبه', value: 2 },
                    { label: 'دوشنبه', value: 3 },
                    { label: 'سه‌شنبه', value: 4 },
                    { label: 'چهارشنبه', value: 5 },
                    { label: 'پنجشنبه', value: 6 },
                    { label: 'جمعه', value: 7 }
                ]} />
            </div>


            <Loading>
                {renderArticles(Articles.articles || [])}
            </Loading>

            <Paginate
                onPageChange={({ selected }) => {
                    Articles.getArticles({ page: selected + 1 });
                }}
                activeClassName={'page-active'}
                containerClassName="pagination"
                pageClassName='pagination-item'
                pageCount={ArticlesSize / 10}
                pageRangeDisplayed={4}
                nextLabel=">"
                previousLabel="<"
                initialPage={ArticlesPage - 1}
                forcePage={ArticlesPage - 1}
                marginPagesDisplayed={4} />
        </div>

    }

    componentWillUnmount() {
        this.props.Articles.clear();
    }
}

export default Articles;