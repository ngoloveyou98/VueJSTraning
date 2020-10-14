<template>
    <div class="list-user">
        <table class="tbl-list-user">
                <thead>
                    <th>Name</th>
                    <th>Location</th>
                    <th>DOB</th>
                </thead>
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