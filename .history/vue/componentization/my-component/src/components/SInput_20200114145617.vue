<template>
    <input :type="type" :value="value" @input="$emit('input', e.target.value)" />
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
        },
    }
</script>

<style lang="scss" scoped>

</style>