<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action=".">
                    <div class="form-group">
                        <label for="#post_title">Title</label>
                        <input v-model="postData.title" name="post_title" type="text" class="form-control" id="post_title">
                    </div>
                    <div class="form-group">
                        <label for="#post_content">Content</label>
                        <textarea v-model="postData.content" class="form-control" name="post_content" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button @click.prevent="submitPost" type="submit" class="btn btn-danger">Submit post</button>
                    <router-link to="/" class="btn btn-link">Cancel</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                postData: {
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            submitPost() {
                console.log(this.postData.title + ' ' + this.postData.content);
                this.postData.title = '';
                this.postData.content = ''
            }
        }
    }
</script>