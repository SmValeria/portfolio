<template lang="pug">
    .work
        WorkEdit
        WorkList
</template>

<script>
    import WorkEdit from '../WorkEdit'
    import WorkList from '../WorkList'
    export default {
        name: "Works",
        components: {
            WorkEdit,
            WorkList
        }
    }
</script>

<style scoped>

</style>