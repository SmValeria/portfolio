<template lang="pug">
    header(class="page__title") Блок «{{ title }}»
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

</style>