<template lang="pug">
    button(
    type="button"
    ).admin-btn--block
        span.add-btn__circle
        slot
</template>

<script>
    export default {
        name: "AddItem"
    }
</script>

<style scoped>

</style>