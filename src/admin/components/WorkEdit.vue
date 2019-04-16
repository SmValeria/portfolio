<template lang="pug">
    .card.work__edit-card
        header.card__header
            .card__title {{ formTitle }}
        form.card__content--bigpd.work__edit-content(
            @reset.prevent="$emit('deleteFormWork')"
            @submit.prevent="mode === 'add' ? addNewWork() : editCurrentWork()"
            novalidate="true"
        )
            .work__appearance
                .work__file-box.file-box(
                    :class="{filled : isAddPhoto}"
                    :style="{'backgroundImage': `url(${this.renderPhotoUrl})`}"
                )
                    .file-box__content-wr(v-if="isAddPhoto === false")
                        .file-box__title
                            |Перетащите или загрузите для загрузки изображения
                        label.check(
                        :class="{error: validation.hasError('work.photo')}"
                        for="work-img"
                        ).admin-btn Загрузить
                            .check__error {{validation.firstError('work.photo')}}
                        input.file-box__input.visuallyhidden(
                        type="file"
                        id="work-img"
                        name="work-img"
                        @change="appendFileAndRenderPhoto"
                        )
                .work__file-box-upload(v-if="isAddPhoto")
                    label(
                    for="work-img-upload"
                    ).admin-btn--string Изменить превью
                    input.file-box__input.visuallyhidden(
                    type="file"
                    id="work-img-upload"
                    name="work-img"
                    @change="appendFileAndRenderPhoto"
                    )
            .work__info
                .work__row
                    .card__title.underline.check(
                    :class="{error: validation.hasError('work.title')}"
                    )
                        label.card__label(
                        for="work-title"
                        ) Название
                        input.card__input.work__input(
                        type="text"
                        v-model="work.title"
                        id="work-title"
                        name="work-title"
                        )
                        .check__error {{validation.firstError('work.title')}}
                .work__row
                    .card__title.underline.check(
                    :class="{error: validation.hasError('work.link')}"
                    )
                        label.card__label(
                        for="work-link"
                        ) Ссылка
                        input.card__input.work__input(
                        type="url"
                        v-model="work.link"
                        id="work-link"
                        name="work-link"
                        )
                        .check__error {{validation.firstError('work.link')}}
                .work__row
                    .card__title.check(
                    :class="{error: validation.hasError('work.description')}"
                    )
                        label.card__label(
                        for="work-desc"
                        ) Описание
                        textarea.card__input.card__textarea.work__input(
                        id="work-desc"
                        name="work-desc"
                        v-model="work.description"
                        )
                        .check__error {{validation.firstError('work.description')}}
                .work__row
                    .card__title.underline.check(
                    :class="{error: validation.hasError('work.techs')}"
                    )
                        label.card__label(
                        for="work-tags"
                        ) Добавление тэга
                        input.card__input.work__input(
                        type="text"
                        v-model="work.techs"
                        id="work-tags"
                        name="work-tags"
                        )
                        .check__error {{validation.firstError('work.techs')}}
                .work__row
                    ul.admin-tags(v-if="tagArray.length")
                        li.admin-tags__item(v-for="(tag, index) in tagArray" :key="index")
                            .admin-tags__text {{ tag }}
                            button(
                            type="button"
                            @click="updateTagsArray(index)"
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
    import { mapActions } from 'vuex';
    import $axios from '../axios';
    import { Validator } from 'simple-vue-validator';

    export default {
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            "work.title": value => {
                return Validator.value(value).required("Введите название работы");
            },
            "work.link": value => {
                return Validator.value(value)
                    .url("Значение должно быть ссылкой")
                    .required("Введите ссылку на проект");
            },
            "work.description": value => {
                return Validator.value(value)
                    .required("Введите описание работы");
            },
            "work.techs": value => {
                return Validator.value(value)
                    .required("Введите используемые навыки");
            },
            "work.photo": function (value) {
                return Validator.custom(function () {
                    if (!value) {
                        return "Загрузите изображение работы"

                    }
                });
            }
        },
        name: "WorkEdit",
        props: {
            mode: String,
            work: Object
        },
        data () {
            return {
                renderPhotoUrl: '',
                isAddPhoto: false,
            }
        },
        computed: {
            formTitle() {
                return (this.mode === 'add') ? 'Добавление работы' :
                    'Редактирование работы';
            },
            tagArray () {
                    if(this.work.techs === "") return [];
                    return this.work.techs.split(', ')
            }
        },
        methods: {
            ...mapActions('works', ['addWork', 'editWork']),
            ...mapActions('tooltip', ["handleTooltip"]),
            appendFileAndRenderPhoto(e) {
                const file = e.target.files[0];
                this.work.photo = file;

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
            updateTagsArray (ndx) {
                let copyTagsArray = this.work.techs.split(', ').slice(0);
                copyTagsArray.splice(ndx, 1);
                this.work.techs = copyTagsArray.join(", ");
            },
            async addNewWork(){
                if ((await this.$validate()) === false) return;
                try {
                    await this.addWork(this.work);
                    this.$emit('deleteFormWork');
                    this.handleTooltip({
                        type: "success",
                        text: "Работа добавлена"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }

            },
            async editCurrentWork () {
                if ((await this.$validate()) === false) return;
                try {
                    await this.editWork(this.work);
                    this.$emit('deleteFormWork');
                    this.handleTooltip({
                        type: "success",
                        text: "Работа изменена"
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
                this.renderPhotoUrl = `${baseUrl}/${this.work.photo}`;
                this.isAddPhoto = true;
            }
        }
    }
</script>

<style scoped>

</style>