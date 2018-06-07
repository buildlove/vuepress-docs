<template>
    <div>
        <ul>
            <li v-for="n in message">
                <a :href="n.url">{{ n.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: [{
                    title: '前端基础',
                    url: "/zh/frontendbasics/frontendbasics.html"
                }]
            }
        }
    }
</script>