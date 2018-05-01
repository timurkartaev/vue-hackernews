import PostForm from './PostForm.vue';
import PostList from './PostList.vue';
import Login from './Login.vue';

export const routes = [
    {path: '', component: PostList},
    {path: '/log-in', component: Login},
    {path: '/post-form', component: PostForm},
]