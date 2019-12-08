<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><NLink to="/">Home</NLink></el-menu-item>
        <el-menu-item index="2" v-if="!this.token"><NLink to="/login">Login</NLink></el-menu-item>
        <el-menu-item index="3" v-if="!this.token"><NLink to="/register">Register</NLink></el-menu-item>
        <el-menu-item index="5" v-if="this.token"><NLink :to="{name: 'cabinet'}">Cabinet</NLink></el-menu-item>
        <el-menu-item index="4" v-if="this.token"><a href="#" @click="exitUser">Exit</a></el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                token: "",
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        mounted() {
            this.token = localStorage.getItem('token');
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
                this.activeIndex = key;
            },
            exitUser(e) {
                e.preventDefault();
                this.$router.push({path: "/"});
                localStorage.clear();
                location.reload();
            }
        }
    }
</script>
