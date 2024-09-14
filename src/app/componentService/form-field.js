const normalInput = {
  key: '02d6a466ea29a450a8d7c4a17f002afd1dede881',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;

    return Promise.resolve();

    // const title = componentData.title || '标题';
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Medium' });
    // instance.children[1].children[1].children[0].characters = title;
  },
};

const normal_hasValue = {
  key: 'e0e64d76c1462f507918250182d7d1f9271e16e9',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].characters = componentData.title);
    componentData.value && (instance.children[2].children[0].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};

const normal_readonly = {
  key: '736ce2bfa796a5050e29d663421078e28b79ce89',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[0].children[0].characters = componentData.title);
    componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}

export default {
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0;

    if (componentData.readonly) {
      this.componentState = normal_readonly;
    } else if (componentData.disabled) {
      this.componentState = normal_hasValue;
    } else if (hasValue) {
      this.componentState = normal_hasValue;
    } else {
      // this.componentState = normalInput;
      this.componentState = normal_hasValue;
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
