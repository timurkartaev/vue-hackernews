<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-unstyled">
                    <app-post v-for="(post, index) in posts" :key="index">
                        <template slot="post">
                            <div class="d-flex mb-2">
                                <div class="p-2">
                                    <span class="number">{{ index +1 }}.</span>
                                </div>
                                
                                <div class="p-2">
                                    <a class="title" :href="post.url">
                                        {{ post.title }} <span class="link">({{ post.url }})</span>
                                    </a> 
                                    <p class="details">{{ post.points }} points by {{ post.author }} | {{ post.num_comments }} comments</p></span></div>
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
                posts: []
            }
        },
        methods: {
        },
        components: {
            appPost: Post
        },
        created() {
            this.$http.get('https://hn.algolia.com/api/v1/search',
                          {'tags': 'story',
                           'hitsPerPage': 50})
                      .then(response => {
                        return response.json();
                      }, error => {

                      })
                      .then(json_data => {
                          for( let item in json_data['hits']) {
                            if ( json_data['hits'][item]['title']) {
                                this.posts.push(json_data['hits'][item]);
                            }
                          }
                      });
        }
    }
</script>