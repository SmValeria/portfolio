<template lang="pug">
    button.hamburger(class="hamburger hamburger--close" type="button")
        span.hamburger__line.hamburger__line-top
        span.hamburger__line.hamburger__line-middle
        span.hamburger__line.hamburger__line-bottom
</template>

<script>
    export default {
        name: "AuthCloseBtn"
    }
</script>

<style lang="postcss" scoped>
    .hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20Px;

        &--close {
            .hamburger__line-top {
                transform: translateY(8Px) rotate(45deg);
            }

            .hamburger__line-bottom {
                transform: translateY(-8Px) rotate(-45deg);
            }

            .hamburger__line-middle {
                opacity: 0;
            }
        }

        .hamburger__line {
            display: flex;
            width: 24Px;
            height: 4Px;
            background-color: $text-color;
            margin-bottom: 4Px;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
</style>