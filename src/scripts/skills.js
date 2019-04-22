import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillValue: Number
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle)
                    .getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skillValue);
            window.addEventListener('scroll', () => {
                let offset = window.pageYOffset;
                let topSkillsContainer = this.$root.$refs["skill-container"].getBoundingClientRect().top + offset - 150;
                if (offset >= topSkillsContainer) {
                    circle.style.strokeDashoffset = percent;
                }
            });
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        category: Object,
        skills: Array
    }
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: [],
            categories: []
        }

    },
    methods: {
        filterSkillsByCategoryId(categoryId) {
            return this.skills.filter(skill => skill.category === categoryId);
        },
        async fetchCategories() {
            try {
                const response = await axios.get('/categories/117');
                this.categories = response.data;
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
        async fetchSkills() {
            try {
                const response = await axios.get('/skills/117');
                this.skills = response.data;
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )

            }
        },
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
});