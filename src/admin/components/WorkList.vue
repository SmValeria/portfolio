<template lang="pug">
    ul.work__lists
        li.work__item
            AddItem Добавить
                    br
                    |работу
        li.work__item.card.work__bg-img.edit(
        style="background-image: url(/src/images/preview/1.jpg)")
            .work__data
                .work__header.card__title Сайт школы образования
                .work__text
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(
                href="#"
                target="_blank"
                ).work__link http://loftschool.ru
            .work__controls
                button(
                type="button"
                ).card__edit.icon__pencil.work__edit.work__btn Править
                button(
                type="button"
                ).card__delete.icon__delete.work__delete.work__btn Удалить
            .work__overlay
        li.work__item.card.work__bg-img(
        style="background-image: url(/src/images/preview/2.jpg)")
            .work__data
                .work__header.card__title Сайт школы образования
                .work__text
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(
                href="#"
                target="_blank"
                ).work__link http://loftschool.ru
            .work__controls
                button(
                type="button"
                ).card__edit.icon__pencil.work__edit.work__btn Править
                button(
                type="button"
                ).card__delete.icon__delete.work__delete.work__btn Удалить
            .work__overlay
        li.work__item.card.work__bg-img(
        style="background-image: url(/src/images/preview/3.jpg)")
            .work__data
                .work__header.card__title Сайт школы образования
                .work__text
                    p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(
                href="#"
                target="_blank"
                ).work__link http://loftschool.ru
            .work__controls
                button(
                type="button"
                ).card__edit.icon__pencil.work__edit.work__btn Править
                button(
                type="button"
                ).card__delete.icon__delete.work__delete.work__btn Удалить
            .work__overlay
</template>

<script>
    import AddItem from './AddItem'
    export default {
        name: "WorkList",
        components: {
            AddItem
        }
    }
</script>

<style scoped>

</style>