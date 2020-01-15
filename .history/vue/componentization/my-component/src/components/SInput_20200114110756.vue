<template>
    <input :value="value" @input="input" />
</template>

<script>
    export default {
        data() {
            return {
                value: '',
            }
        },
        methods: {
            input(e) {
                this.value = e.target.value;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>