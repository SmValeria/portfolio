<template lang="pug">
    li.work__item.card
        .work__bg-img(
        :style="{'backgroundImage': `url(${this.imagePath})`}"
        )
            ul.work__tags.admin-tags
                li(v-for="(tag, ndx) in tagArray"
                :key="ndx").admin-tags__item.work__tags-item {{ tag }}
        .work__description
            .work__data
                .work__header.card__title {{ work.title }}
                .work__text
                    p {{ work.description }}
                a(
                :href="work.link"
                target="_blank"
                ).work__link {{ work.link }}
            .work__controls(
                :class="{disabled: isFormShow}"
            )
                button(
                type="button"
                @click="editWork"
                ).card__edit.icon__pencil.work__edit.work__btn Править
                button(
                type="button"
                @click="removeCurrentWork"
                ).card__delete.icon__delete.work__delete.work__btn Удалить
        .work__overlay
</template>

<script>
    import $axios from '../axios';
    import { mapActions } from "vuex";

    export default {
        name: "WorkItem",
        props: {
            work: Object,
            isFormShow: Boolean
        },
        data () {
            return {
                editMode: false,
            }
        },
        computed: {
            imagePath() {
                return this.getAbsoluteImgPath(this.work.photo);
            },
            tagArray () {
                return this.work.techs.split(', ')
            }
        },
        methods: {
            ...mapActions('works', ['removeWork']),
            async removeCurrentWork() {
                try {
                    await this.removeWork(this.work.id);
                } catch (error) {
                    console.log(error)
                }
            },
            getAbsoluteImgPath(imgPath) {
                const baseUrl = $axios.defaults.baseURL;
                return `${baseUrl}/${imgPath}`
            },
            editWork() {
                this.editMode = true;
                this.$emit('editCurrentWork', this.work);
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .work__controls.disabled .work__btn{
        opacity: 0.5;
        pointer-events: none;
        cursor: default;

    }

    .edit .work__controls.disabled .work__btn{
        opacity: 1;
    }
</style>