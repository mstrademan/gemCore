<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">Reset password</h1>
                <div style="margin-top: 2rem;"></div>
                <div class="theme-form-box">
                    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                        <el-form-item label="Username">
                            <el-input v-model="formLabelAlign.username" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Type">
                            <el-switch
                                v-model="formLabelAlign.type"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="Finance password"
                                inactive-text="Cabinet password"
                                :active-value="1"
                                :inactive-value="0">
                            </el-switch>
                        </el-form-item>
                        <el-button type="primary" @click="logIn">Log in</el-button>
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
                    type: 0
                }
            };
        },
        methods: {
            logIn: function() {
                this.$axios.post('http://165.22.199.57/user/resetPassword/', this.formLabelAlign)
                .then((res) => {
                    this.$notify({
                        title: 'Success',
                        message: 'We have sent you an SMS with your new password..',
                        type: 'success'
                    });
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
