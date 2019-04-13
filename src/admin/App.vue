<template lang="pug">
    .admin
        template(v-if="$route.meta.public")
            Auth
        template(v-else-if="userIsLogged")
            .admin__content
                Header
                Nav
                .page
                    .page__container.container
                        PageTitle(
                        :title="title"
                        )
                        .page__maincontent
                            router-view


</template>
<script>

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            Auth: () => import("./components/pages/Auth"),
            Header: () => import("./components/Header"),
            Nav: () => import("./components/Nav"),
            PageTitle: () => import("./components/PageTitle"),
            About: () => import("./components/pages/About"),
            Works: () => import("./components/pages/Works"),
            Reviews: () => import("./components/pages/Reviews")
        },
        computed: {
            ...mapGetters("user", ["userIsLogged"])
        },
        watch: {
            $route: function(route) {
                this.title = route.meta.title;
            }
        },
        created() {
            this.title = this.$route.meta.title;
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