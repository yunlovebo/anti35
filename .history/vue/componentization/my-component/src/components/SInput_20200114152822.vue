<template>
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)" v-bind="$attrs" />
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: '', 
            },
            type: {
                type: String,
                default: 'text',
            },
        },
        data() {
            return {

            };
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>

</style>