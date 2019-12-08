<template>
    <div>
        <ms-nav></ms-nav>
        <div class="container-hero">
            <div class="container">
                <div class="text-left">
                    <div style="margin-top: 4rem;"></div>
                    <el-tabs :tab-position="tabPosition" style="width: 100%;">
                        <el-tab-pane label="User">
                            <div class="white-box">
                                <h2>User option's</h2>
                                <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                                    <el-form-item label="Username">
                                        <el-input v-model="formLabelAlign.username"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Sponsor">
                                        <el-input v-model="formLabelAlign.sponsor"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Email">
                                        <el-input v-model="formLabelAlign.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="First name">
                                        <el-input v-model="formLabelAlign.firstName"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Second name">
                                        <el-input v-model="formLabelAlign.secondName"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Birthday">
                                        <el-date-picker
                                            v-model="formLabelAlign.birthday"
                                            type="date"
                                            placeholder="Pick a birthday">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="Phone number">
                                        <el-input v-model="formLabelAlign.phoneNumber" type="tel"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Phone number #2">
                                        <el-input v-model="formLabelAlign.phoneNumber2" type="tel"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Skype">
                                        <el-input v-model="formLabelAlign.skype"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Country">
                                        <el-input v-model="formLabelAlign.country"></el-input>
                                    </el-form-item>
                                    <el-form-item label="State">
                                        <el-input v-model="formLabelAlign.state"></el-input>
                                    </el-form-item>
                                    <el-form-item label="City">
                                        <el-input v-model="formLabelAlign.city"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Address">
                                        <el-input v-model="formLabelAlign.address"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Zipcode">
                                        <el-input v-model="formLabelAlign.zipCode"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Site">
                                        <el-input placeholder="Please input" v-model="formLabelAlign.site"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Odnoklassniki">
                                        <el-input placeholder="Please input" v-model="formLabelAlign.odnoklassniki"></el-input>
                                    </el-form-item>
                                    <el-form-item label="VK">
                                        <el-input placeholder="Please input" v-model="formLabelAlign.vk"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Facebook">
                                        <el-input placeholder="Please input" v-model="formLabelAlign.fb"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Youtube">
                                        <el-input placeholder="Please input" v-model="formLabelAlign.youtube"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Auto extension BS">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.autoExtensionBS"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="Show mobile">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.showMobile"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="Show email">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.showEmail"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="Show name">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.showName"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="Delivery email">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.deliveryEMail"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="Delivery sms">
                                        <el-switch
                                            style="display: block"
                                            v-model="formLabelAlign.deliverySMS"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-button type="primary" @click="updateMe">Update profile</el-button>
                                </el-form>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Password">
                            <div class="white-box">
                                <h2>Change password</h2>
                                <el-form :label-position="labelPosition" label-width="100px" :model="passwordForm">
                                    <el-form-item label="Old password">
                                        <el-input type="password" v-model="passwordForm.oldPassword" autocomplete="off" show-password></el-input>
                                    </el-form-item>
                                    <el-form-item label="New password">
                                        <el-input type="password" v-model="passwordForm.newPassword" autocomplete="off" show-password></el-input>
                                    </el-form-item>
                                    <el-form-item label="Type">
                                        <el-switch
                                            v-model="passwordForm.type"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            active-text="Finance password"
                                            inactive-text="Cabinet password"
                                            :active-value="1"
                                            :inactive-value="0">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="changePassword">Submit</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div style="margin-bottom: 4rem;"></div>
                    <cab-nav></cab-nav>
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
                user: [],
                tabPosition: 'left',
                labelPosition: 'top',
                formLabelAlign: {
                    token: localStorage.getItem('token'),
                    username: "", // логин пользователя
                    sponsor: "", // логин или номер счета пользователя
                    email: "", // email пользователя
                    firstName: "", // имя пользователя
                    secondName: "", // фамилия пользователя
                    phoneNumber: "", // номер телефона
                    birthday: "", // дата рождения
                    country: "", // код страны пользователя в двухбуквенном формате ISO, по умолчанию «RU»
                    phoneNumber2: "", // номер телефона
                    skype: "", // логин пользователя Skype
                    state: "", // регион/штат/область/край
                    city: "", // город
                    address: "", // адрес
                    zipCode: "", // почтовый индекс
                    autoExtensionBS: 0, // авто продление BS (0 — выключено, 1 — включено)
                    showMobile: 0, // показывать мобильный (0 — нет, 1 — да)
                    showEmail: 0, // показывать email (0 — нет, 1 — да);
                    showName: 0, // показывать имя (0 — нет, 1 — да);
                    deliveryEMail: 0, // рассылка писем (0 — нет, 1 — да);
                    deliverySMS: 0, // рассылка СМС (0 — нет, 1 — да);
                    site: null, // ссылка на сайт
                    odnoklassniki: null, // ссылка на одноклассники
                    vk: null, // ссылка на вконтакте
                    fb: null, // ссылка на facebook
                    youtube: null, // ссылка на youtube
                },
                passwordForm: {
                    token: localStorage.getItem('token'),
                    oldPassword: "",
                    newPassword: "",
                    type: 0
                }
            }
        },
        components: {
            Logo,
            'ms-nav': MainNavbar,
            'cab-nav': CabNav
        },
        methods: {
            updateMe: function() {
                this.$axios.put('http://165.22.199.57/user/', this.formLabelAlign)
                    .then((res) => {
                        this.$notify({
                            title: 'Success',
                            message: 'You have successfully updated your profile.',
                            type: 'success'
                        });
                    })
            },
            changePassword: function() {
                this.$axios.post('http://165.22.199.57/user/changePassword/', this.passwordForm)
                    .then(() => {
                        this.$notify({
                            title: 'Success',
                            message: 'You have successfully updated your password.',
                            type: 'success'
                        });
                    })
            }
        },
        mounted() {
            this.token = localStorage.getItem('token');
            if (!this.token) {
                this.$router.push({path: "/"});
            }
            this.$axios.get('http://165.22.199.57/user/', {
                    params: {
                        token: localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.user = res.data;

                    this.formLabelAlign.sponsor = this.user.sponsor.firstName;
                    this.formLabelAlign.username = this.user.username;
                    this.formLabelAlign.email = this.user.email;
                    this.formLabelAlign.firstName = this.user.firstName;
                    this.formLabelAlign.secondName = this.user.secondName;
                    this.formLabelAlign.country = this.user.country;
                    this.formLabelAlign.phoneNumber = this.user.phoneNumber;

                    this.formLabelAlign.phoneNumber2 = this.user.phoneNumber2;
                    this.formLabelAlign.birthday = this.user.birthday;
                    this.formLabelAlign.skype = this.user.skype;
                    this.formLabelAlign.state = this.user.state;
                    this.formLabelAlign.city = this.user.city;
                    this.formLabelAlign.address = this.user.address;
                    this.formLabelAlign.zipCode = this.user.zipCode;

                    this.formLabelAlign.site = this.user.links.site;
                    this.formLabelAlign.odnoklassniki = this.user.links.odnoklassniki;
                    this.formLabelAlign.vk = this.user.links.vk;
                    this.formLabelAlign.fb = this.user.links.fb;
                    this.formLabelAlign.youtube = this.user.links.youtube;

                    this.formLabelAlign.autoExtensionBS = this.user.settings.autoExtensionBS;
                    this.formLabelAlign.showMobile = this.user.settings.showMobile;
                    this.formLabelAlign.showEmail = this.user.settings.showEmail;
                    this.formLabelAlign.showName = this.user.settings.showName;
                    this.formLabelAlign.deliveryEMail = this.user.settings.deliveryEMail;
                    this.formLabelAlign.deliverySMS = this.user.settings.deliverySMS;
                })
        }
    }
</script>

<style>
    .text-left {
        text-align: left;
    }
    .container {
        max-width: 1200px;
        margin: 0px auto;
        display: block;
        width: 100%;
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
    .white-box {
        padding: 0px 2rem;
    }
</style>
