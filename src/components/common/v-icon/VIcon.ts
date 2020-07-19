import { Component, Vue, Prop } from 'vue-property-decorator';
import { ThemeType, SizeType } from '@/models/enums';

@Component({
  name: 'VIcon',
})
export default class VIcon extends Vue {
  @Prop({ type: String, required: true }) protected name!: string;
  @Prop({
    default: ThemeType.LIGHT,
    type: String,
    validator: (theme: ThemeType) => {
      return Object.values(ThemeType).indexOf(theme) > -1;
    },
  })
  protected theme?: ThemeType;
  @Prop({
    default: SizeType.DEFAULT,
    type: String,
    validator: (size: SizeType) => {
      return Object.values(SizeType).indexOf(size) > -1;
    },
  })
  protected size?: SizeType;
}
