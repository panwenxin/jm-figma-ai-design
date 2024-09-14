
const normal_empty = {
  key: '6c704058983ad8a94d21daa85c37267489c3985e',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;
    return Promise.resolve();
  },
};

const normal_hasValue = {
  key: 'cca8fd8d8f79c14ca9b0e85c8d2ebe72894060ba',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    const titleCharactersObj = instance.children[1].children[0];
    titleCharactersObj.characters = title || titleCharactersObj.characters;
    return Promise.resolve();
  }
}
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
    const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly_hasValue;
    } else if (componentData.disabled) {
      this.componentState = normal_hasValue;
    } else {
      // 没时间翻译那么多了, 先将就用有数据的组件顶上
      // this.componentState = normal_empty;
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
