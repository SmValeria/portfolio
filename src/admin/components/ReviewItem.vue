<template lang="pug">
    li.review__item.card
        header.card__header.review__header
            .user.review__writer
                .user__photo-wr.review__img-photo-wr
                    .user__photo.review__img-photo(
                    :style="{'backgroundImage': `url(${this.imagePath})`}"
                    )
                .user__info.review__author-info
                    .user__name.review__author-name {{ review.author }}
                    .user__occ {{review.occ}}
        .review__content
            .review__text {{ review.text }}
            .review__controls(
                :class="{disabled: isFormShow}"
            )
                button(
                type="button"
                @click="editReview"
                ).card__edit.icon__pencil.review__edit.review__btn Править
                button(
                type="button"
                @click="removeCurrentReview"
                ).card__delete.icon__delete.review__delete.review__btn Удалить
        .review__overlay
    
</template>

<script>
    import $axios from '../axios';
    import { mapActions } from "vuex";

    export default {
        name: "ReviewItem",
        props: {
            review: Object,
            isFormShow: Boolean
        },
        data () {
            return {
                editMode: false,
            }
        },
        computed: {
            imagePath() {
                return this.getAbsoluteImgPath(this.review.photo);
            }
        },
        methods: {
            ...mapActions('reviews', ['removeReview']),
            ...mapActions('tooltip', ["handleTooltip"]),
            async removeCurrentReview() {
                try {
                    await this.removeReview(this.review.id);
                    this.handleTooltip({
                        type: "success",
                        text: "Отзыв удален"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            },
            getAbsoluteImgPath(imgPath) {
                const baseUrl = $axios.defaults.baseURL;
                return `${baseUrl}/${imgPath}`
            },
            editReview() {
                this.editMode = true;
                this.$emit('editCurrentReview', this.review);
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .review__controls.disabled .review__btn{
        opacity: 0.5;
        pointer-events: none;
        cursor: default;

    }

    .edit .review__controls.disabled .review__btn{
        opacity: 1;
    }
</style>