import { Component, Vue, Prop } from 'vue-property-decorator';
import { ButtonType, SizeType, ThemeType } from '@/models/enums';

@Component({
  name: 'VBtn',
})
export default class VBtn extends Vue {
  @Prop({ type: String }) protected label?: string;
  @Prop({
    default: ThemeType.DEFAULT,
    type: String,
    validator: (theme: ThemeType) => {
      return Object.values(ThemeType).indexOf(theme) > -1;
    },
  })
  protected theme?: ThemeType;
  @Prop({
    default: ButtonType.CONTAINED,
    type: String,
    validator: (variant: ButtonType) => {
      return Object.values(ButtonType).indexOf(variant) > -1;
    },
  })
  protected variant?: ButtonType;
  @Prop({
    default: SizeType.DEFAULT,
    type: String,
    validator: (size: SizeType) => {
      return Object.values(SizeType).indexOf(size) > -1;
    },
  })
  protected size?: SizeType;
  @Prop({ default: false, type: Boolean }) protected block?: boolean;
  @Prop() protected ariaLabel?: string;
  @Prop({ default: false, type: Boolean }) protected disabled?: boolean;
  @Prop() protected on: any;
}
