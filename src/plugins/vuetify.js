import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    }, theme: {
        themes: {
            light: {
                danger: '#f00',
                sucess: '#0f0',
            }
        }
    }
});
