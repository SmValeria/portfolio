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
        data() {
            return {
                menu: [
                    {
                        value: '/',
                        title: 'Обо мне'
                    },
                    {
                        value: '/works',
                        title: 'Работы'
                    },
                    {
                        value: '/reviews',
                        title: 'Отзывы'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>