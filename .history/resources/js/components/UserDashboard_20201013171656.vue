<template>
    <div class="user-dashboard">
        <div class="list-user-comp">
            <h4>List User</h4>
            <UserList @userSelected="childSelectedUser"></UserList>
        </div>
        <div class="user-detail-comp">
             <h4>User Detail</h4>
            <UserDetail :userDetailInfo="userSelectedFromChild"></UserDetail>
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
        data(){
            userSelectedFromChild:{}
        },
        methods:{
            childSelectedUser(user){
                console.log(user)
                this.userSelectedFromChild = user
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>