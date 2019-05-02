<template lang="pug">
    .about
        .about__add
            AddButton(
            class="about__btn"
            @click.native="showAddingForm = true"
            v-if="showAddingForm === false"
            ) Добавить группу
        ul.about__container.cards
            li.cards__item(v-if="showAddingForm")
                SkillAdd(
                @deleteForm="showAddingForm = false"
                )
            li.cards__item(
            v-for="category in categories"
            :key="category.id"
            )
                SkillGroup(
                :category="category"
                :skills="filterSkillsByCategoryId(category.id)"
                )


</template>

<script>
    import { mapActions, mapState } from "vuex";
    export default {
        name: "About",
        data () {
            return {
                showAddingForm: false,
            }
        },
        components: {
            AddButton: () => import("../AddButton"),
            SkillAdd: () => import("../SkillAdd"),
            SkillGroup: () => import("../SkillGroup")
        },
        computed: {
            ...mapState('categories', {
                categories: state => state.categories,
            }),
            ...mapState('skills', {
                skills: state => state.skills
            })
        },
        methods: {
            ...mapActions('categories', ['fetchCategories']),
            ...mapActions('skills', ['fetchSkills']),
            filterSkillsByCategoryId(categoryId) {
                return this.skills.filter(skill => skill.category === categoryId);
            }
        },
        async created() {
            try {
                await this.fetchCategories();
            } catch (error) {
                console.log('error on load categories');
            }

            try {
                await this.fetchSkills();
            } catch (error) {
                console.log('error on load skills');
            }
        }
    }
</script>

<style scoped>

</style>