<template>
    <input :type="type" :value="value" @input="input" />
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true, 
            },
            type: {
                type: String,
                default: 'text',
            },
        },
        data() {
        },
        methods: {
            input(e) {
                this.$emit('inputChange', e.target.value);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>