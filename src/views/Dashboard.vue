<template>
    <div class="Dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">
            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}
                            </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        title: 'Design a new website',
                        person: 'Ninja',
                        due: '1st Jan 2019',
                        status: 'ongoing',
                        content: 'Lorem ipsum ... '
                    },
                    {
                        title: 'Code up the homepage',
                        person: 'Chun Li',
                        due: '10th Jan 2019',
                        status: 'complete',
                        content: 'Lorem ipsum ... '
                    },
                    {
                        title: 'Design video thumbnails',
                        person: 'Rye',
                        due: '1st Dec 2018',
                        status: 'overdue',
                        content: 'Lorem ipsum ... '
                    }
                ]
            }
        }
    }
</script>

<style>
    .project.complete {
        border-left: 4px solid #31d1c2
    }

    .project.ongoing {
        border-left: 4px solid orange
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }

    .v-chip.complete {
        background: #31d1c2
    }

    .v-chip.ongoing {
        background: orange
    }

    .v-chip.overdue {
        background: tomato
    }

</style>
