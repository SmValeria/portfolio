<template lang="pug">
    .about
        .about__add
            AddButton(class="about__btn") Добавить группу
        ul.about__container.cards
            li.cards__item
                .card.new.skill-group.about__card
                    header.card__header
                        .card__title.underline.about__card-title
                            input.card__input(
                            type="text"
                            placeholder="Название новой группы")
                        .card__controls
                            button(
                            type="button"
                            ).card__confirm.icon__confirm.skill-group__confirm
                            button(
                            type="button"
                            ).card__delete.icon__delete.skill-group__delete
                            button(
                            type="button"
                            ).card__edit.icon__pencil.skill-group__edit
                    .card__content
                    .card__footer
                        .card__add-skill.underline
                            input.card__input(
                            type="text"
                            placeholder="Новый навык"
                            )
                        .card__add-percent.underline
                            input.card__input(
                            type="number"
                            placeholder="100 %"
                            max="100"
                            )
                        .card__add-item
                            AddButton(class="card__add-btn add-btn--big")
            li.cards__item
                .card.edit.skill-group.about__card
                    header.card__header
                        .card__title.underline.about__card-title
                            input.card__input(
                            type="text"
                            value="Workflow")
                        .card__controls
                            button(
                            type="button"
                            ).card__confirm.icon__confirm.skill-group__confirm
                            button(
                            type="button"
                            ).card__delete.icon__delete.skill-group__delete
                            button(
                            type="button"
                            ).card__edit.icon__pencil.skill-group__edit
                    .card__content.skill
                        ul.skill__list
                            li.skill__item
                                .skill__title Git
                                .skill__percent 100
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                            li.skill__item
                                .skill__title Terminal
                                .skill__percent 90
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                            li.skill__item
                                .skill__title Gulp
                                .skill__percent 80
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                            li.skill__item
                                .skill__title Webpack
                                .skill__percent 85
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                    .card__footer
                        .card__add-skill.underline
                            input.card__input(
                            type="text"
                            placeholder="Новый навык"
                            )
                        .card__add-percent.underline
                            input.card__input(
                            type="number"
                            placeholder="100 %"
                            max="100"
                            )
                        .card__add-item
                            AddButton(class="card__add-btn add-btn--big")
            li.cards__item
                .card.skill-group.about__card
                    header.card__header
                        .card__title.underline.about__card-title
                            input.card__input(
                            type="text"
                            value="Frontend")
                        .card__controls
                            button(
                            type="button"
                            ).card__confirm.icon__confirm.skill-group__confirm
                            button(
                            type="button"
                            ).card__delete.icon__delete.skill-group__delete
                            button(
                            type="button"
                            ).card__edit.icon__pencil.skill-group__edit
                    .card__content.skill
                        ul.skill__list
                            li.skill__item
                                .skill__title Html5
                                .skill__percent 100
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                            li.skill__item.edit
                                .skill__title.underline СSS3
                                .skill__percent.underline 90
                                    span %
                                button(
                                type="button"
                                ).skill__confirm.icon__confirm
                                button(
                                type="button"
                                ).skill__delete.icon__delete
                            li.skill__item
                                .skill__title JavaScript
                                .skill__percent 80
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                            li.skill__item
                                .skill__title Jquery и Vue.js
                                .skill__percent 85
                                    span %
                                button(
                                type="button"
                                ).skill__edit.icon__pencil
                                button(
                                type="button"
                                ).skill__remove.icon__trash
                    .card__footer
                        .card__add-skill.underline
                            input.card__input(
                            type="text"
                            placeholder="Новый навык"
                            )
                        .card__add-percent.underline
                            input.card__input(
                            type="number"
                            placeholder="100 %"
                            max="100"
                            )
                        .card__add-item
                            AddButton(class="card__add-btn add-btn--big")


</template>

<script>
    import AddButton from './AddButton'

    export default {
        name: "About",
        components: {
            AddButton
        }
    }
</script>

<style scoped>

</style>