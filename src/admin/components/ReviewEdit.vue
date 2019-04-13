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
                    label(
                    for="review-img"
                    ).admin-btn--string.review__download-label {{ imageOperation }}
                    input.review__download.visuallyhidden(
                    type="file"
                    id="review-img"
                    name="review-img"
                    :required="mode==='add'"
                    @change="appendFileAndRenderPhoto"
                    )

            .review__info
                .review__row
                    .card__title.underline
                        label.card__label(
                        for="review-author"
                        ) Имя автора
                        input.card__input(
                        type="text"
                        id="review-author"
                        name="review-author"
                        v-model="review.author"
                        required
                        )
                .review__row
                    .card__title.underline
                        label.card__label(
                        for="review-author-occ"
                        ) Титул автора
                        input.card__input(
                        type="text"
                        id="review-author-occ"
                        name="review-author-occ"
                        v-model="review.occ"
                        required
                        )
                .review__row
                    .card__title
                        label.card__label(
                        for="review-text"
                        ) Отзыв
                        textarea.card__input.card__textarea(
                        id="review-text"
                        name="review-text"
                        rows="4"
                        required
                        v-model="review.text"
                        )
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

    export default {
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
                try {
                    await this.addReview(this.review);
                    this.$emit('deleteFormReview');
                } catch (error) {
                    console.log(error.message);
                }

            },
            async editCurrentReview () {
                try {
                    await this.editReview(this.review);
                    this.$emit('deleteFormReview');
                } catch (error) {
                    console.log(error);
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