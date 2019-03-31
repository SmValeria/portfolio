<template lang="pug">
    .nav
        .nav__container.container
            nav.nav__content
                ul.nav__list
                    li(v-for="item in menu"
                    class="nav__item"
                    :class="active === item.value ? 'active' : ''")
                        a.nav__link(href="#") {{item.title}}
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
        }
    }
</script>

<style scoped>

</style>