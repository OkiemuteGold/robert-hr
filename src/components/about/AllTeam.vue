<template>
    <div class="team-section container-fluid no-padding pt-40 pb-60">
        <div class="container">
            <div class="section-header">
                <!-- <h5>Our Team</h5> -->
                <h3 class="mt-0">Meet Our Team</h3>
            </div>

            <div class="row" v-if="allTeamMembers && allTeamMembers.length">
                <div
                    class="col-md-3 col-sm-3 col-xs-6"
                    v-for="(team, index) in allTeamMembers"
                    :key="index"
                >
                    <div class="team-box">
                        <img
                            :src="team.imageUrl"
                            :alt="team.name"
                            width="272"
                            height="313"
                        />
                        <div class="team-content">
                            <h3>{{ team.name }}</h3>
                            <h5>{{ team.role }}</h5>
                            <ul>
                                <li
                                    v-for="(
                                        handle, index
                                    ) in team.socialHandles"
                                    :key="index"
                                >
                                    <a
                                        :href="handle.link"
                                        :aria-label="handle.name + ' handle'"
                                        ><i
                                            :class="handle.icon"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import team from "@/api/team";

export default {
    data() {
        return {
            allTeamMembers: null,
        };
    },

    computed: {
        ...mapState(["teamMembers"]),
    },

    methods: {
        ...mapActions(["setTeamMembers"]),
    },

    mounted() {
        this.setTeamMembers();

        if (this.teamMembers) {
            this.allTeamMembers = this.teamMembers;
        }
    },
};
</script>

<style scoped>
</style>