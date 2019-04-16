<template lang="pug">
    li.skill__item(v-if="editMode === false")
        .skill__title {{ skill.title }}
        .skill__percent {{ skill.percent }}
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
        input(type="text" v-model="editedSkill.title").skill__title.underline
        input(type="number" v-model="editedSkill.percent").skill__percent.underline

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
    export default {
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