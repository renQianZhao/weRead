<template>
    <div id="wrap">
        <el-button id="signInBtn" @click="signIn">进入</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        signIn: function() {
            let _this = this;
            _this.$router.push({
                name: 'main'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrap {
    text-align: center;
}
#signInBtn {
    margin-top: 30px;
}
</style>
