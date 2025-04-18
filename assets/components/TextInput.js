console.log('Loading TextInput.js');

export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text' // 'text' or 'textarea'
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  template: `
    <el-form-item :label="label">
      <el-input
        :type="type"
        :model-value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event)"
      ></el-input>
    </el-form-item>
  `
};