<template lang="pug">
    .card.review__edit-card
        header.card__header
            .card__title Новый отзыв
        .card__content--bigpd.review__edit-content
            .review__appearance
                .user.review__author
                    .user__photo-wr.review__author-photo-wr
                        .user__photo.review__author-photo
                    label(
                    for="review-img"
                    ).admin-btn--string.review__download-label Добавить фото
                    input.review__download.visuallyhidden(
                    type="file"
                    id="review-img"
                    name="review-img"
                    )

            .review__info
                .review__row
                    .card__title.underline
                        label.card__label(
                        for="review-author"
                        ) Имя автора
                        input.card__input(
                        type="text"
                        value="Ковальчук Дмитрий"
                        id="review-author"
                        name="review-author"
                        )
                .review__row
                    .card__title.underline
                        label.card__label(
                        for="review-author-occ"
                        ) Титул автора
                        input.card__input(
                        type="text"
                        value="Основатель LoftSchool"
                        id="review-author-occ"
                        name="review-author-occ"
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
                        ) Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
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
    export default {
        name: "ReviewEdit"
    }
</script>

<style scoped>

</style>