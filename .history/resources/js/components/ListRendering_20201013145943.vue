<template>
    <div>
        <!-- array -->
        <!-- <ul>
            <li v-for="(food,index) in foods" v-bind:key="(food,index)">
                {{ index }} - {{food.name}}
            </li>
        </ul> -->
        <!-- //OBJECT -->
        <!-- <ul>
            <p v-for="(value,key) in profile" v-bind:key="(key,value)">
                {{ key }}: {{ value }}
            </p>
        </ul> -->

        <ul >
            <template v-for="todo of todos"
            :key="todo.id" >
            <li :key="user.id">{{ todo.name }}</li>
                
                
            
        </ul>

    </div>
</template>
<script>
export default {
    data() {
            return {
                foods: [
                    { name: 'Hamburger' },
                    { name: 'Sandwich' },
                    { name: 'Chicken chop' },
                ],
                profile:{
                    'firstname':'Vét',
                    'lastname':'Tổ'
                },
                 todos: [
                    {
                        name: 'go shopping',
                        isComplete: true
                    },
                    {
                        name: 'go school',
                        isComplete: false
                    }
                ]

            }
        }
}
</script>