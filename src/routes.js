import Articles from "./pages/Articles";
import SingleArticle from './pages/SingleArticle'

export default [
    { path: '/article/:id', component: SingleArticle },
    { path: '/', component: Articles }
]

