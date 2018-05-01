import PostForm from './PostForm.vue';
import PostList from './PostList.vue';

export const routes = [
    {path: '', component: PostList},
    {path: '/post-form', component: PostForm},
]