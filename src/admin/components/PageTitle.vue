<template lang="pug">
    transition(name="title" mode="out-in")
        header(class="page__title" :key="title") Блок «{{ title }}»
</template>

<script>
    export default {
        name: "PageTitle",
        props: {
            title: String
        },
    }
</script>

<style scoped>
    .title-enter-active, .title-leave-active {
        transition: opacity .4s;
    }
    .title-enter, .title-leave-to {
        opacity: 0;
    }
</style>