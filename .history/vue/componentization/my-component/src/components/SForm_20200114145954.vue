<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        provide () {
            return this;
        },
    }
</script>

<style lang="scss" scoped>

</style>