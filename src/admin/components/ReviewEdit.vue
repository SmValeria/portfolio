<template lang="pug">
    .card.review__edit-card
        header.card__header
            .card__title {{ formTitle }}
        form.card__content--bigpd.review__edit-content(
            @reset.prevent="$emit('deleteFormReview')"
            @submit.prevent="mode === 'add' ? addNewReview() : editCurrentReview()"
        )
            .review__appearance
                .user.review__author
                    .user__photo-wr.review__author-photo-wr
                        .user__photo.review__author-photo(
                        :class="{filled : isAddPhoto}"
                        :style="{'backgroundImage': `url(${this.renderPhotoUrl})`}"
                        )
                    label.check(
                    :class="{error: validation.hasError('review.photo')}"
                    for="review-img"
                    ).admin-btn--string.review__download-label {{ imageOperation }}
                        .check__error {{validation.firstError('review.photo')}}
                    input.review__download.visuallyhidden(
                    type="file"
                    id="review-img"
                    name="review-img"
                    @change="appendFileAndRenderPhoto"
                    )


            .review__info
                .review__row
                    .card__title.underline.check(
                    :class="{error: validation.hasError('review.author')}"
                    )
                        label.card__label(
                        for="review-author"
                        ) Имя автора
                        input.card__input(
                        type="text"
                        id="review-author"
                        name="review-author"
                        v-model="review.author"
                        )
                        .check__error {{validation.firstError('review.author')}}
                .review__row
                    .card__title.underline.check(
                        :class="{error: validation.hasError('review.occ')}"
                    )
                        label.card__label(
                        for="review-author-occ"
                        ) Титул автора
                        input.card__input(
                        type="text"
                        id="review-author-occ"
                        name="review-author-occ"
                        v-model="review.occ"
                        )
                        .check__error {{validation.firstError('review.occ')}}
                .review__row
                    .card__title.check(
                        :class="{error: validation.hasError('review.text')}"
                    )
                        label.card__label(
                        for="review-text"
                        ) Отзыв
                        textarea.card__input.card__textarea(
                        id="review-text"
                        name="review-text"
                        rows="4"
                        v-model="review.text"
                        )
                        .check__error {{validation.firstError('review.text')}}
                .review__row
                    .review__serve
                        button(
                        type="reset"
                        ).review__reset.admin-btn--string Отмена
                        button(
                        type="submit"
                        ).card__sumbit.admin-btn Сохранить


</template>

<script>
    import { mapActions } from 'vuex';
    import $axios from '../axios';
    import { Validator } from 'simple-vue-validator';

    export default {
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            "review.author": value => {
                return Validator.value(value).required("Введите имя автора");
            },
            "review.occ": value => {
                return Validator.value(value)
                    .required("Введите должность автора");
            },
            "review.text": value => {
                return Validator.value(value)
                    .required("Введите текст отзыва");
            },
            "review.photo": function (value) {
                return Validator.custom(function () {
                    if (!value) {
                        return "Загрузите аватар"

                    }
                });
            }
        },
        name: "ReviewEdit",
        props: {
            mode: String,
            review: Object
        },
        data () {
            return {
                renderPhotoUrl: '',
                isAddPhoto: false,
            }
        },
        computed: {
            formTitle() {
                return (this.mode === 'add') ? 'Новый отзыв' :
                    'Редактировать отзыв';
            },
            imageOperation() {
                return (this.isAddPhoto) ? 'Изменить фото' : 'Добавить фото';
            }
        },
        methods: {
            ...mapActions('reviews', ['addReview', 'editReview']),
            ...mapActions('tooltip', ["handleTooltip"]),
            appendFileAndRenderPhoto(e) {
                const file = e.target.files[0];
                this.review.photo = file;

                const reader = new FileReader();

                try {
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        this.renderPhotoUrl = reader.result;
                        this.isAddPhoto = true;
                    }
                } catch (error) {
                    console.log('photo failed');
                }
            },
            async addNewReview(){
                if ((await this.$validate()) === false) return;
                try {
                    await this.addReview(this.review);
                    this.$emit('deleteFormReview');
                    this.handleTooltip({
                        type: "success",
                        text: "Отзыв добавлен"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }

            },
            async editCurrentReview () {
                if ((await this.$validate()) === false) return;
                try {
                    await this.editReview(this.review);
                    this.$emit('deleteFormReview');
                    this.handleTooltip({
                        type: "success",
                        text: "Отзыв изменен"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            }
        },
        created () {
            if(this.mode === 'edit') {
                const baseUrl = $axios.defaults.baseURL;
                this.renderPhotoUrl = `${baseUrl}/${this.review.photo}`;
                this.isAddPhoto = true;
            }
        }
    }
</script>

<style scoped>

</style>