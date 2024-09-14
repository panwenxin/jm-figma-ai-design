
// 有数据 没单元
const normal_hasValue = {
  key: '7d0532faefe58fe76f56800e9fea3f0383104299',
  setComponentData: async ({ componentData, figma, instance }) => {
    // const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].children[0].characters = componentData.title);

    componentData.value && (instance.children[2].children[0].children[0].children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};

// 有数据 有单元
const normal_hasValue_unit = {
  key: '243840d34fd264e9675ad3b9911b753fb2d3715c',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].children[0].characters = componentData.title);

    const hasValue = componentData.value || componentData.value === 0;
    hasValue && (instance.children[2].children[0].children[0].children[1].children[0].characters = componentData.value);
    
    componentData.unit && (instance.children[2].children[0].children[1].characters = componentData.unit);
    return Promise.resolve();
  },
};


// 只读状态 有值 有单元
const normal_readonly_hasValue_unit = {
  // 偷懒了, 我这里直接用的number的只读组件
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

export default {
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0;
    if (componentData.readonly) {
      this.componentState = componentData.unit ? normal_readonly_hasValue_unit : normal_readonly_hasValue;
    } else if (componentData.disabled) {
      this.componentState = normal_hasValue;
    } else {
      if(componentData.unit) {
        this.componentState = hasValue ? normal_hasValue_unit : normal_empty_unit;
      } else {
        this.componentState = hasValue ? normal_hasValue : normal_hasValue;
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
