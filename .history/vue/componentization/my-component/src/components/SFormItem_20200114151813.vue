<template>
    <div>
        <label v-text="label"></label>
        <slot></slot>
        <p v-text="error"></p>
    </div>
    
</template>

<script>
    import Schema from 'async-validator'

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
                const key = this.prop;
                const value = this.form.model[this.prop];

                const descriptor = {
                    [this.prop]: this.form.rules[this.prop],
                };

                const schema = new Schema(descriptor);

                return schema.validate({
                    [this.prop]
                })

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>