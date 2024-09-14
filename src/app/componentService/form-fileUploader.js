
const normal_dataCount2 = {
  key: 'd863ab5c44b919d80e7c5bd96e2ce03a93f729b7',
  setComponentData: async ({ componentData, figma, instance }) => {

    const title = componentData.title;
    const oldCharacters = instance.children[1].children[0].children[0].characters;
    instance.children[1].children[0].children[0].characters = title || oldCharacters;
    return Promise.resolve();
    
  },
};

const normal_readonly_dataCount2 = {
  key: 'f96d0c9a993c5e0d0a53f74fd2435cb8bbf72112',
  setComponentData: async ({ componentData, figma, instance }) => {
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].children[0].characters = componentData.title);
    // componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}


export default {
  componentState: null,
  getComponentKey: function (componentData) {
    if (componentData.readonly) {
      this.componentState = normal_readonly_dataCount2;
    } else if (componentData.disabled) {
      this.componentState = normal_dataCount2;
    } else {
      this.componentState = normal_dataCount2;
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
