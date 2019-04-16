<template lang="pug">
    .work
        WorkEdit(
        v-if="showForm"
        @deleteFormWork="handleDeleteForm"
        :mode="mode"
        :work="work"
        )
        WorkList(
        @addNewWork="handleAddNewWork"
        @editWork="handleEditWork"
        :isFormShow="showForm"
        :editWorkId="work.id"
        )
</template>

<script>

    export default {
        name: "Works",
        components: {
            WorkEdit: () => import("../WorkEdit"),
            WorkList: () => import("../WorkList")
        },
        data () {
            return {
                showForm: false,
                mode: "add",
                work: {
                    id: null,
                    title: "",
                    techs: "",
                    link: "",
                    photo: null,
                    description: ""
                },
            }
        },
        methods: {
            handleAddNewWork() {
                this.showForm=true;
                this.mode="add";
            },
            handleEditWork(editWork) {
                if(this.work.id) return;
                this.showForm=true;
                this.mode="edit";
                this.work = {...editWork}
            },
            handleDeleteForm() {
                this.work = {
                    id: null,
                    title: "",
                    techs: "",
                    link: "",
                    photo: null,
                    description: ""
                };
                this.showForm = false;
            }
        }
    }
</script>

<style scoped>

</style>