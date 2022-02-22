<template>
    <section>
        <b-button @click="clickMe" hello="yong" world="hugo">Hello</b-button>
        <b-button loading>Loading</b-button>
        <b-button rounded>Rounded</b-button>
    </section>
</template>

<script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>
