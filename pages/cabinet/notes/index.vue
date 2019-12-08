<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">Welcome - {{ this.user.firstName }}</h1>
                <h2 class="subtitle flex-side center list"><span>Your notes</span> <NLink :to="{name: 'cabinet-notes-add'}" class="el-button--primary el-button">Add note+</NLink></h2>
                <el-scrollbar height="600">
                    <div class="all-notes-list">
                        <ul>
                            <li v-for="(item, index) in notes" :key="item._id">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.body }}</p>
                                <NLink :to="{name: 'cabinet-notes-edit', params: {edit: item._id}}" class="el-button el-button--warning is-plain">Edit</NLink>
                                <el-button type="danger" plain @click="deleteNote(item._id)">Delete</el-button>
                            </li>
                        </ul>
                    </div>
                </el-scrollbar>
                <cab-nav></cab-nav>
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
                user: [],
                notes: []
            }
        },
        components: {
            Logo,
            'ms-nav': MainNavbar,
            'cab-nav': CabNav
        },
        methods: {
            deleteNote: function(id) {
                let params = {
                    token: this.token,
                    id: id
                };
                this.$axios
                    .delete('http://165.22.199.57/user/note/', {
                        params: params
                    })
                    .then((res) => {
                        console.log(res);
                    })
            }
        },
        mounted() {
            this.token = localStorage.getItem('token');
            if( !this.token ) {
                this.$router.push({path: "/"});
            }
            this.$axios.get('http://165.22.199.57/user/', {
                    params: {
                        token: this.token
                    }
                })
                .then((res) => {
                    this.user = res.data;
                });
            this.$axios
                .get('http://165.22.199.57/user/note/', {params: {token: this.token}})
                .then((res) => {
                    this.notes = res.data;
                })
        }
    }
</script>

<style lang="scss">
    .flex-side {
        align-items: center;
        display: flex;
        &.center {
            justify-content: center;
        }
        &.top {
            align-items: flex-start;
        }
        &.down {
            align-items: flex-end;
        }
        &.list {
            & > * {
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0px;
                }
            }
        }
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
        line-height: 1;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
        span {
            display: inline-block;
            line-height: 1;
        }
        .el-button {
            position: relative;
            top: 5px;
        }
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
    .all-notes-list {
        margin: 1rem auto 1rem;
        max-width: 1200px;
        ul {
            @include ul;
            li {
                border: 1px solid #afafaf;
                margin: 0px 0px 1rem;
                vertical-align: top;
                border-radius: 4px;
                margin-right: 20px;
                text-align: left;
                max-width: 100%;
                display: block;
                padding: 2rem;
                &:nth-child(4n) {
                    margin-right: 0px;
                }
                h3 {
                    margin: 0px 0px 1rem;
                }
                p {
                    margin: 0px 0px 1rem;
                    line-height: 1.4;
                    display: block;
                }
            }
        }
    }
</style>
