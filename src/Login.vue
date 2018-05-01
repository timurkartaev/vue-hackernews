<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action=".">
                    <div class="form-group">
                        <label for="#emailUser">Email address</label>
                        <input type="email" class="form-control" id="emailUser" placeholder="Enter your email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone</small>
                    </div>

                    <div class="form-group">
                        <label for="#passwordUser">Password</label>
                        <input type="password" class="form-control" id="passwordUser" name="password">
                    </div>

                    <button class="btn btn-danger" @click.prevent="logUserIn">Log in</button>
                    <rounter-link to="" class="btn btn-link">Cancel</rounter-link>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script></script>