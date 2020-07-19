import {
    Component,
    Vue,
} from 'vue-property-decorator';
import VBtn from '@/components/common/v-btn/VBtn.vue';
import VIcon from '@/components/common/v-icon/VIcon.vue';

@Component({
    name: 'page-showcase',
    components: {
        VBtn,
        VIcon,
    },
})
export default class ShowcasePage extends Vue {
}
