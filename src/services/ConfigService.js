
const pageUrls = {
    LOGIN_URL: '/login',
    HOME_URL: '/home',
    ABOUT_URL: '/about',
    VEHICLES: '/vehicles'
}

const appPages = [{
    url: pageUrls.HOME_URL,
    label: 'Home',
    showOnlyForLoggedInUser: true,
},{
    url: pageUrls.VEHICLES,
    label: 'Vehicles',
    showOnlyForLoggedInUser: true,
}, {
    url: pageUrls.ABOUT_URL,
    label: 'About',
    showOnlyForLoggedInUser: false,
}, {
    url: pageUrls.LOGIN_URL,
    label: 'Login',
    showOnlyForLoggedInUser: false,
}];


const ConfigService = {
    pageUrls: pageUrls,
    appPages: appPages
};

export default ConfigService;
