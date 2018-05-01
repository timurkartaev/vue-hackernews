<template>
    <li @click="postClick(link)">
        <slot name="number"></slot>
        <slot name="title"></slot>
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