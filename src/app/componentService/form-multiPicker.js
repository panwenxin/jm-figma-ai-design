
const normal_empty = {
  key: 'd87eff61a815096ac9b4c78fcb61f7637f179452',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;
    return Promise.resolve();
  },
};

const normal_hasValue = {
  key: 'b582da6f30f21625295be24b5df0698511150959',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    const titleCharactersObj = instance.children[1].children[0];
    titleCharactersObj.characters = title || titleCharactersObj.characters;

    // const valueCharactersObj = instance.children[2].children[0].children[0];
    // valueCharactersObj.characters = title || valueCharactersObj.characters

    return Promise.resolve();
  }
}


export default {
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_hasValue;
    } else if (componentData.disabled) {
      this.componentState = normal_hasValue;
    } else if(hasValue){
      this.componentState = normal_hasValue;
    } else if(!hasValue) {
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
