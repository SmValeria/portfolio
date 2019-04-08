<template lang="pug">
    .auth
        .auth__overlay
            .auth__form
                form.auth__container(
                action=""
                method=""
                @submit.prevent="login"
                novalidate="true"
                )
                    AuthCloseBtn.auth__close
                    .auth__header Авторизация
                    AuthInput(
                    type="text"
                    name="login"
                    id="login"
                    label="Логин"
                    v-model="user.login"
                    error="Введите логин"
                    @focus="addActiveClassInput"
                    @blur="removeActiveClassInput"
                    ).auth__input.auth__input--login

                    AuthInput(
                    type="password"
                    name="password"
                    id="password"
                    label="Пароль"
                    v-model="user.password"
                    error="Введите пароль"
                    @focus="addActiveClassInput"
                    @blur="removeActiveClassInput"
                    ).auth__input.auth__input--password


                    button.auth__submit(
                    type="submit"
                    ) Отправить

</template>

<script>
    import AuthInput from './AuthInput';
    import AuthCloseBtn from './AuthCloseBtn';

    const axios = require('axios');

    export default {
        name: "Auth",
        components: {
            AuthInput,
            AuthCloseBtn
        },
        data() {
            return {
                user: {
                    login: "",
                    password: "",
                }
            }
        },
        methods: {
            login () {
                if(!this.checkForm()) return;
                axios.post('https://webdev-api.loftschool.com/login', {
                    name: this.user.login,
                    password: this.user.password
                })
                    .then(function (response) {
                        localStorage.setItem('token', response.data.token);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
            checkForm () {
                let validity = true;
                if (!this.user.login) {
                    document.querySelector('.auth__input--login').classList.add('error');
                    validity = false;
                }
                if (!this.user.password) {
                    document.querySelector('.auth__input--password').classList.add('error');
                    validity = false;
                }
                return validity
            },
            addActiveClassInput() {
                event.target.closest('.auth__input').classList.add('active');
                event.target.closest('.auth__input').classList.remove('error')
            },
            removeActiveClassInput() {
                if(!event.target.value) {
                    event.target.closest('.auth__input').classList.remove('active');
                }
            }
        }
    }
</script>

<style lang="postcss" scoped>
    @import "../../styles/mixins.pcss";

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
        padding: 60px 80px;
        margin: auto;
        position: relative;
        @include phones {
            max-width: initial;
            position: fixed;
            min-height: 100vh;
            top: 0;
            left: 0;
            right: 0;
            padding-left: 20px;
            padding-right: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    .auth__container {
        display: flex;
        flex-direction: column;
    }
    .auth__close {
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .auth__header {
        font-size: 36px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
    }

    .auth__input {
        margin-bottom: 30px;
        &:last-of-type {
            margin-bottom: 60px;
        }
    }
    .auth__submit {
        border-radius: 40px 5px;
        color: $text-color-light;
        background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
        padding: 30px 120px;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        margin: 0 auto;

        &:hover {
            background-image: linear-gradient(to right, #bb00ff 0%, #5900ff 100%);
        }

        @include phones {
            padding: 30px 0;
            width: 100%;
            max-width: 260Px;
        }

    }

</style>