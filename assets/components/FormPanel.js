console.log('Loading FormPanel.js');

import TextInput from './TextInput.js';
import DatePicker from './DatePicker.js';
import TransferList from './TransferList.js';

export default {
  name: 'FormPanel',
  components: {
    TextInput,
    DatePicker,
    TransferList
  },
  data() {
    return {
      form: {
        input: '',
        textarea: '',
        select: '',
        switch: false,
        date: '',
        upload: [],
        radio: '',
        checkbox: [],
        transfer: []
      },
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ],
      transferData: [
        { key: 1, label: 'Item 1' },
        { key: 2, label: 'Item 2' }
      ]
    };
  },
  styles:`.el-card {background-color: aliceblue;}`,
  template: `
    <el-card>
      <el-form :model="form" label-width="120px">
        <text-input
          v-model="form.input"
          label="Text Input"
          placeholder="Enter text"
        ></text-input>
        <text-input
          v-model="form.textarea"
          type="textarea"
          label="Textarea"
        ></text-input>
        <el-form-item label="Select">
          <el-select v-model="form.select" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Switch">
          <el-switch v-model="form.switch"></el-switch>
        </el-form-item>
        <date-picker
          v-model="form.date"
          label="Date Picker"
          placeholder="Pick a date"
        ></date-picker>
        <el-form-item label="Upload">
          <el-upload
            v-model:file-list="form.upload"
            action="#"
            multiple
          >
            <el-button type="primary">Click to upload</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="Radio">
          <el-radio-group v-model="form.radio">
            <el-radio label="1">Option 1</el-radio>
            <el-radio label="2">Option 2</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Checkbox">
          <el-checkbox-group v-model="form.checkbox">
            <el-checkbox label="A"></el-checkbox>
            <el-checkbox label="B"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <transfer-list
          v-model="form.transfer"
          :data="transferData"
          label="Transfer"
          :titles="['Available', 'Selected']"
        ></transfer-list>
      </el-form>
    </el-card>
  `
};