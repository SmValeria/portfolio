<template lang="pug">
    header.header
        .header__container.container
            .user.header__user
                .user__photo-wr.header__user-photo-wr
                    .user__photo
                .header__user-info
                    .user__name.header__user-name Валерия Смирнова
                        ExitBtn(
                        @click.native="authOut"
                        class="header__btn--phone")
            .header__title Панель администрирования
            ExitBtn(
            @click.native="authOut"
            class="header__btn--desktop")
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Header",
        components: {
            ExitBtn: () => import('./ExitBtn'),
        },
        methods: {
            ...mapActions('user', ['logout']),
            async authOut () {
                console.log('adfasf');
                try {
                    await this.logout;
                    this.$router.replace('/login');
                } catch (error) {
                    console.log(error);
                }
            },
        }
    }

</script>

<style scoped>
    .user__photo {
        background-image: url('../../images/content/user.jpg');
    }
</style>