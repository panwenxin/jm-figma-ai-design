
// 两个按钮,左边次要按钮, 右边主要按钮
const normal_dataCount2 = {
  key: '29af1429eef533d2791c9396bf3bab91310f9277',
  setComponentData: async ({ componentData, figma, instance }) => {
    // children[0].children[0].children[0].characters
    // const buttonData = componentData.data  ["取消", "保存"];
    let buttonData = [];
    if(Array.isArray(componentData.data)) {
      buttonData = componentData.data.slice(0,2).concat(["取消", "保存"].slice(componentData.length, 2))  ;
    } else {
      buttonData = ["取消", "保存"]
    };
    // children[0].children[0].children[0].characters
    instance.children[0].children[0].children[0].characters = buttonData[0];
    instance.children[0].children[1].children[0].characters = buttonData[1];
    return Promise.resolve();
  },
};


export default {
  componentState: null,
  getComponentKey: function (componentData) {
    if (componentData.readonly) {
      this.componentState = normal_dataCount2;
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
