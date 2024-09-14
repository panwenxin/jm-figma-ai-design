
const normal_dataCount2 = {
  key: '98a04ff729bf648843dee3062750dae994576ce5',
  setComponentData: async ({ componentData, figma, instance }) => {
    componentData.title && ( instance.children[1].children[0].characters = componentData.title)
    return Promise.resolve();
    
  },
};
const normal_readonly_dataCount4 = {
  key: '781f97bb65e464da0ac356150a0edf394996df9e',
  setComponentData: async ({ componentData, figma, instance }) => {
    // componentData.title && ( instance.children[1].children[0].characters = componentData.title)
    return Promise.resolve();
  },
};


export default {
  componentState: null,
  getComponentKey: function (componentData) {
    if (componentData.readonly) {
      this.componentState = normal_readonly_dataCount4;
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
