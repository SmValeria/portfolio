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
    import AuthInput from '../AuthInput';
    import AuthCloseBtn from '../AuthCloseBtn';

    import $axios from '../../axios'

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
                $axios.post('/login', {
                    name: this.user.login,
                    password: this.user.password
                })
                    .then(function (response) {
                        console.log(1);
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
    @import "../../../styles/mixins.pcss";
    @import "../../assets/styles/auth.pcss";

</style>