<template lang="pug">
    .card.work__edit-card
        header.card__header
            .card__title {{ formTitle }}
        form.card__content--bigpd.work__edit-content(
            @reset.prevent="$emit('deleteFormWork')"
            @submit.prevent="mode === 'add' ? addNewWork() : editCurrentWork()"
        )
            .work__appearance
                .work__file-box.file-box(
                    :class="{filled : isAddPhoto}"
                    :style="{'backgroundImage': `url(${this.renderPhotoUrl})`}"
                )
                    .file-box__content-wr(v-if="isAddPhoto === false")
                        .file-box__title
                            |Перетащите или загрузите для загрузки изображения
                        label(
                        for="work-img"
                        ).admin-btn Загрузить
                        input.file-box__input.visuallyhidden(
                        type="file"
                        id="work-img"
                        name="work-img"
                        required
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
                    .card__title.underline
                        label.card__label(
                        for="work-title"
                        ) Название
                        input.card__input.work__input(
                        type="text"
                        required
                        v-model="work.title"
                        id="work-title"
                        name="work-title"
                        )
                .work__row
                    .card__title.underline
                        label.card__label(
                        for="work-link"
                        ) Ссылка
                        input.card__input.work__input(
                        type="url"
                        required
                        pattern="https?://.+"
                        v-model="work.link"
                        id="work-link"
                        name="work-link"
                        )
                .work__row
                    .card__title
                        label.card__label(
                        for="work-desc"
                        ) Описание
                        textarea.card__input.card__textarea.work__input(
                        id="work-desc"
                        required
                        name="work-desc"
                        v-model="work.description"
                        )
                .work__row
                    .card__title.underline
                        label.card__label(
                        for="work-tags"
                        ) Добавление тэга
                        input.card__input.work__input(
                        type="text"
                        required
                        v-model="work.techs"
                        id="work-tags"
                        name="work-tags"
                        )
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

    export default {
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
                try {
                    await this.addWork(this.work);
                    this.$emit('deleteFormWork');
                } catch (error) {
                    console.log(error.message);
                }

            },
            async editCurrentWork () {
                try {
                    await this.editWork(this.work);
                    this.$emit('deleteFormWork');
                } catch (error) {
                    console.log(error);
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