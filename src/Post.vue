<template>
    <li @click="postClick(link)">
        <slot name="number"></slot> <span class="upvote">&#9650;</span>
        <slot name="title"></slot>
        <slot name="details"></slot>
    </li>
</template>


<script>
    export default {
        props: ['link'],
        methods: {
            postClick(link) {
                window.location.href = link;
            }
        }
    }
</script>

<style scoped>
    .details, .link, .number, .upvote { color: #999; }
    .link, .details { font-size: 0.75rem; }
    .title { color: #424242; }

</style>