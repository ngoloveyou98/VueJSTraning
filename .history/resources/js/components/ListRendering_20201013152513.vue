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

        <!-- <ul >
            <template v-for="todo in todos"  >
                <div :key="todo">
                <li v-if="todo.isComplete">
                    {{ todo.name }}
                </li>
                </div>
            </template>     
            
        </ul> -->

        <ul v-if="todos.length > 0">
            <li v-for="todo in todos" :key="todo">
                {{ todo.name }}
            </li>
        </ul> 

    </div>
</template>
<script>
export default {
    data() {
            return {
                i:0,
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
                        id: this.i++,
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