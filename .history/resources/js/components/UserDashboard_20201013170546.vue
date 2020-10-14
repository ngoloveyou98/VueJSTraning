<template>
    <div class="user-dashboard">
        <div class="list-user-comp">
            <h4>List User</h4>
            <UserList @userSelected="childSelectedUser"></UserList>
        </div>
        <div class="user-detail-comp">
             <h4>User Detail</h4>
            <UserDetail></UserDetail>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue'
    import UserList from './UserList.vue'

    export default {
        components:{
            UserDetail,
            UserList
        },
        methods:{
            childSelectedUser(user){
                console.log(user)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>