<template>
    <div>
        <label v-text="label"></label>
        <slot></slot>
        <p v-text="error" class="error-mes"></p>
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
                const value = this.form.model[key];

                const descriptor = {
                    [key]: this.form.rules[key],
                };

                const schema = new Schema(descriptor);

                return schema.validate({
                    [key]: value,
                }, errors => {
                    if (errors) {
                        this.error = errors[0].message;
                    } else {
                        this.error = '';
                    }
                });

            }
        },
        mounted () {
            this.$on('validate', () => {
                this.validate()
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>