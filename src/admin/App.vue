<template lang="pug">
    .admin
        Header
        Nav(
        :active="activeTab"
        :menu="menu")
        .page
            .page__container.container
                PageTitle(
                :title="activeTabTitle"
                )
                .page__maincontent.about
                    .about__add
                        AddButton(class="about__btn") Добавить группу
                    ul.about__container.cards
                        li.cards__item
                            .card.card--new
                                header.card__header
                                    .card__title.card__el-underline
                                        input.card__input(
                                        type="text"
                                        placeholder="Название новой группы")
                                    .card__controls
                                        .card__confirm
                                        .card__delete
                                .card__content
                                .card__footer
                                    .card__add-skill.card__el-underline
                                        input.card__input(
                                        type="text"
                                        placeholder="Новый навык"
                                        )
                                    .card__add-percent.card__el-underline
                                        input.card__input(
                                        type="number"
                                        placeholder="100 %"
                                        max="100"
                                        )
                                    .card__add-item
                                        AddButton(class="card__add-btn add-btn--big")
                        li.cards__item
                            .card
                                header.card__header
                                    .card__title.card__el-underline
                                        input.card__input(
                                        type="text"
                                        value="Workflow")
                                    .card__controls
                                        .card__confirm
                                        .card__delete
                                .card__content.skill
                                    ul.skill__list
                                        li.skill__item
                                            .skill__title Git
                                            .skill__percent 100
                                                span %
                                            .skill__edit
                                            .skill__remove
                                        li.skill__item
                                            .skill__title Terminal
                                            .skill__percent 90
                                                span %
                                            .skill__edit
                                            .skill__remove
                                        li.skill__item
                                            .skill__title Gulp
                                            .skill__percent 80
                                                span %
                                            .skill__edit
                                            .skill__remove
                                        li.skill__item
                                            .skill__title Webpack
                                            .skill__percent 85
                                                span %
                                            .skill__edit
                                            .skill__remove
                                .card__footer
                                    .card__add-skill.card__el-underline
                                        input.card__input(
                                        type="text"
                                        placeholder="Новый навык"
                                        )
                                    .card__add-percent.card__el-underline
                                        input.card__input(
                                        type="number"
                                        placeholder="100 %"
                                        max="100"
                                        )
                                    .card__add-item
                                        AddButton(class="card__add-btn add-btn--big")
                        li.cards__item.edit
                            .card
                                header.card__header
                                    .card__title.card__el-underline
                                        input.card__input(
                                        type="text"
                                        value="Frontend")
                                    .card__controls
                                        .skill__edit
                                .card__content.skill
                                    ul.skill__list
                                        li.skill__item
                                            .skill__title Html5
                                            .skill__percent 100
                                                span %
                                            .skill__edit
                                            .skill__remove
                                        li.skill__item.edit
                                            .skill__title.card__el-underline СSS3
                                            .skill__percent.card__el-underline 90
                                                span %
                                            .card__confirm
                                            .card__delete
                                        li.skill__item
                                            .skill__title JavaScript
                                            .skill__percent 80
                                                span %
                                            .skill__edit
                                            .skill__remove
                                        li.skill__item
                                            .skill__title Jquery и Vue.js
                                            .skill__percent 85
                                                span %
                                            .skill__edit
                                            .skill__remove
                                .card__footer
                                    .card__add-skill.card__el-underline
                                        input.card__input(
                                        type="text"
                                        placeholder="Новый навык"
                                        )
                                    .card__add-percent.card__el-underline
                                        input.card__input(
                                        type="number"
                                        placeholder="100 %"
                                        max="100"
                                        )
                                    .card__add-item
                                        AddButton(class="card__add-btn add-btn--big")



</template>
<script>
    import Header from './components/Header'
    import Nav from './components/Nav'
    import PageTitle from './components/PageTitle'
    import AddButton from './components/AddButton'
    export default {
        data() {
            return {
                activeTab: 'about',
                activeTabTitle: 'Обо мне',
                menu: [
                    {
                        value: 'about',
                        title: 'Обо мне'
                    },
                    {
                        value: 'works',
                        title: 'Работы'
                    },
                    {
                        value: 'reviews',
                        title: 'Отзывы'
                    }
                ]
            }
        },
        components: {
            Header,
            Nav,
            PageTitle,
            AddButton
        }
    }
</script>

<style lang="postcss">
    @import 'normalize.css';
    @import '../styles/mixins.pcss';
    @import '../styles/layout/base.pcss';
    @import '../styles/layout/font.pcss';
    @import '../styles/blocks/user.pcss';

    @import '../styles/admin/*.pcss';

</style>