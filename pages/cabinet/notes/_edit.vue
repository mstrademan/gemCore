<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">Add note</h1>
                <div class="theme-form-box">
                    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                        <el-form-item label="Title">
                            <el-input v-model="formLabelAlign.title" placeholder="Put your title" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="Body">
                            <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="Please put your note"
                                v-model="formLabelAlign.body">
                            </el-input>
                        </el-form-item>
                        <cab-nav>
                            <a href="#" class="button--grey" @click="updateNote">Update +</a>
                        </cab-nav>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import MainNavbar from '~/components/main-navbar'
    import CabNav from '~/components/cabinet-nav'
    export default {
        data() {
            return {
                token: "",
                user: "",
                labelPosition: 'right',
                formLabelAlign: {
                    token: localStorage.getItem('token'),
                    id: this.$route.params.edit,
                    title: "",
                    body: ""
                }
            };
        },
        components: {
            Logo,
            'ms-nav': MainNavbar,
            'cab-nav': CabNav
        },
        mounted() {
            this.token = localStorage.getItem('token');
            if( !this.token ) {
                this.$router.push({path: "/"});
            }
            this.$axios
                .get('http://165.22.199.57/user/note/', {
                    params: {
                        token: this.token,
                        id: this.$route.params.edit
                    }
                })
                .then((res) => {
                    this.formLabelAlign.title = res.data.title;
                    this.formLabelAlign.body = res.data.body;
                })
        },
        methods: {
            updateNote: function(e) {
                e.preventDefault();
                this.$axios
                    .put('http://165.22.199.57/user/note/', this.formLabelAlign)
                    .then(() => {
                        this.$notify({
                            title: 'Success',
                            message: 'You have successfully update a note.',
                            type: 'success'
                        });
                    })
            }
        }
    }
</script>



<style lang="scss">
    .theme-form-box {
        text-align: right;
        max-width: 700px;
        margin: 0px auto;
    }
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

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
    // mixin's
    @mixin ul {
        list-style: none;
        line-height: 1;
        padding: 0px;
        margin: 0px;
    }
</style>
