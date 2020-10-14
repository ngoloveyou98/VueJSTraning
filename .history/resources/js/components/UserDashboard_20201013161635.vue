<template>
    <div class="user-dashboard">
        <div class="list-user-comp">
            <UserList></UserList>
        </div>
        <div class="user-detail-comp">
            <UserDetail></UserDetail>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue'
    import UserList from './UserList.vue'

    export default {
    }
</script>

<style lang="scss" scoped>
</style>