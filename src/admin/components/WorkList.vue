<template lang="pug">
    ul.work__lists
        li.work__item
            AddItem(
            @click.native="$emit('addNewWork')"
            :disabled="isFormShow"
            ) Добавить
                    br
                    |работу
        WorkItem(
        v-for="work in works"
        :key="work.id"
        :work="work"
        @editCurrentWork="editWork"
        :isFormShow="isFormShow"
        :class="{edit: isFormShow && editWorkId === work.id}"
        )

</template>

<script>
    import { mapActions, mapState } from "vuex";

    export default {
        name: "WorkList",
        props: {
            isFormShow: Boolean,
            editWorkId: {
                validator: prop => typeof prop === 'number' || prop === null
            }
        },

        components: {
            AddItem: () => import("./AddItem"),
            WorkItem: () => import("./WorkItem"),
        },
        computed: {
            ...mapState('works', {
                works: state => state.works,
            }),
        },
        methods: {
            ...mapActions('works', ['fetchWorks']),
            editWork(editedWork) {
             this.$emit('editWork', editedWork)
            }
        },
        async created() {
            try {
                await this.fetchWorks();
            } catch (error) {
                console.log('error on load works');
            }
        }
    }
</script>

<style scoped>

</style>