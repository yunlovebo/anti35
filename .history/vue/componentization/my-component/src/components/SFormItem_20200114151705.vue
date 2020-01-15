<template>
    <div>
        <label v-text="label"></label>
        <slot></slot>
        <p v-text="error"></p>
    </div>
    
</template>

<script>
    import schema from 'async-validator'

    export default {
        inject: ['form'],
        props: {
            prop: {
                type: String,
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
        methods: {
            validate() {
                const value = this.form.model[this.prop];

                const descriptor = {
                    [this.prop]: this.form.rules[this.prop],
                }

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>