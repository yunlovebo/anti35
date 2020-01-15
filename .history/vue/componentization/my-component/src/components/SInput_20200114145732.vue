<template>
    <input :type="type" :value="value" @input="$emit('input', e.target.value)" v-bind="$attrs" />
</template>

<script>
    export default {
        inheritAttrs: false,
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