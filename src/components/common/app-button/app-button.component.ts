import {
    Component,
    Vue,
    Prop,
} from 'vue-property-decorator';
import { ButtonType, ButtonSize } from '@/models/enums/index';

@Component({
    name: 'app-button',
})
export default class AppButton extends Vue {
    @Prop({ default: 'primary', type: String }) protected theme?: string;
    @Prop({ default: ButtonType.CONTAINED, type: String }) protected type?: string;
    @Prop({ default: ButtonSize.DEFAULT, type: String }) protected size?: string;
    @Prop({ type: Boolean }) protected block?: boolean;
    @Prop() protected label?: string | number;
    @Prop() protected ariaLabel?: string;
    @Prop({ type: Boolean }) protected disabled?: boolean;
}
