
// 两个按钮,左边次要按钮, 右边主要按钮
const normal_status_noFooterButton = {
  key: '17586d7f277f0b5b116cb885d918362c59b3df09',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: "PingFang SC", style: "Regular" });
    const profileData = componentData.data || {};
    profileData.title && ( instance.children[2].children[0].children[0].children[0].children[0].characters = profileData.title);
    profileData.badge && ( instance.children[2].children[0].children[1].children[0].children[0].characters = profileData.badge);
    profileData.desc && profileData.desc[0] && ( instance.children[2].children[0].children[2].children[0].children[0].children[0].characters = profileData.desc[0]);
    return Promise.resolve();
  },
};


export default {
  componentState: null,
  getComponentKey: function (componentData) {
    if (componentData.footerButton && componentData.footerButton.length > 0) {
      this.componentState = normal_status_noFooterButton;
    } else {
      this.componentState = normal_status_noFooterButton;
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
