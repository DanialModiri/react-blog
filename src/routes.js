import Articles from "./pages/Articles";
import SingleArticle from './pages/SingleArticle'
import Profile from "./pages/Profile";
import UsersProfile from './pages/UsersProfile'
import Login from "./pages/Login";

export default [
    { path: '/login', component: Login },
    { path: '/profile/:id', component: UsersProfile },
    { path: '/profile', component: Profile },
    { path: '/article/:id', component: SingleArticle },
    { path: '/', component: Articles }
]

