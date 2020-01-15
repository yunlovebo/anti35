<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        provide () {
            return {
                form: this,
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>