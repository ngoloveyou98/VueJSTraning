<template>
    <div>
        <!-- <ul>
            <li v-for="(food,index) in foods" v-bind:key="(food,index)">
                {{ index }} - {{food.name}}
            </li>
        </ul> -->
        <ul>
            <li v-for="(key,value) in profile" v-bind:key="(key,value)">
                {{ name }}
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
                }

            }
        }
}
</script>