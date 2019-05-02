<template lang="pug">
    .card.skill-group.about__card
        header.card__header(v-if="editCategoryMode === false")
            .card__title.underline.about__card-title
                h2.card__input {{ category.category }}
            .card__controls
                button(
                type="button"
                @click="editCategoryMode = true"
                ).card__edit.icon__pencil.skill-group__edit
        header.card__header(v-else)
            .card__title.underline.about__card-title
                input.card__input(
                type="text"
                v-model="editedCategory.category")
            .card__controls
                button(
                type="button"
                @click="saveEditCategory"
                ).card__confirm.icon__confirm.skill-group__confirm
                button(
                type="button"
                @click="deleteCurrentCategory"
                ).card__delete.icon__delete.skill-group__delete
        .card__content.skill
            ul.skill__list
                SkillItem(
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
                )

        .card__footer
            .card__add-skill.underline.check(
            :class="{error: validation.hasError('skill.title')}"
            )
                input.card__input(
                type="text"
                placeholder="Новый навык"
                v-model="skill.title"
                )
                .check__error {{validation.firstError('skill.title')}}
            .card__add-percent.underline.check(
            :class="{error: validation.hasError('skill.percent')}"
            )
                input.card__input(
                type="number"
                placeholder="100 %"
                max="100"
                v-model="skill.percent"
                )
                .check__error {{validation.firstError('skill.percent')}}
            .card__add-item
                AddButton(
                class="card__add-btn add-btn--big"
                @click.native="addNewSkill"
                )
</template>

<script>
    import { mapActions } from "vuex";
    import { Validator } from 'simple-vue-validator';

    export default {
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            "skill.title": value => {
                return Validator.value(value).required("Введите название навыка");
            },
            "skill.percent": value => {
                return Validator.value(value)
                    .between(0, 100, "Введите процент от 0 до 100")
                    .required("Введите процент владения навыком");
            },
        },
        name: "SkillGroup",
        props: {
            category: Object,
            skills: Array,
        },
        data() {
            return {
                skill: {
                    category: this.category.id,
                    title: "",
                    percent: "",
                },
                editCategoryMode: false,
                editedCategory: {...this.category}
            }
        },
        components: {
            AddButton: () => import("./AddButton"),
            SkillItem: () => import("./SkillItem")
        },
        methods: {
            ...mapActions('categories', ['removeCategory', 'editCategory']),
            ...mapActions('skills', ['addSkill']),
            ...mapActions('tooltip', ["handleTooltip"]),
            async addNewSkill() {
                if ((await this.$validate()) === false) return;
                try {
                    await this.addSkill(this.skill);
                    this.skill.title="";
                    this.skill.percent="";
                    this.handleTooltip({
                        type: "success",
                        text: "Новый навык добавлен"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                } finally {
                    this.validation.reset();
                }
            },
            async deleteCurrentCategory() {
                try {
                    await this.removeCategory(this.category.id);
                    this.handleTooltip({
                        type: "success",
                        text: "Категория удалена"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            },
            async saveEditCategory () {
                try {
                    await this.editCategory(this.editedCategory);
                    this.editCategoryMode = false;
                    this.handleTooltip({
                        type: "success",
                        text: "Имя категрии обновлено"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>