<template lang="pug">
    .card.new.skill-group.about__card
        header.card__header
            .card__title.underline.about__card-title
                input.card__input(
                type="text"
                placeholder="Название новой группы"
                v-model="skillTitle")
            .card__controls
                button(
                type="button"
                @click="addSkillGroup"
                ).card__confirm.icon__confirm.skill-group__confirm
                button(
                type="button"
                @click="$emit('deleteForm')"
                ).card__delete.icon__delete.skill-group__delete
        .card__content
        .card__footer.disabled
            .card__add-skill.underline
                input.card__input(
                type="text"
                placeholder="Новый навык"
                )
            .card__add-percent.underline
                input.card__input(
                type="number"
                placeholder="100 %"
                max="100"
                )
            .card__add-item
                AddButton(class="card__add-btn add-btn--big")
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "skillAdding",
        components: {
            AddButton: () => import("./AddButton")
        },
        data () {
            return {
                skillTitle: '',
            }
        },
        methods: {
            ...mapActions('categories', ['addNewSkillGroup']),
            ...mapActions('tooltip', ["handleTooltip"]),
            async addSkillGroup(){
                try {
                    await this.addNewSkillGroup(this.skillTitle);
                    this.skillTitle = "";
                    this.$emit('deleteForm');
                    this.handleTooltip({
                        type: "success",
                        text: "Новая категория добавлена"
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
    .disabled {
        pointer-events: none;
        user-select: none;
        opacity: 0.5;
    }
</style>