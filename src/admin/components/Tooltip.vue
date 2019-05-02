<template lang="pug">
    .root-tooltip(:class="type")
        .tooltip__text {{ text }}
        button(
        type="button"
        @click ="closeTooltip"
        ).tooltip__close.hamburger.hamburger--close
            span.hamburger__line.hamburger__line-top
            span.hamburger__line.hamburger__line-middle
            span.hamburger__line.hamburger__line-bottom
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "Tooltip",
        computed: {
            ...mapState('tooltip', {
                text: state => state.text,
                type: state => state.type,
            })
        },
        methods: {
            ...mapActions('tooltip', ['closeTooltip'])
        }
    }
</script>

<style scoped>
    .root-tooltip {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 20px 25px;
        font-size: 18px;
        color: $text-color-light;
        &.success {
            background-color: rgb(75, 177, 51);
        }
        &.error {
            background-color: rgb(177, 51, 51);
        }
    }
    .tooltip__text {
        margin-right: 25Px;
    }
    .tooltip__close {
        flex-shrink: 0;
    }
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
            background-color: $text-color-light;
            margin-bottom: 4Px;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }


</style>