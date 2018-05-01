<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul>
                    <app-post v-for="post in posts" :title="title"></app-post>
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
                        author: 'scandox',
                        comments: 76,
                    },

                    {
                        title: 'You know how HTTP GET requests are meant to be idempotent?',
                        points: 151,
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