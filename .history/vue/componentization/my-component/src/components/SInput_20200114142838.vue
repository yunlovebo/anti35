<template>
    <input :value="value" @input="input" />
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true, 
            },
            type: {

            }
        },
        data() {
        },
        methods: {
            input(e) {
                this.value = e.target.value;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>