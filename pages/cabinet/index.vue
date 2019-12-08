<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div>
                <logo />
                <h1 class="title">Welcome - {{ this.user.firstName }}</h1>
                <h2 class="subtitle">to your personal account</h2>
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
                user: []
            }
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
            this.$axios.get('http://165.22.199.57/user/', {
                    params: {
                        token: localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.user = res.data;
                })
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
</style>
