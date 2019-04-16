<template lang="pug">
    li.skill__item(v-if="editMode === false")
        .skill__title
            .skill__input {{ skill.title }}
        .skill__percent
            .skill__input {{ skill.percent }}
                span %
        button(
        type="button"
        @click="editMode=true"
        ).skill__edit.icon__pencil
        button(
        type="button"
        @click="removeCurrentSkill"
        ).skill__remove.icon__trash

    li.skill__item.edit(v-else)
        .skill__title.underline.check(
        :class="{error: validation.hasError('editedSkill.title')}"
        )
            input(type="text" v-model="editedSkill.title").skill__input
            .check__error {{validation.firstError('editedSkill.title')}}
        .skill__percent.underline.check(
        :class="{error: validation.hasError('editedSkill.percent')}"
        )
            input(type="number" v-model="editedSkill.percent").skill__input
            .check__error {{validation.firstError('editedSkill.percent')}}

        button(
        type="button"
        @click="saveEditSkill"
        ).skill__confirm.icon__confirm
        button(
        type="button"
        @click="editMode=false"
        ).skill__delete.icon__delete
</template>

<script>
    import { mapActions } from "vuex";
    import { Validator } from 'simple-vue-validator';

    export default {
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            "editedSkill.title": value => {
                return Validator.value(value).required("Введите название навыка");
            },
            "editedSkill.percent": value => {
                return Validator.value(value)
                    .between(0, 100, "Введите процент от 0 до 100")
                    .required("Введите процент владения навыком");
            },
        },
        name: "SkillItem",
        props: {
            skill: Object
        },
        data() {
            return {
                editMode: false,
                editedSkill: {...this.skill}
            }
        },
        methods: {
            ...mapActions('skills', ['removeSkill', 'editSkill']),
            ...mapActions('tooltip', ["handleTooltip"]),
            async removeCurrentSkill() {
                try {
                   await this.removeSkill(this.skill.id);
                    this.handleTooltip({
                        type: "success",
                        text: "Навык удален"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            },
            async saveEditSkill() {
                if ((await this.$validate()) === false) return;
                try {
                    await this.editSkill(this.editedSkill);
                    this.editMode=false;
                    this.handleTooltip({
                        type: "success",
                        text: "Навык изменен"
                    })
                } catch (error) {
                    this.handleTooltip({
                        type: "error",
                        text: "error.message"
                    })
                }
            },
        }
    }
</script>

<style scoped>
    .underline {
        padding-bottom: 10px;
        border-bottom: 1px solid #000000;
        line-height: 1;
    }
</style>