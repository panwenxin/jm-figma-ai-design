import narBarService from './base-navBar.js';
import formFieldService from './form-field.js';
import formFileUploaderService from './form-fileUploader.js';
import formSinglePickerService from './form-singlePicker.js';
import formMultiPickerService from './form-multiPicker.js';
import formNumberService from './form-number.js';
import formRadioService from './form-radio.js';
import formTextareaService from './form-textarea.js';
import formStepperService from './form-stepper.js';
import formImageUploaderService from './form-imageUploader.js';
import formSwitchService from './form-switch.js';
import baseStepService from './base-step.js';
import baseButtonGroupService from './base-buttonGroup.js';
import baseProfileService from './base-profile.js';

export default {
  getServiceByCompType: (type) => {
    switch (type) {
      case 'base-navBar':
        return narBarService;
      case 'form-field':
        return formFieldService;
      case 'form-fileUploader':
        return formFileUploaderService;
      case 'form-singlePicker':
        return formSinglePickerService;
      case 'form-multiPicker':
        return formMultiPickerService;
      case 'form-number':
        return formNumberService;
      case 'form-radio':
        return formRadioService;
      case 'form-textarea':
        return formTextareaService;
      case 'form-imageUploader':
        return formImageUploaderService;
      case 'form-switch':
        return formSwitchService;
      case 'form-stepper':
        return formStepperService;
      case 'base-buttonGroup':
        return baseButtonGroupService;
      case 'base-profile':
        return baseProfileService;
      case 'base-step':
        return baseStepService;

      default:
        return null;
    }
  },
};
