<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-unstyled">
                    <app-post v-for="(post, index) in posts" :link="post.link" :key="post.id">
                        <template slot="post">
                            <div class="d-flex mb-2">
                                <div class="p-2">
                                    <span class="number">{{ index +1 }}. &#9650;</span>
                                </div>
                                
                                <div class="p-2">
                                    <a class="title" :href="post.link">
                                        {{ post.title }} <span class="link">{{ post.link }}</span>
                                    </a> 
                                    <p class="details">{{ post.points }} points by {{ post.author }} | {{ post.comments }} comments</p></span></div>
                            </div>
                        </template>
                    </app-post>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue';

    export default {
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'Medium tries to prevent people reading deleted articles on the Wayback Machine',
                        points: 151,
                        link: 'https://google.com',
                        author: 'scandox',
                        comments: 76,
                    },

                    {
                        id: 2,
                        title: 'You know how HTTP GET requests are meant to be idempotent?',
                        points: 151,
                        link: 'https://google.com',
                        author: 'scandox',
                        comments: 76
                    }

                ]
            }
        },
        components: {
            appPost: Post
        }
    }
</script>