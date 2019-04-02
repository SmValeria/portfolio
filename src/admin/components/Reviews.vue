<template lang="pug">
    .review
        ReviewEdit
        ReviewList
</template>

<script>
    import ReviewEdit from './ReviewEdit'
    import ReviewList from './ReviewList'
    export default {
        name: "Reviews",
        components: {
            ReviewEdit,
            ReviewList
        }
    }
</script>

<style scoped>

</style>