
export default {
  getComponentKey: (componentData) => {
    return '201c241d06f20bd51703204166a9d183a5981078';
  },

  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title || '标题';
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Medium' });
    instance.children[1].children[1].children[0].characters = title;
  },
};
