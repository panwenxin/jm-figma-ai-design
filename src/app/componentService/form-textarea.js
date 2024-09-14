const normal_empty = {
  key: '819d9b8e826698d1c6f4747d892edf4c5da787b8',
  setComponentData: async ({ componentData, figma, instance }) => {

    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    title && (instance.children[1].children[0].characters = title);

    return Promise.resolve();
  },
};
const normal_hasValue = {
  key: '6e1037e55b7cb19f6fd4965ae2207ad60476fa67',
  setComponentData: async ({ componentData, figma, instance }) => {

    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].characters = componentData.title);

    const hasValue = componentData.value || componentData.value === 0;
    hasValue && (instance.children[2].children[0].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};


const normal_readonly = {
  key: '9244ccc80424bf83c0813e6d6aad12136d7da7b8',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    // componentData.title && (instance.children[0].children[0].characters = componentData.title);
    // componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}

export default {
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly;
    } else if (componentData.disabled) {
      this.componentState = normal_empty;
    } else {
      this.componentState = hasValue ? normal_hasValue : normal_empty;
    }
    console.log('this.componentState', this.componentState);
    return this.componentState ? this.componentState.key : null;
  },

  setComponentData: async function (params) {
    if (this.componentState) {
      return await this.componentState.setComponentData(params);
    }
  },
};
