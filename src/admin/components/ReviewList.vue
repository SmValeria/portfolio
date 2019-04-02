<template lang="pug">
    ul.review__lists
        li.review__item
            AddItem Добавить
                br
                |отзыв
        li.review__item.card
            header.card__header.review__header
                .user.review__writer
                    .user__photo-wr.review__img-photo-wr
                        .user__photo.review__img-photo(
                            style="background: url('src/images/content/sabancev.jpg') center top/cover no-repeat"
                        )
                    .user__info.review__author-info
                        .user__name.review__author-name Владимир Сабанцев
                        .user__occ Преподаватель
            .review__content
                .review__text
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .review__controls
                    button(
                    type="button"
                    ).card__edit.icon__pencil.review__edit.review__btn Править
                    button(
                    type="button"
                    ).card__delete.icon__delete.review__delete.review__btn Удалить
        li.review__item.card
            header.card__header.review__header
                .user.review__writer
                    .user__photo-wr.review__img-photo-wr
                        .user__photo.review__img-photo(
                            style="background: url('src/images/content/kovalchuk.jpg') center top/cover no-repeat"
                        )
                    .user__info.review__author-info
                        .user__name.review__author-name Ковальчук Дмитрий
                        .user__occ Основатель Loftschool
            .review__content
                .review__text
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .review__controls
                    button(
                    type="button"
                    ).card__edit.icon__pencil.review__edit.review__btn Править
                    button(
                    type="button"
                    ).card__delete.icon__delete.review__delete.review__btn Удалить
        li.review__item.card
            header.card__header.review__header
                .user.review__writer
                    .user__photo-wr.review__img-photo-wr
                        .user__photo.review__img-photo(
                            style="background: url('src/images/content/sabancev.jpg') center top/cover no-repeat"
                        )
                    .user__info.review__author-info
                        .user__name.review__author-name Владимир Сабанцев
                        .user__occ Преподаватель
            .review__content
                .review__text
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .review__controls
                    button(
                    type="button"
                    ).card__edit.icon__pencil.review__edit.review__btn Править
                    button(
                    type="button"
                    ).card__delete.icon__delete.review__delete.review__btn Удалить
        li.review__item.card
            header.card__header.review__header
                .user.review__writer
                    .user__photo-wr.review__img-photo-wr
                        .user__photo.review__img-photo(
                            style="background: url('src/images/content/kovalchuk.jpg') center top/cover no-repeat"
                        )
                    .user__info.review__author-info
                        .user__name.review__author-name Ковальчук Дмитрий
                        .user__occ Основатель Loftschool
            .review__content
                .review__text
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .review__controls
                    button(
                    type="button"
                    ).card__edit.icon__pencil.review__edit.review__btn Править
                    button(
                    type="button"
                    ).card__delete.icon__delete.review__delete.review__btn Удалить
</template>

<script>
    import AddItem from './AddItem'
    export default {
        name: "ReviewList",
        components: {
            AddItem
        }
    }
</script>

<style scoped>

</style>