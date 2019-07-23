<template>
    <v-dialog max-width="600px">
        <v-btn slot="activator" class="success">Add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" :rules="inputRules"
                                  prepend-icon="folder"></v-text-field>
                    <v-textarea label="information" v-model="content" :rules="inputRules"
                                prepend-icon="edit"></v-textarea>

                    <v-menu>
                        <v-text-field :value="formattedDate" slot="activator" label="Due date" :rules="inputRules"
                                      prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import format from 'date-fns/format'
    import db from '@/fb'

    export default {
        name: "Popup",
        data() {
            return {
                title: '',
                content: '',
                due: null,
                inputRules: [
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ]
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    const project = {
                        title: this.title,
                        content: this.content,
                        due: format(this.due, 'Do MMM YYYY'),
                        person: 'Net Ninja',
                        status: 'ongoing'
                    }
                    db.collection('projects').add(project).then(()=>{
                        console.log('Added to db')
                    })
                }
            }
        },
        computed: {
            formattedDate() {
                return this.due ? format(this.due, 'Do MMM YYYY') : ''
            }
        }
    }
</script>

<style scoped>

</style>