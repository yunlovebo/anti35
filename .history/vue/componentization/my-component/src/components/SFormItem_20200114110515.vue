<template>
    <div>
        <label v-text="label"></label>
        <slot></slot>
    </div>
    <p v-text="error"></p>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>