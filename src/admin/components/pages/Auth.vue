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
                    v-model="user.name"
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
    import $axios from '@/axios'

    export default {
        name: "Auth",
        components: {
            AuthInput: () => import("../AuthInput"),
            AuthCloseBtn: () => import("../AuthCloseBtn")
        },
        data() {
            return {
                user: {
                    name: "",
                    password: "",
                }
            }
        },
        methods: {
            async login () {
                if(!this.checkForm()) return;
                try {
                   const {
                       data: {token}
                   } = await $axios.post('/login', this.user);

                   localStorage.setItem('token', token);
                   $axios.defaults.headers['Authorization'] = `Bearer${token}`;
                   this.$router.replace('/');
               } catch (error) {
                    console.log(error);
               }
            },
            checkForm () {
                let validity = true;
                if (!this.user.name) {
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