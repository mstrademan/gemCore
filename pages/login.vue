<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">Login</h1>
                <div style="margin-top: 2rem;"></div>
                <div class="theme-form-box">
                    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                        <el-form-item label="Username">
                            <el-input v-model="formLabelAlign.username" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input type="password" v-model="formLabelAlign.password" clearable show-password></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="logIn">Log in</el-button>
                        <NLink class="el-button--primary el-button" to="/reset">Reset password</NLink>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import MainNavbar from '../components/main-navbar'
    export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            logIn: function() {
                this.$axios.get('http://165.22.199.57/auth/', {params: this.formLabelAlign})
                .then((res) => {
                    this.$store.commit('add', res.data.token);
                    localStorage.setItem('token', res.data.token);
                    this.$notify({
                        title: 'Success',
                        message: 'You have successfully logged in.',
                        type: 'success'
                    });
                    this.$router.push({path: "/"});
                })
            }
        },
        components: {
            'Logo': Logo,
            'ms-nav': MainNavbar
        }
    }
</script>

<style>
    .container-hero {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .theme-form-box {
        text-align: right;
    }

    .links {
        padding-top: 15px;
    }
</style>
