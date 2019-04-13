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

<style lang="postcss" scoped>
    .admin-btn--block:disabled {
        opacity: 0.8;
        cursor: initial;
    }
</style>