console.log('Loading TransferList.js');

export default {
  name: 'TransferList',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    titles: {
      type: Array,
      default: () => ['Available', 'Selected']
    }
  },
  emits: ['update:modelValue'],
  template: `
    <el-form-item :label="label">
      <el-transfer
        :model-value="modelValue"
        :data="data"
        :titles="titles"
        @update:model-value="$emit('update:modelValue', $event)"
      ></el-transfer>
    </el-form-item>
  `
};