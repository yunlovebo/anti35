<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        props: {
            model: {
                type: Object,
                required: true,
            },
            rules: {
                type: Object,
                required: true,
            }
        },
        provide () {
            return {
                form: this,
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>