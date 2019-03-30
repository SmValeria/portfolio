<template lang="pug">
    .admincontent
        header.header
            .header__container.container
                .user.header__user
                    .user__photo-wr.header__user-photo-wr
                        .user__photo(style="background-image: url('src/images/content/user.jpg')")
                    .user__name.header__user-name Валерия Смирнова
                .header__title Панель администрирования
                .header__controls.controls
                    button.controls__btn.header__btn(type="button") Выйти
        .nav
            .nav__container.container
                nav.nav__content
                    ul.nav__list
                        li.nav__item.active
                            a.nav__link(href="#") Обо мне
                        li.nav__item
                            a.nav__link(href="#") Работы
                        li.nav__item
                            a.nav__link(href="#") Отзывы
        .page
            .page__container.container
                header.page__title Блок «Обо мне»
                .page__maincontent.about
                    .about__add
                        button.about__btn(type="button") Добавить группу
</template>

<style lang="postcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import '../styles/layout/base.pcss';
    @import '../styles/layout/font.pcss';
    @import '../styles/blocks/user.pcss';

    .admincontent {
        display: grid;
        min-height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
    }

    .container {
        width: 95%;
        max-width: 1080Px;
    }
    .header {
        padding: 15px 0;
        background-color: #3e3e59;
        background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
        color: #ffffff;
    }

    .header__container {
        display: flex;
        align-items: center;
    }
    .header__controls {
        margin-left: auto;
    }
    .header__user {
        display: flex;
        align-items: center;
        min-width: 260Px;
        margin-right: 10px;
    }
    .header__user-photo-wr {
        max-width: 45Px;
        margin-right: 20px;
    }
    .header__user-name {
        font-weight: 600;
    }
    .header__title {
        color: rgba($text-color-light, 0.5);
        font-size: 14px;
    }
    .header__btn {
        color: rgba($text-color-light, 0.7);
        text-decoration: underline;
    }

    .nav {
        background-color: #ffffff;
    }

    .nav__list {
        display: flex;
        align-items: center;
    }

    .nav__link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 20px;
    }
    .nav__item {
        position: relative;
        min-width: 120px;
        &:hover {
            .nav__link {
                font-weight: 600;
            }
        }
        &::after {
            content: '';
            display: flex;
            width: 0;
            height: 3Px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #383bcf;
            transition: width 0.2s;
        }
        &.active {
            &::after {
                width: 100%;
            }
            .nav__link {
                color: #383bcf;
                font-weight: 600;
            }
        }
    }



    .page {
        padding: 60px 0 40px;
        background: linear-gradient(rgba($text-color-light, 0.95), rgba($text-color-light, 0.95)),
                url('/src/images/content/hero_bg.jpg') center/cover no-repeat;
        height: 100%;
    }

    .page__container {
        position: relative;
    }

    .page__title {
        font-size: 21px;
        font-weight: 700;
    }

    .about__add {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 230px;
    }
    .about__btn {
        color: #383bcf;
        font-weight: 600;

        &::before {
            content: '+';
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 21Px;
            height: 21Px;
            color: $text-color-light;
            background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
            border-radius: 50%;
            margin-right: 10px;
        }
    }

</style>