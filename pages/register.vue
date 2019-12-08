<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">User register</h1>
                <div style="margin-top: 2rem;"></div>
                <div class="theme-form-box">
                    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                        <el-form-item label="Sponsor">
                            <el-input v-model="formLabelAlign.sponsor" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="User Name">
                            <el-input v-model="formLabelAlign.username" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Email">
                            <el-input type="email" v-model="formLabelAlign.email" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="First name">
                            <el-input v-model="formLabelAlign.firstName" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Second name">
                            <el-input v-model="formLabelAlign.secondName" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Phone">
                            <el-input type="tel" v-model="formLabelAlign.phone" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Country">
                            <el-input v-model="formLabelAlign.country" required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input placeholder="Please input password" v-model="formLabelAlign.password" show-password required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Fin password">
                            <el-input placeholder="Please input password" v-model="formLabelAlign.finPassword" show-password required clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Skype">
                            <el-input v-model="formLabelAlign.skype" clearable></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="registerMe">Reg Me</el-button>
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
                    sponsor: "",
                    username: "",
                    email: "",
                    firstName: "",
                    secondName: "",
                    password: "",
                    finPassword: "",
                    country: "",
                    phone: ""
                }
            };
        },
        methods: {
            registerMe: function() {
                this.$axios.post('http://165.22.199.57/user/', this.formLabelAlign)
                .then((res) => {
                    this.$store.commit('add', res.data.token);
                    localStorage.setItem('token', res.data.token);
                    this.$notify({
                        title: 'Success',
                        message: 'You have successfully registered.',
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
