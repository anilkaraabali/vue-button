import {
    Component,
    Vue,
} from 'vue-property-decorator';
import AppButton from '@/components/common/app-button/app-button.component.vue';

@Component({
    name: 'page-showcase',
    components: {
        AppButton,
    },
})
export default class ShowcasePage extends Vue {
}
