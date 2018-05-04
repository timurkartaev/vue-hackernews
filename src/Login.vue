<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action=".">
                    <div class="form-group">
                        <label for="#emailUser">Email address</label>
                        <input v-model="user.email" type="email" class="form-control" id="emailUser" placeholder="Enter your email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone</small>
                    </div>

                    <div class="form-group">
                        <label for="#passwordUser">Password</label>
                        <input placeholder="Enter your password" v-model="user.password" type="password" class="form-control" id="passwordUser" name="password">
                    </div>

                    <button class="btn btn-danger" @click.prevent="logUserIn">Log in</button>
                    <router-link to="" class="btn btn-link">Cancel</router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {  
                    email: '',
                    password:''
                }
            }
        },
        methods: {
            logUserIn() {
                this.$http.post('https://firestore.googleapis.com/v1beta1/projects/vuejs-http-3fb13/databases/(default)/documents/users/', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    })
            }
        }
    }
</script>