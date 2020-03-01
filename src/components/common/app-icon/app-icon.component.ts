import {
    Component,
    Vue,
    Prop,
} from 'vue-property-decorator';
import { ThemeType, SizeType } from '@/models/enums/index';


@Component({
    name: 'app-icon',
})
export default class AppIcon extends Vue {
    @Prop({ type: String, required: true }) protected name?: string;
    @Prop({ default: ThemeType.LIGHT, type: String }) protected theme?: string;
    @Prop({ default: SizeType.DEFAULT, type: String }) protected size?: string;
}
