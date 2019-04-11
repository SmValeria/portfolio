<template lang="pug">
    .nav
        .nav__container.container
            nav.nav__content
                ul.nav__list
                    router-link(v-for="item in menu"
                    tag="li"
                    class="nav__item"
                    :to="item.value"
                    :key="item.id"
                    exact-active-class="active")
                        a.nav__link(href="#") {{ item.title }}
</template>

<script>
    export default {
        name: "Nav",
        props: {
            active: String,
            menu: Array
        },
        data() {
            return {
            }
        },
        watch: {

        }
    }
</script>

<style scoped>

</style>