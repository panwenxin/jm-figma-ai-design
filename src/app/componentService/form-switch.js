
const normal = {
  key: '374e4f8ec3df4ec9242e1960a47566736a1b0912',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;
    return Promise.resolve();
  },
};
// 只读状态
const normal_readonly_hasValue = {
  // 偷懒了, 我这里直接用的field的只读组件
  key: '736ce2bfa796a5050e29d663421078e28b79ce89',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[0].children[0].characters = componentData.title);
    componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};

export default {
  componentState: null,
  getComponentKey: function (componentData) {
    // const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly_hasValue;
    } else {
      this.componentState = normal;
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
