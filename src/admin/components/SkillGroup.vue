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
            .card__add-skill.underline
                input.card__input(
                type="text"
                placeholder="Новый навык"
                v-model="skill.title"
                )
            .card__add-percent.underline
                input.card__input(
                type="number"
                placeholder="100 %"
                max="100"
                v-model="skill.percent"
                )
            .card__add-item
                AddButton(
                class="card__add-btn add-btn--big"
                @click.native="addNewSkill"
                )
</template>

<script>
    import { mapActions } from "vuex";
    export default {
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
            async addNewSkill() {
                try {
                    await this.addSkill(this.skill);
                    this.skill.title="";
                    this.skill.percent="";
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteCurrentCategory() {
                try {
                    await this.removeCategory(this.category.id);
                } catch (error) {
                    console.log(error);
                }
            },
            async saveEditCategory () {
                try {
                    await this.editCategory(this.editedCategory);
                    this.editCategoryMode = false;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>