const normal_empty = {
  key: '196d0878a45573765014fc952d4d31006bf09a19',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    title && (instance.children[1].children[0].characters = title);

    return Promise.resolve();
  },
};
// 没数据 有单元
const normal_empty_unit = {
  key: 'a769d555e037268bd91a2dd0bcd8b0917f941881',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    title && (instance.children[1].children[0].characters = title);

    componentData.unit && (instance.children[2].children[0].children[1].characters = componentData.unit);
    return Promise.resolve();
  },
};

// 只读状态 有值 有单元
const normal_readonly_hasValue_unit = {
  key: '46dd5009d849b327594214e1e70ae8a4c935c5d3',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[0].children[0].characters = componentData.title);
    componentData.value && (instance.children[1].children[0].children[0].characters = componentData.value);
    componentData.unit && (instance.children[1].children[0].children[1].characters = componentData.unit);
    return Promise.resolve();
  },
};

// 只读状态 有值 没单元
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

// 有数据 没单元
const normal_hasValue = {
  // 我这里偷懒了 直接用的field的
  key: 'e0e64d76c1462f507918250182d7d1f9271e16e9',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].characters = componentData.title);
    componentData.value && (instance.children[2].children[0].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};

// 有数据 有单元
const normal_hasValue_unit = {
  key: '95f1c480c4c4a0e11cea069aae763029e0cd9840',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    title && (instance.children[1].children[0].characters = title);

    const hasValue = componentData.value || componentData.value === 0;
    hasValue && (instance.children[2].children[0].children[0].characters = componentData.value);
    componentData.unit && (instance.children[2].children[0].children[1].characters = componentData.unit);
    return Promise.resolve();
  },
};

export default {
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0;

    // normal_readonly_hasValue_unit
    if (componentData.readonly) {
      this.componentState = hasValue ? normal_readonly_hasValue_unit : normal_readonly_hasValue;
    } else if (componentData.disabled) {
      this.componentState = normal_empty;
    } else {
      if (componentData.unit) {
        this.componentState = hasValue ? normal_hasValue_unit : normal_empty_unit;
      } else {
        this.componentState = hasValue ? normal_hasValue : normal_empty;
      }
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
