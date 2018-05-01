<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-unstyled">
                    <app-post v-for="(post, index) in posts" :link="post.link">
                        <template slot="number">
                            {{ index +1 }}
                        </template>
                        <template slot="title">
                            {{ post.title }}
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
                        title: 'Medium tries to prevent people reading deleted articles on the Wayback Machine',
                        points: 151,
                        link: 'https://google.com',
                        author: 'scandox',
                        comments: 76,
                    },

                    {
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