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
                            transition(name="page" mode="out-in")
                                router-view
        transition(name="show-tooltip")
            Tooltip.tooltip(v-if="show")


</template>
<script>

    import { mapGetters, mapState, mapActions } from 'vuex';

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
            Reviews: () => import("./components/pages/Reviews"),
            Tooltip: () => import("./components/Tooltip"),
        },
        computed: {
            ...mapState("tooltip", {
                show: state => state.show
            }),
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
    .tooltip {
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
    }
    .show-tooltip-enter-active, .show-tooltip-leave-active {
        transition: transform 0.2s;
    }
    .show-tooltip-enter, .show-tooltip-leave-to {
        transform: translate(-50%, 100%);
    }
</style>