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

        <!-- <ul v-if="todos.length > 0">
            <li v-for="todo in todos" :key="todo.id">
               {{ todo.id }}- {{ todo.name }}
            </li>
        </ul>  -->

        <ul>
            <li v-for="todo in listComplateTodo" :key="todo.id">

            </li>
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
                        id:1,
                        name: 'go shopping',
                        isComplete: true
                    },
                    {   
                        id: 2,
                        name: 'go school',
                        isComplete: false
                    }
                ]

            }
    },
    computed:{
        listComplateTodo(){

        }
    }
}
</script>