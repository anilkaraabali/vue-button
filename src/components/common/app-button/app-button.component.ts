import { Component, Vue, Prop } from 'vue-property-decorator';
import { ButtonType, SizeType, ThemeType } from '@/models/enums/index';

@Component({
  name: 'app-button',
})
export default class AppButton extends Vue {
  @Prop({ default: ThemeType.DEFAULT, type: String }) protected theme: string;
  @Prop({ default: ButtonType.CONTAINED, type: String }) protected type: string;
  @Prop({ default: SizeType.DEFAULT, type: String }) protected size: string;
  @Prop({ default: false, type: Boolean }) protected block: boolean;
  @Prop() protected label: string | number;
  @Prop() protected ariaLabel: string;
  @Prop({ default: false, type: Boolean }) protected disabled: boolean;
  @Prop() protected on: any;
}
