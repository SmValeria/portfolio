<template lang="pug">
    .auth
        .auth__overlay
            .auth__form
                form.auth__container(
                action=""
                method=""
                @submit.prevent="auth"
                novalidate="true"
                )
                    AuthCloseBtn(
                    @click.native="toMain"
                    ).auth__close
                    .auth__header Авторизация
                    AuthInput(
                    type="text"
                    name="login"
                    id="login"
                    label="Логин"
                    v-model.lazy="user.name"
                    error="Введите логин"
                    @focus="addActiveClassInput"
                    @blur="removeActiveClassInput"
                    :class="{active: loginActive}"
                    ).auth__input.auth__input--login

                    AuthInput(
                    type="password"
                    name="password"
                    id="password"
                    label="Пароль"
                    v-model.lazy="user.password"
                    error="Введите пароль"
                    @focus="addActiveClassInput"
                    @blur="removeActiveClassInput"
                    :class="{active: passwordActive}"
                    ).auth__input.auth__input--password


                    button.auth__submit(
                    type="submit"
                    :disabled="disable"
                    ) Отправить


</template>

<script>
    import $axios from '@/axios'
    import { mapActions } from 'vuex'
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
        computed: {
            disable: function() {
                return !(this.user.name !== "" && this.user.password !== "")
            },
            loginActive: function() {
                return (this.user.name !== "")
            },
            passwordActive: function() {
                return (this.user.password !== "")
            },
        },
        methods: {
            ...mapActions('user', ['login']),
            ...mapActions('tooltip', ["handleTooltip"]),
            async auth () {
                if(!this.checkForm()) {
                    return}
                try {
                    await this.login(this.user);
                   this.$router.replace('/');
               } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: error.message
                    })
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
            },
            toMain() {
                const rootPath = location.protocol + '//' + location.host + '/portfolio/';

                window.location.replace(rootPath);

            }
        }
    }
</script>

<style lang="postcss" scoped>
    @import "../../../styles/mixins.pcss";
    @import "../../assets/styles/auth.pcss";

</style>