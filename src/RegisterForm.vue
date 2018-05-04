<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action=".">
                    <div class="form-group">
                        <label for="#userEmail">Username</label>
                        <input
                            v-model="user.username"
                            type="text"
                            class="form-control"
                            id="userEmail"
                            placeholder="Enter your username">

                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="#userName">Your name</label>
                        <input
                            placeholder="Enter your name"
                            id="userName"
                            class="form-control"
                            v-model="user.name"
                            type="text">
                    </div>

                    <div class="form-group">
                        <label for="#passwordUser">Password</label>
                        <input
                            placeholder="Enter your password"
                            v-model="user.password"
                            type="password"
                            class="form-control"
                            id="passwordUser"
                            name="password">
                    </div>

                    <button class="btn btn-danger" @click.prevent="registerUser">Register</button>
                    <router-link to="" class="btn btn-link">Cancel</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from './main';

    export default {
        data() {
            return {
                user: {
                    name: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            registerUser() {
                this.$http.patch(
                        'https://vuejs-http-3fb13.firebaseio.com/users.json',
                        {
                            [this.user.username] : {
                                'name': this.user.name,
                                'password': this.user.password
                            }
                        })
                    .then(response => {
                        return response.json();
                    }, error => {
                        console.log(error);
                    })
                    .then(data => {
                        localStorage.setItem('user_data', this.user);
                        
                        console.log('should trigger event bus');
                        eventBus.$emit('userSuccessAuth', this.user);
                    });
            }
        }
    }
</script>