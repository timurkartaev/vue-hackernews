<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-unstyled">
                    <app-post v-for="(post, index) in posts" :link="post.link" :key="post.id">
                        <template slot="number">
                            <span class="number">{{ index +1 }}.</span>
                        </template>
                        <template slot="title">
                            <a class="title" :href="post.link">{{ post.title }}</a> <span class="link">{{ post.link }}</span>
                        </template>
                        <template slot="details">
                            <p class="details">{{ post.points }} points by {{ post.author }} | {{ post.comments }} comments</p>
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