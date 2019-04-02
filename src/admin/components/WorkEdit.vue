<template lang="pug">
    .card.work__edit-card
        header.card__header
            .card__title Редактирование работы
        .card__content--bigpd.work__edit-content
            .work__appearance
                .work__file-box.file-box
                    .file-box__title
                        |Перетащите или загрузите для загрузки изображения
                    label(
                    for="work-img"
                    ).admin-btn Загрузить
                    input.file-box__input.visuallyhidden(
                    type="file"
                    id="work-img"
                    name="work-img"
                    )
            .work__info
                .work__row
                    .card__title.underline
                        label.card__label(
                        for="work-title"
                        ) Название
                        input.card__input(
                        type="text"
                        value="Дизайн сайта для авто салона Porsche"
                        id="work-title"
                        name="work-title"
                        )
                .work__row
                    .card__title.underline
                        label.card__label(
                        for="work-link"
                        ) Ссылка
                        input.card__input(
                        type="url"
                        pattern="https?://.+"
                        value="https://www.porsche-pulkovo.ru"
                        id="work-link"
                        name="work-link"
                        )
                .work__row
                    .card__title
                        label.card__label(
                        for="work-desc"
                        ) Описание
                        textarea.card__input.card__textarea(
                        id="work-desc"
                        name="work-desc"
                        rows="4"
                        ) Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .work__row
                    .card__title.underline
                        label.card__label(
                        for="work-tags"
                        ) Добавление тэга
                        input.card__input(
                        type="text"
                        value="Jquery, Vue.js, HTML5"
                        id="work-tags"
                        name="work-tags"
                        )
                .work__row
                    ul.admin-tags
                        li.admin-tags__item
                            .admin-tags__text HTML
                            button(
                            type="button"
                            ).admin-tags__delete.icon__delete
                        li.admin-tags__item
                            .admin-tags__text CSS
                            button(
                            type="button"
                            ).admin-tags__delete.icon__delete
                        li.admin-tags__item
                            .admin-tags__text Javascript
                            button(
                            type="button"
                            ).admin-tags__delete.icon__delete
                .work__row
                    .work__serve
                        button(
                        type="reset"
                        ).admin-btn--string.work__reset Отмена
                        button(
                        type="submit"
                        ).work__sumbit.admin-btn Сохранить

</template>

<script>
    export default {
        name: "WorkEdit"
    }
</script>

<style scoped>

</style>