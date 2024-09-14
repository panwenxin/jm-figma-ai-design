import componentMapService from '../app/componentService/index.js';

figma.showUI(__html__, {
  width: 360,
  height: 600,
});

figma.ui.onmessage = (msg) => {
  if (msg.type === 'send-user-message') {
    async function importNode() {
      const pageMinHeight = 812;
      const pageWidth = 375;
      const frameList = msg.data || [];
      let lastFigma;
      for (let j = 0; j < frameList.length; j++) {
        const frameItemData = frameList[j];
        const frame = figma.createFrame()
        lastFigma = frame;
        console.log('===frame', frame);

        frame.name = frameItemData.pageName || ('页面' + j);
        frame.resize(pageWidth, pageMinHeight);

        const waterfallFlowLayout = frameItemData.layout.reduce((res, curr) => {
          res = res.concat((curr.components || []).map(sub => {
            if (Number(frameItemData.mode) === 3) {
              sub.readonly = true;
            }
            return sub;
          }));
          return res;
        }, [])

        let y = 0;
        for (let i = 0; i < waterfallFlowLayout.length; i++) {
          const componentItem = waterfallFlowLayout[i];
          const componentService = componentMapService.getServiceByCompType(componentItem.type);
          if (componentService) {
            const componentKey = componentService.getComponentKey(componentItem);
            let importComponent = await figma.importComponentByKeyAsync(componentKey);
            const instance = importComponent.createInstance();
            // console.log(`===${componentItem.type} : instance`, instance);

            await componentService.setComponentData({
              componentData: componentItem,
              figma,
              instance,
              y
            });

            if (componentItem.type === 'base-buttonGroup') {
              // 先看看上面的元素加起来是否已经超过了页面最高高度
              if (y + instance.height > pageMinHeight) {
                instance.y = y;
                y += instance.height;
              } else {
                instance.y = pageMinHeight - instance.height;
              }
            } else {
              instance.y = y;
              y += instance.height;
            }
            frame.appendChild(instance);
          }
        }

        frame.resize(pageWidth, Math.max(y, pageMinHeight));

        figma.currentPage.appendChild(frame);

        // 切换生成出来的页面横坐标
        const page = figma.currentPage;
        if (page.children.length > 1) {
          let lastChild = page.children.length - 2;
          frame.x = page.children[lastChild].x + page.children[lastChild].width + 40;
        }
      }
      // 让页面定位到最后的一个元素
      figma.viewport.scrollAndZoomIntoView([lastFigma]);

      // figma.closePlugin();
    }
    importNode();
  }
};
