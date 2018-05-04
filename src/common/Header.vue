<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-danger">
        <div class="container">
                
            <router-link class="navbar-brand" to="/">Vue Hacker news</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarText" class="collapse navbar-collapse justify-content-stretch">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/post-form">submit</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <template v-if="!isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/log-in">login</router-link>
                    </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">{{ login }}</router-link>
                        </li>
                    </template>
                </ul>
                
            </div>
        </div>
        
    </nav>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        data() {
            return {
                isLoggedIn: false,
                login: ''
            }
        },
        created() {
            eventBus.$on('userSuccessAuth', (user) => {
                console.log('event called');
                this.login = user.username;
                this.isLoggedIn = true;
            });
        }
    }
</script>

<style></style>