<template lang="pug">
    .auth
        .auth__overlay
            .auth__form.form
                form.form__container.auth__container(action="" method="")
                    .form__header Авторизация
                    .form__row
                        .form__block.form__el
                            label.form__title(for="login") Логин
                            .form__input-wr
                                .form__icon-block.form__icon-block--login
                                input.form__input#login(name="login"
                                type="text"
                                required)
                            .form__error.hidden
                    .form__row
                        .form__block.form__el
                            label.form__title(for="password") Пароль
                            .form__input-wr
                                .form__icon-block.form__icon-block--password
                                input.form__input#password(name="password"
                                type="password"
                                required)
                            .form__error.hidden
                    button.form__submit.form__el(type="submit" disabled="true") Отправить

</template>

<script>
    export default {
        name: "Auth"
    }
</script>

<style lang="postcss" scoped>
    @import "../../styles/mixins.pcss";
    @import "../../styles/blocks/form.pcss";

    .auth__overlay {
        width: 100%;
        height: 100vh;
        background-color: rgba(#2d3c4e, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .auth__form {
        max-width: 570px;
        background-color: #ffffff;
        padding: 60px;
        margin: auto;
    }
    .auth__container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

</style>