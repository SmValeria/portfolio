<template lang="pug">
    .admin
        template(v-if="isUserLogged")
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
                            router-view
        template(v-else)
            Auth

</template>
<script>
    import Auth from './components/pages/Auth'
    import Header from './components/Header'
    import Nav from './components/Nav'
    import PageTitle from './components/PageTitle'
    import About from './components/pages/About'
    import Works from './components/pages/Works'
    import Reviews from './components/pages/Reviews'

    export default {
        data() {
            return {
                isUserLogged: false,
                activeTab: '/admin/about',
                activeTabTitle: 'Обо мне',
                menu: [
                    {
                        value: '/about',
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

    .admin {
        background: url('../images/content/hero_bg.jpg') center top/cover no-repeat;
    }

    .admin__content {
        display: grid;
        min-height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
        background-color: rgba($text-color-light, 0.9);
    }
</style>