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
                let data = {
                    orderBy: '$key',
                    equalTo: this.user.email
                }
                console.log('Email ' + this.user.email);
                this.$http.get('https://vuejs-http-3fb13.firebaseio.com/users.json', {
                    params: data,
                    emulateHTTP: true})
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    })
            }
        }
    }
</script>