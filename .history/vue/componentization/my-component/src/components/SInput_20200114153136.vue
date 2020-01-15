<template>
    <input :type="type" :value="value"
        @input="$emit('input', $event.target.value)"
        v-bind="$attrs" 
        @blur="window.alert(123);$emit('validate', $event.target.value)" 
    />
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
            return {

            };
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>

</style>