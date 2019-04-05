<template lang="pug">
    .admin
        .admin__content
            Header
            Nav(
            :active="activeTab"
            :menu="menu")
            .page
                .page__container.container
                    PageTitle(
                    :title="activeTabTitle"
                    )
                    .page__maincontent
                        About
                        Works
                        Reviews
        Auth
</template>
<script>
    import Auth from './components/Auth'
    import Header from './components/Header'
    import Nav from './components/Nav'
    import PageTitle from './components/PageTitle'
    import About from './components/About'
    import Works from './components/Works'
    import Reviews from './components/Reviews'

    export default {
        data() {
            return {
                activeTab: 'about',
                activeTabTitle: 'Обо мне',
                menu: [
                    {
                        value: 'about',
                        title: 'Обо мне'
                    },
                    {
                        value: 'works',
                        title: 'Работы'
                    },
                    {
                        value: 'reviews',
                        title: 'Отзывы'
                    }
                ]
            }
        },
        components: {
            Auth,
            Header,
            Nav,
            PageTitle,
            About,
            Works,
            Reviews
        }
    }
</script>

<style lang="postcss">
    @import 'normalize.css';
    @import '../styles/mixins.pcss';
    @import '../styles/layout/base.pcss';
    @import '../styles/layout/font.pcss';
    @import '../styles/blocks/user.pcss';

    @import '../styles/admin/*.pcss';

</style>