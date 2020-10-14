<template>
    <div class="list-user">
        <table class="tbl-list-user">
                <thead>
                    <th>Name</th>
                    <th>Location</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                    <tr v-for="user in userData" :key="user">
                            <td>{{ user.name.title }} - {{ user.name.last }} {{ user.name.first }}</td>
                            <td>{{ user.location.city }}</td>
                            <td>{{ user.dob.date }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script>
    import data from './data.json'
    export default {
        data(){
            return{
                userData:data
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>