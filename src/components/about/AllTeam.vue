<template>
    <div class="team-section container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="section-header">
                <h5>Our Great Trainers</h5>
                <h3>Meet Our Best Instructors</h3>
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

        <div class="padding-70"></div>
    </div>
</template>

<script>
import team from "@/api/team";

export default {
    data() {
        return {
            allTeamMembers: null,
        };
    },

    mounted() {
        this.allTeamMembers = team;
    },
};
</script>

<style scoped>
</style>