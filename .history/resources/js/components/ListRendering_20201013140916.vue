<template>
    <div>
        <!-- <ul>
            <li v-for="(food,index) in foods" v-bind:key="(food,index)">
                {{ index }} - {{food.name}}
            </li>
        </ul> -->
        <ul>
            <p v-for="(value,key) in profile" v-bind:key="(key,value)">
                {{ key }}: {{ value }}
            </p>
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
                }

            }
        }
}
</script>