import {
    Component,
    Vue,
} from 'vue-property-decorator';
import AppButton from '@/components/common/app-button/app-button.component.vue';
import AppIcon from '@/components/common/app-icon/app-icon.component.vue';

@Component({
    name: 'page-showcase',
    components: {
        AppButton,
        AppIcon,
    },
})
export default class ShowcasePage extends Vue {
}
