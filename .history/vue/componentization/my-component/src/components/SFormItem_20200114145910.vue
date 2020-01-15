<template>
    <div>
        <label v-text="label"></label>
        <slot></slot>
        <p v-text="error"></p>
    </div>
    
</template>

<script>
    export default {
        props: {
            prop: {
                type: 'String',
                required: true,
            },
            label: {
                type: String,
                required: true, 
            },
        },
        data() {
            return {
                error: ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>