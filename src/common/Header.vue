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
                    <li class="nav-item">
                        <router-link class="nav-link" to="/log-in">login</router-link>
                    </li>
                </ul>
                
            </div>
        </div>
        
    </nav>
</template>

<script></script>

<style></style>