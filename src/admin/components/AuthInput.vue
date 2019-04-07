<template lang="pug">
    .root-auth-input.auth-input
        label.auth-input__title(:for="this.$attrs.id") {{ label }}
        .auth-input__wrap
            .auth-input__icon(
                :class="this.$attrs.id"
            )
            input.auth-input__el(
            required
            :value="value"
            v-on="inputListeners"
            v-bind="$attrs"
            )
            .auth-input__error {{ error }}
</template>

<script>
    export default {
        name: "AuthInput.vue",
        inheritAttrs: false,

        props: {
            label: String,
            value: String | Number,
            error: String
        },
        methods: {

        },
        computed: {
            inputListeners: function () {
                let vm = this;

                return Object.assign({},

                    this.$listeners,

                    {
                        input: function (event) {
                            vm.$emit('input', event.target.value)
                        }
                    }
                )
            }
        },

    }
</script>

<style lang="postcss" scoped>

    .root-auth-input {
        border-bottom: 2px solid $text-color;
        transition: border-bottom-color 0.2s;
        position: relative;
    }


    .auth-input__title {
        display: block;
        padding-left: 50px;
        color: rgba($text-color, 0.3);
        font-weight: 600;
        transform: translateY(100%);
        transition: transform 0.2s;
    }

    .auth-input__wrap {
        display: flex;
        padding-bottom: 15px;
    }

    .auth-input__icon {
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }

    .auth-input__icon.login {
        background: svg-load("user.svg", fill=rgba($text-color, 0.3), width=100%, height=100%) center/contain no-repeat;
    }
    .active .auth-input__icon.login {
        background: svg-load("user.svg", fill=rgba($main-color, 1), width=100%, height=100%)
        center/contain no-repeat;
    }
    .error .auth-input__icon.login {
        background: svg-load("user.svg", fill=rgba(#cd1515, 1), width=100%, height=100%)
        center/contain no-repeat;
    }
    .auth-input__icon.password {
        background: svg-load("key.svg", fill=rgba($text-color, 0.3), width=100%, height=100%) center/contain no-repeat;
    }
    .active .auth-input__icon.password {
        background: svg-load("key.svg", fill=rgba($main-color, 1), width=100%, height=100%)
        center/contain no-repeat;
    }
    .error .auth-input__icon.password {
        background: svg-load("key.svg", fill=rgba(#cd1515, 1), width=100%, height=100%)
        center/contain no-repeat;
    }

    .auth-input__el {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-weight: bold;
        color: $text-color;
    }
    .auth-input.active {
        border-bottom-color: $main-color;

        .auth-input__title{
            transform: translateY(-50%);
        }

        .auth-input__icon{
            fill: $main-color;
        }
    }

    .auth-input__error {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #cd1515;
        color: $text-color-light;
        padding: 15px 20px;
        text-align: center;
        display: none;
        &::before {
            content: '';
            display: flex;
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -100%);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 7px solid #cd1515;
        }
    }
    .auth-input.error {
        border-bottom-color: #cd1515;
    }
    .root-auth-input.error .auth-input__error{
        display: block;
    }

</style>