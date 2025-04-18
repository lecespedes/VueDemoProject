console.log('Loading DatePicker.js');

export default {
  name: 'DatePicker',
  props: {
    modelValue: {
      type: [String, Date],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Pick a date'
    }
  },
  emits: ['update:modelValue'],
  template: `
    <el-form-item :label="label">
      <el-date-picker
        :model-value="modelValue"
        type="date"
        :placeholder="placeholder"
        @update:model-value="$emit('update:modelValue', $event)"
      ></el-date-picker>
    </el-form-item>
  `
};