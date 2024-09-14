export default {
  getComponentKey: (componentData) => {
    return 'bf8caf5cf5ec042b2ce162a43a66dffefa438e75';
  },

  setComponentData: async ({ componentData, figma, instance }) => {
    let stepData = [];
    const baseSteps = ['节点12', '节点2', '节点3', '节点4', '节点5'];
    if (Array.isArray(componentData.data)) {
      stepData = componentData.data
        .slice(0, 5)
        .concat(baseSteps.slice(componentData.length, baseSteps.length));
    } else {
      stepData = baseSteps;
    }

    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Medium' });
    // 写for循环会渲染不出来,就得这么一个一个写才行
    instance.children[0].children[0].children[1].characters = stepData[0];
    instance.children[1].children[0].children[1].characters = stepData[1];
    instance.children[2].children[0].children[1].characters = stepData[2];
    instance.children[3].children[0].children[1].characters = stepData[3];
    instance.children[4].children[0].children[1].characters = stepData[4];

    return Promise.resolve();
  },
};
