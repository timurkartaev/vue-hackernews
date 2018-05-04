<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action=".">
                    <div class="form-group">
                        <label for="#userEmail">Email address</label>
                        <input v-model="user.email" type="email" class="form-control" id="userEmail" placeholder="Enter your email">
                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="#userName">Your name</label>
                        <input placeholder="Enter your name" id="userName" class="form-control" v-model="user.name" type="text">
                    </div>

                    <div class="form-group">
                        <label for="#passwordUser">Password</label>
                        <input placeholder="Enter your password" v-model="user.password" type="password" class="form-control" id="passwordUser" name="password">
                    </div>

                    <button class="btn btn-danger" @click.prevent="registerUser">Register</button>
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
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            registerUser() {
                const email = this.user.email;
                const userObject = { [this.user.email]: {
                    name: this.user.name,
                    password: this.user.password
                }};
                console.log(userObject);

                this.$http.put(
                        'https://vuejs-http-3fb13.firebaseio.com/rest/saving-data/fireblog/users.json',
                        {[this.email]: {'name': this.name}})
                    .then(response => {
                        console.log(response)
                    }, error => {
                        console.log(error);
                    })
            }
        }
    }
</script>