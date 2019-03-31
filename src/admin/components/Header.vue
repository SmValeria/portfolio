<template lang="pug">
    header.header
        .header__container.container
            .user.header__user
                .user__photo-wr.header__user-photo-wr
                    .user__photo(style="background-image: url('src/images/content/user.jpg')")
                .header__user-info
                    .user__name.header__user-name Валерия Смирнова
                        ExitBtn(class="header__btn--phone")
            .header__title Панель администрирования
            ExitBtn(class="header__btn--desktop")
</template>

<script>
    import ExitBtn from './ExitBtn'
    export default {
        name: "Header",
        components: {
            ExitBtn
        }
    }

</script>

<style scoped>

</style>