<template>
    <div>
        <ul>
            <li v-for="(food,index) in foods" v-bind:key="food">{{food.name}}</li>
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
                ]
            }
        }
}
</script>