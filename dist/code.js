/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/componentService/base-buttonGroup.js":
/*!******************************************************!*\
  !*** ./src/app/componentService/base-buttonGroup.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/base-navBar.js":
/*!*************************************************!*\
  !*** ./src/app/componentService/base-navBar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getComponentKey: (componentData) => {
    return '201c241d06f20bd51703204166a9d183a5981078';
  },

  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title || '标题';
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Medium' });
    instance.children[1].children[1].children[0].characters = title;
  },
});


/***/ }),

/***/ "./src/app/componentService/base-profile.js":
/*!**************************************************!*\
  !*** ./src/app/componentService/base-profile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/base-step.js":
/*!***********************************************!*\
  !*** ./src/app/componentService/base-step.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-field.js":
/*!************************************************!*\
  !*** ./src/app/componentService/form-field.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const normalInput = {
  key: '02d6a466ea29a450a8d7c4a17f002afd1dede881',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;

    return Promise.resolve();

    // const title = componentData.title || '标题';
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Medium' });
    // instance.children[1].children[1].children[0].characters = title;
  },
};

const normal_hasValue = {
  key: 'e0e64d76c1462f507918250182d7d1f9271e16e9',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].characters = componentData.title);
    componentData.value && (instance.children[2].children[0].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};

const normal_readonly = {
  key: '736ce2bfa796a5050e29d663421078e28b79ce89',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[0].children[0].characters = componentData.title);
    componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0;

    if (componentData.readonly) {
      this.componentState = normal_readonly;
    } else if (componentData.disabled) {
      this.componentState = normal_hasValue;
    } else if (hasValue) {
      this.componentState = normal_hasValue;
    } else {
      // this.componentState = normalInput;
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
});


/***/ }),

/***/ "./src/app/componentService/form-fileUploader.js":
/*!*******************************************************!*\
  !*** ./src/app/componentService/form-fileUploader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const normal_dataCount2 = {
  key: 'd863ab5c44b919d80e7c5bd96e2ce03a93f729b7',
  setComponentData: async ({ componentData, figma, instance }) => {

    const title = componentData.title;
    const oldCharacters = instance.children[1].children[0].children[0].characters;
    instance.children[1].children[0].children[0].characters = title || oldCharacters;
    return Promise.resolve();
    
  },
};

const normal_readonly_dataCount2 = {
  key: 'f96d0c9a993c5e0d0a53f74fd2435cb8bbf72112',
  setComponentData: async ({ componentData, figma, instance }) => {
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].children[0].characters = componentData.title);
    // componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  componentState: null,
  getComponentKey: function (componentData) {
    if (componentData.readonly) {
      this.componentState = normal_readonly_dataCount2;
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
});


/***/ }),

/***/ "./src/app/componentService/form-imageUploader.js":
/*!********************************************************!*\
  !*** ./src/app/componentService/form-imageUploader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-multiPicker.js":
/*!******************************************************!*\
  !*** ./src/app/componentService/form-multiPicker.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-number.js":
/*!*************************************************!*\
  !*** ./src/app/componentService/form-number.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-radio.js":
/*!************************************************!*\
  !*** ./src/app/componentService/form-radio.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-singlePicker.js":
/*!*******************************************************!*\
  !*** ./src/app/componentService/form-singlePicker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const normal_empty = {
  key: 'caef12a71923034e6df49f3acdd2a09d50285a94',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;
    return Promise.resolve();
  },
};

const normal_hasValue = {
  key: '7672df2f867e4569268574089a156139112dbf01',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    const titleCharactersObj = instance.children[1].children[0];
    titleCharactersObj.characters = title || titleCharactersObj.characters;

    const valueCharactersObj = instance.children[2].children[0].children[0];
    valueCharactersObj.characters = title || valueCharactersObj.characters

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly_hasValue;
    } else if (componentData.disabled) {
      this.componentState = normal_empty;
    } else {
      this.componentState = hasValue ? normal_hasValue : normal_empty;
    }
    return this.componentState ? this.componentState.key : null;
  },

  setComponentData: async function (params) {
    if (this.componentState) {
      return await this.componentState.setComponentData(params);
    }
  },
});


/***/ }),

/***/ "./src/app/componentService/form-stepper.js":
/*!**************************************************!*\
  !*** ./src/app/componentService/form-stepper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});


/***/ }),

/***/ "./src/app/componentService/form-switch.js":
/*!*************************************************!*\
  !*** ./src/app/componentService/form-switch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const normal = {
  key: '374e4f8ec3df4ec9242e1960a47566736a1b0912',
  setComponentData: async ({ componentData, figma, instance }) => {
    const title = componentData.title;
    // await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    const oldCharacters = instance.children[1].children[0].characters;
    instance.children[1].children[0].characters = title || oldCharacters;
    return Promise.resolve();
  },
};
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  componentState: null,
  getComponentKey: function (componentData) {
    // const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly_hasValue;
    } else {
      this.componentState = normal;
    }
    console.log('this.componentState', this.componentState);
    return this.componentState ? this.componentState.key : null;
  },

  setComponentData: async function (params) {
    if (this.componentState) {
      return await this.componentState.setComponentData(params);
    }
  },
});


/***/ }),

/***/ "./src/app/componentService/form-textarea.js":
/*!***************************************************!*\
  !*** ./src/app/componentService/form-textarea.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const normal_empty = {
  key: '819d9b8e826698d1c6f4747d892edf4c5da787b8',
  setComponentData: async ({ componentData, figma, instance }) => {

    const title = componentData.title;
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    title && (instance.children[1].children[0].characters = title);

    return Promise.resolve();
  },
};
const normal_hasValue = {
  key: '6e1037e55b7cb19f6fd4965ae2207ad60476fa67',
  setComponentData: async ({ componentData, figma, instance }) => {

    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    componentData.title && (instance.children[1].children[0].characters = componentData.title);

    const hasValue = componentData.value || componentData.value === 0;
    hasValue && (instance.children[2].children[0].children[0].characters = componentData.value);
    return Promise.resolve();
  },
};


const normal_readonly = {
  key: '9244ccc80424bf83c0813e6d6aad12136d7da7b8',
  setComponentData: async ({ componentData, figma, instance }) => {
    await figma.loadFontAsync({ family: 'PingFang SC', style: 'Regular' });
    // componentData.title && (instance.children[0].children[0].characters = componentData.title);
    // componentData.value && (instance.children[1].children[0].characters = componentData.value);
    return Promise.resolve();
  },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  componentState: null,
  getComponentKey: function (componentData) {
    const hasValue = !!componentData.value || componentData.value === 0
    if (componentData.readonly) {
      this.componentState = normal_readonly;
    } else if (componentData.disabled) {
      this.componentState = normal_empty;
    } else {
      this.componentState = hasValue ? normal_hasValue : normal_empty;
    }
    console.log('this.componentState', this.componentState);
    return this.componentState ? this.componentState.key : null;
  },

  setComponentData: async function (params) {
    if (this.componentState) {
      return await this.componentState.setComponentData(params);
    }
  },
});


/***/ }),

/***/ "./src/app/componentService/index.js":
/*!*******************************************!*\
  !*** ./src/app/componentService/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_navBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-navBar.js */ "./src/app/componentService/base-navBar.js");
/* harmony import */ var _form_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-field.js */ "./src/app/componentService/form-field.js");
/* harmony import */ var _form_fileUploader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-fileUploader.js */ "./src/app/componentService/form-fileUploader.js");
/* harmony import */ var _form_singlePicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-singlePicker.js */ "./src/app/componentService/form-singlePicker.js");
/* harmony import */ var _form_multiPicker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-multiPicker.js */ "./src/app/componentService/form-multiPicker.js");
/* harmony import */ var _form_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-number.js */ "./src/app/componentService/form-number.js");
/* harmony import */ var _form_radio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-radio.js */ "./src/app/componentService/form-radio.js");
/* harmony import */ var _form_textarea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-textarea.js */ "./src/app/componentService/form-textarea.js");
/* harmony import */ var _form_stepper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-stepper.js */ "./src/app/componentService/form-stepper.js");
/* harmony import */ var _form_imageUploader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-imageUploader.js */ "./src/app/componentService/form-imageUploader.js");
/* harmony import */ var _form_switch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-switch.js */ "./src/app/componentService/form-switch.js");
/* harmony import */ var _base_step_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./base-step.js */ "./src/app/componentService/base-step.js");
/* harmony import */ var _base_buttonGroup_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./base-buttonGroup.js */ "./src/app/componentService/base-buttonGroup.js");
/* harmony import */ var _base_profile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./base-profile.js */ "./src/app/componentService/base-profile.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getServiceByCompType: (type) => {
    switch (type) {
      case 'base-navBar':
        return _base_navBar_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      case 'form-field':
        return _form_field_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      case 'form-fileUploader':
        return _form_fileUploader_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      case 'form-singlePicker':
        return _form_singlePicker_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      case 'form-multiPicker':
        return _form_multiPicker_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      case 'form-number':
        return _form_number_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      case 'form-radio':
        return _form_radio_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      case 'form-textarea':
        return _form_textarea_js__WEBPACK_IMPORTED_MODULE_7__["default"];
      case 'form-imageUploader':
        return _form_imageUploader_js__WEBPACK_IMPORTED_MODULE_9__["default"];
      case 'form-switch':
        return _form_switch_js__WEBPACK_IMPORTED_MODULE_10__["default"];
      case 'form-stepper':
        return _form_stepper_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      case 'base-buttonGroup':
        return _base_buttonGroup_js__WEBPACK_IMPORTED_MODULE_12__["default"];
      case 'base-profile':
        return _base_profile_js__WEBPACK_IMPORTED_MODULE_13__["default"];
      case 'base-step':
        return _base_step_js__WEBPACK_IMPORTED_MODULE_11__["default"];

      default:
        return null;
    }
  },
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_componentService_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/componentService/index.js */ "./src/app/componentService/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, {
    width: 360,
    height: 600,
});
figma.ui.onmessage = (msg) => {
    if (msg.type === 'send-user-message') {
        function importNode() {
            return __awaiter(this, void 0, void 0, function* () {
                const pageMinHeight = 812;
                const pageWidth = 375;
                const frameList = msg.data || [];
                let lastFigma;
                for (let j = 0; j < frameList.length; j++) {
                    const frameItemData = frameList[j];
                    const frame = figma.createFrame();
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
                    }, []);
                    let y = 0;
                    for (let i = 0; i < waterfallFlowLayout.length; i++) {
                        const componentItem = waterfallFlowLayout[i];
                        const componentService = _app_componentService_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].getServiceByCompType(componentItem.type);
                        if (componentService) {
                            const componentKey = componentService.getComponentKey(componentItem);
                            let importComponent = yield figma.importComponentByKeyAsync(componentKey);
                            const instance = importComponent.createInstance();
                            yield componentService.setComponentData({
                                componentData: componentItem,
                                figma,
                                instance,
                                y
                            });
                            if (componentItem.type === 'base-buttonGroup') {
                                if (y + instance.height > pageMinHeight) {
                                    instance.y = y;
                                    y += instance.height;
                                }
                                else {
                                    instance.y = pageMinHeight - instance.height;
                                }
                            }
                            else {
                                instance.y = y;
                                y += instance.height;
                            }
                            frame.appendChild(instance);
                        }
                    }
                    frame.resize(pageWidth, Math.max(y, pageMinHeight));
                    figma.currentPage.appendChild(frame);
                    const page = figma.currentPage;
                    if (page.children.length > 1) {
                        let lastChild = page.children.length - 2;
                        frame.x = page.children[lastChild].x + page.children[lastChild].width + 40;
                    }
                }
                figma.viewport.scrollAndZoomIntoView([lastFigma]);
            });
        }
        importNode();
    }
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9iYXNlLWJ1dHRvbkdyb3VwLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9iYXNlLW5hdkJhci5qcyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvYXBwL2NvbXBvbmVudFNlcnZpY2UvYmFzZS1wcm9maWxlLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9iYXNlLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRTZXJ2aWNlL2Zvcm0tZmllbGQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRTZXJ2aWNlL2Zvcm0tZmlsZVVwbG9hZGVyLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9mb3JtLWltYWdlVXBsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRTZXJ2aWNlL2Zvcm0tbXVsdGlQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRTZXJ2aWNlL2Zvcm0tbnVtYmVyLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9mb3JtLXJhZGlvLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9mb3JtLXNpbmdsZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvYXBwL2NvbXBvbmVudFNlcnZpY2UvZm9ybS1zdGVwcGVyLmpzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9hcHAvY29tcG9uZW50U2VydmljZS9mb3JtLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvYXBwL2NvbXBvbmVudFNlcnZpY2UvZm9ybS10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvYXBwL2NvbXBvbmVudFNlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8g5Lik5Liq5oyJ6ZKuLOW3pui+ueasoeimgeaMiemSriwg5Y+z6L655Li76KaB5oyJ6ZKuXG5jb25zdCBub3JtYWxfZGF0YUNvdW50MiA9IHtcbiAga2V5OiAnMjlhZjE0MjllZWY1MzNkMjc5MWM5Mzk2YmYzYmFiOTEzMTBmOTI3NycsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgLy8gY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVyc1xuICAgIC8vIGNvbnN0IGJ1dHRvbkRhdGEgPSBjb21wb25lbnREYXRhLmRhdGEgIFtcIuWPlua2iFwiLCBcIuS/neWtmFwiXTtcbiAgICBsZXQgYnV0dG9uRGF0YSA9IFtdO1xuICAgIGlmKEFycmF5LmlzQXJyYXkoY29tcG9uZW50RGF0YS5kYXRhKSkge1xuICAgICAgYnV0dG9uRGF0YSA9IGNvbXBvbmVudERhdGEuZGF0YS5zbGljZSgwLDIpLmNvbmNhdChbXCLlj5bmtohcIiwgXCLkv53lrZhcIl0uc2xpY2UoY29tcG9uZW50RGF0YS5sZW5ndGgsIDIpKSAgO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25EYXRhID0gW1wi5Y+W5raIXCIsIFwi5L+d5a2YXCJdXG4gICAgfTtcbiAgICAvLyBjaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzXG4gICAgaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGJ1dHRvbkRhdGFbMF07XG4gICAgaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGJ1dHRvbkRhdGFbMV07XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudFN0YXRlOiBudWxsLFxuICBnZXRDb21wb25lbnRLZXk6IGZ1bmN0aW9uIChjb21wb25lbnREYXRhKSB7XG4gICAgaWYgKGNvbXBvbmVudERhdGEucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfZGF0YUNvdW50MjtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudERhdGEuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfZGF0YUNvdW50MjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9kYXRhQ291bnQyO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5jb21wb25lbnRTdGF0ZScsIHRoaXMuY29tcG9uZW50U3RhdGUpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFN0YXRlID8gdGhpcy5jb21wb25lbnRTdGF0ZS5rZXkgOiBudWxsO1xuICB9LFxuXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY29tcG9uZW50U3RhdGUuc2V0Q29tcG9uZW50RGF0YShwYXJhbXMpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q29tcG9uZW50S2V5OiAoY29tcG9uZW50RGF0YSkgPT4ge1xuICAgIHJldHVybiAnMjAxYzI0MWQwNmYyMGJkNTE3MDMyMDQxNjZhOWQxODNhNTk4MTA3OCc7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGUgfHwgJ+agh+mimCc7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdNZWRpdW0nIH0pO1xuICAgIGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgfSxcbn07XG4iLCJcbi8vIOS4pOS4quaMiemSrizlt6bovrnmrKHopoHmjInpkq4sIOWPs+i+ueS4u+imgeaMiemSrlxuY29uc3Qgbm9ybWFsX3N0YXR1c19ub0Zvb3RlckJ1dHRvbiA9IHtcbiAga2V5OiAnMTc1ODZkN2YyNzdmMGI1YjExNmNiODg1ZDkxODM2MmM1OWIzZGYwOScsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJQaW5nRmFuZyBTQ1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgY29uc3QgcHJvZmlsZURhdGEgPSBjb21wb25lbnREYXRhLmRhdGEgfHwge307XG4gICAgcHJvZmlsZURhdGEudGl0bGUgJiYgKCBpbnN0YW5jZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gcHJvZmlsZURhdGEudGl0bGUpO1xuICAgIHByb2ZpbGVEYXRhLmJhZGdlICYmICggaW5zdGFuY2UuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IHByb2ZpbGVEYXRhLmJhZGdlKTtcbiAgICBwcm9maWxlRGF0YS5kZXNjICYmIHByb2ZpbGVEYXRhLmRlc2NbMF0gJiYgKCBpbnN0YW5jZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gcHJvZmlsZURhdGEuZGVzY1swXSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudFN0YXRlOiBudWxsLFxuICBnZXRDb21wb25lbnRLZXk6IGZ1bmN0aW9uIChjb21wb25lbnREYXRhKSB7XG4gICAgaWYgKGNvbXBvbmVudERhdGEuZm9vdGVyQnV0dG9uICYmIGNvbXBvbmVudERhdGEuZm9vdGVyQnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfc3RhdHVzX25vRm9vdGVyQnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX3N0YXR1c19ub0Zvb3RlckJ1dHRvbjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY29tcG9uZW50U3RhdGUnLCB0aGlzLmNvbXBvbmVudFN0YXRlKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTdGF0ZSA/IHRoaXMuY29tcG9uZW50U3RhdGUua2V5IDogbnVsbDtcbiAgfSxcblxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50U3RhdGUpIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbXBvbmVudFN0YXRlLnNldENvbXBvbmVudERhdGEocGFyYW1zKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDb21wb25lbnRLZXk6IChjb21wb25lbnREYXRhKSA9PiB7XG4gICAgcmV0dXJuICdiZjhjYWY1Y2Y1ZWMwNDJiMmNlMTYyYTQzYTY2ZGZmZWZhNDM4ZTc1JztcbiAgfSxcblxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGxldCBzdGVwRGF0YSA9IFtdO1xuICAgIGNvbnN0IGJhc2VTdGVwcyA9IFsn6IqC54K5MTInLCAn6IqC54K5MicsICfoioLngrkzJywgJ+iKgueCuTQnLCAn6IqC54K5NSddO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudERhdGEuZGF0YSkpIHtcbiAgICAgIHN0ZXBEYXRhID0gY29tcG9uZW50RGF0YS5kYXRhXG4gICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAuY29uY2F0KGJhc2VTdGVwcy5zbGljZShjb21wb25lbnREYXRhLmxlbmd0aCwgYmFzZVN0ZXBzLmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwRGF0YSA9IGJhc2VTdGVwcztcbiAgICB9XG5cbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ01lZGl1bScgfSk7XG4gICAgLy8g5YaZZm9y5b6q546v5Lya5riy5p+T5LiN5Ye65p2lLOWwseW+l+i/meS5iOS4gOS4quS4gOS4quWGmeaJjeihjFxuICAgIGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoYXJhY3RlcnMgPSBzdGVwRGF0YVswXTtcbiAgICBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGFyYWN0ZXJzID0gc3RlcERhdGFbMV07XG4gICAgaW5zdGFuY2UuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hhcmFjdGVycyA9IHN0ZXBEYXRhWzJdO1xuICAgIGluc3RhbmNlLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoYXJhY3RlcnMgPSBzdGVwRGF0YVszXTtcbiAgICBpbnN0YW5jZS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGFyYWN0ZXJzID0gc3RlcERhdGFbNF07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuIiwiY29uc3Qgbm9ybWFsSW5wdXQgPSB7XG4gIGtleTogJzAyZDZhNDY2ZWEyOWE0NTBhOGQ3YzRhMTdmMDAyYWZkMWRlZGU4ODEnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbnN0IG9sZENoYXJhY3RlcnMgPSBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzO1xuICAgIGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSB0aXRsZSB8fCBvbGRDaGFyYWN0ZXJzO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgLy8gY29uc3QgdGl0bGUgPSBjb21wb25lbnREYXRhLnRpdGxlIHx8ICfmoIfpopgnO1xuICAgIC8vIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnTWVkaXVtJyB9KTtcbiAgICAvLyBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGU7XG4gIH0sXG59O1xuXG5jb25zdCBub3JtYWxfaGFzVmFsdWUgPSB7XG4gIGtleTogJ2UwZTY0ZDc2YzE0NjJmNTA3OTE4MjUwMTgyZDdkMWY5MjcxZTE2ZTknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgY29tcG9uZW50RGF0YS50aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudGl0bGUpO1xuICAgIGNvbXBvbmVudERhdGEudmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG5jb25zdCBub3JtYWxfcmVhZG9ubHkgPSB7XG4gIGtleTogJzczNmNlMmJmYTc5NmE1MDUwZTI5ZDY2MzQyMTA3OGUyOGI3OWNlODknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgY29tcG9uZW50RGF0YS50aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudGl0bGUpO1xuICAgIGNvbXBvbmVudERhdGEudmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50U3RhdGU6IG51bGwsXG4gIGdldENvbXBvbmVudEtleTogZnVuY3Rpb24gKGNvbXBvbmVudERhdGEpIHtcbiAgICBjb25zdCBoYXNWYWx1ZSA9ICEhY29tcG9uZW50RGF0YS52YWx1ZSB8fCBjb21wb25lbnREYXRhLnZhbHVlID09PSAwO1xuXG4gICAgaWYgKGNvbXBvbmVudERhdGEucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfcmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnREYXRhLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2hhc1ZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfaGFzVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxJbnB1dDtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfaGFzVmFsdWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuY29uc3Qgbm9ybWFsX2RhdGFDb3VudDIgPSB7XG4gIGtleTogJ2Q4NjNhYjVjNDRiOTE5ZDgwZTdjNWJkOTZlMmNlMDNhOTNmNzI5YjcnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuXG4gICAgY29uc3QgdGl0bGUgPSBjb21wb25lbnREYXRhLnRpdGxlO1xuICAgIGNvbnN0IG9sZENoYXJhY3RlcnMgPSBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzO1xuICAgIGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSB0aXRsZSB8fCBvbGRDaGFyYWN0ZXJzO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBcbiAgfSxcbn07XG5cbmNvbnN0IG5vcm1hbF9yZWFkb25seV9kYXRhQ291bnQyID0ge1xuICBrZXk6ICdmOTZkMGM5YTk5M2M1ZTBkMGE1M2Y3NGZkMjQzNWNiOGJiZjcyMTEyJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICAvLyBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnRpdGxlKTtcbiAgICAvLyBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50U3RhdGU6IG51bGwsXG4gIGdldENvbXBvbmVudEtleTogZnVuY3Rpb24gKGNvbXBvbmVudERhdGEpIHtcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9yZWFkb25seV9kYXRhQ291bnQyO1xuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50RGF0YS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9kYXRhQ291bnQyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2RhdGFDb3VudDI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuY29uc3Qgbm9ybWFsX2RhdGFDb3VudDIgPSB7XG4gIGtleTogJzk4YTA0ZmY3MjliZjY0ODg0M2RlZTMwNjI3NTBkYWU5OTQ1NzZjZTUnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKCBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgXG4gIH0sXG59O1xuY29uc3Qgbm9ybWFsX3JlYWRvbmx5X2RhdGFDb3VudDQgPSB7XG4gIGtleTogJzc4MWY5N2JiNjVlNDY0ZGEwYWMzNTYxNTBhMGVkZjM5NDk5NmRmOWUnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIC8vIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKCBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50U3RhdGU6IG51bGwsXG4gIGdldENvbXBvbmVudEtleTogZnVuY3Rpb24gKGNvbXBvbmVudERhdGEpIHtcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9yZWFkb25seV9kYXRhQ291bnQ0O1xuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50RGF0YS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9kYXRhQ291bnQyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2RhdGFDb3VudDI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuY29uc3Qgbm9ybWFsX2VtcHR5ID0ge1xuICBrZXk6ICdkODdlZmY2MWE4MTUwOTZhYzliNGM3OGZjYjYxZjc2MzdmMTc5NDUyJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgLy8gYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb25zdCBvbGRDaGFyYWN0ZXJzID0gaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycztcbiAgICBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGUgfHwgb2xkQ2hhcmFjdGVycztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG5jb25zdCBub3JtYWxfaGFzVmFsdWUgPSB7XG4gIGtleTogJ2I1ODJkYTZmMzBmMjE2MjUyOTViZTI0YjVkZjA2OTg1MTExNTA5NTknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBjb25zdCB0aXRsZUNoYXJhY3RlcnNPYmogPSBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXTtcbiAgICB0aXRsZUNoYXJhY3RlcnNPYmouY2hhcmFjdGVycyA9IHRpdGxlIHx8IHRpdGxlQ2hhcmFjdGVyc09iai5jaGFyYWN0ZXJzO1xuXG4gICAgLy8gY29uc3QgdmFsdWVDaGFyYWN0ZXJzT2JqID0gaW5zdGFuY2UuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgLy8gdmFsdWVDaGFyYWN0ZXJzT2JqLmNoYXJhY3RlcnMgPSB0aXRsZSB8fCB2YWx1ZUNoYXJhY3RlcnNPYmouY2hhcmFjdGVyc1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRTdGF0ZTogbnVsbCxcbiAgZ2V0Q29tcG9uZW50S2V5OiBmdW5jdGlvbiAoY29tcG9uZW50RGF0YSkge1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gISFjb21wb25lbnREYXRhLnZhbHVlIHx8IGNvbXBvbmVudERhdGEudmFsdWUgPT09IDBcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9oYXNWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudERhdGEuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfaGFzVmFsdWU7XG4gICAgfSBlbHNlIGlmKGhhc1ZhbHVlKXtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfaGFzVmFsdWU7XG4gICAgfSBlbHNlIGlmKCFoYXNWYWx1ZSkge1xuICAgICAgLy8g5rKh5pe26Ze057+76K+R6YKj5LmI5aSa5LqGLCDlhYjlsIblsLHnlKjmnInmlbDmja7nmoTnu4Tku7bpobbkuIpcbiAgICAgIC8vIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfZW1wdHk7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2hhc1ZhbHVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5jb21wb25lbnRTdGF0ZScsIHRoaXMuY29tcG9uZW50U3RhdGUpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFN0YXRlID8gdGhpcy5jb21wb25lbnRTdGF0ZS5rZXkgOiBudWxsO1xuICB9LFxuXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY29tcG9uZW50U3RhdGUuc2V0Q29tcG9uZW50RGF0YShwYXJhbXMpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJjb25zdCBub3JtYWxfZW1wdHkgPSB7XG4gIGtleTogJzE5NmQwODc4YTQ1NTczNzY1MDE0ZmM5NTJkNGQzMTAwNmJmMDlhMTknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIHRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGUpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcbi8vIOayoeaVsOaNriDmnInljZXlhYNcbmNvbnN0IG5vcm1hbF9lbXB0eV91bml0ID0ge1xuICBrZXk6ICdhNzY5ZDU1NWUwMzcyNjhiZDkxYTJkZDBiY2Q4YjA5MTdmOTQxODgxJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICB0aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IHRpdGxlKTtcblxuICAgIGNvbXBvbmVudERhdGEudW5pdCAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudW5pdCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcblxuLy8g5Y+q6K+754q25oCBIOacieWAvCDmnInljZXlhYNcbmNvbnN0IG5vcm1hbF9yZWFkb25seV9oYXNWYWx1ZV91bml0ID0ge1xuICBrZXk6ICc0NmRkNTAwOWQ4NDliMzI3NTk0MjE0ZTFlNzBhZThhNGM5MzVjNWQzJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnRpdGxlKTtcbiAgICBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgY29tcG9uZW50RGF0YS51bml0ICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS51bml0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG4vLyDlj6ror7vnirbmgIEg5pyJ5YC8IOayoeWNleWFg1xuY29uc3Qgbm9ybWFsX3JlYWRvbmx5X2hhc1ZhbHVlID0ge1xuICAvLyDlgbfmh5LkuoYsIOaIkei/memHjOebtOaOpeeUqOeahGZpZWxk55qE5Y+q6K+757uE5Lu2XG4gIGtleTogJzczNmNlMmJmYTc5NmE1MDUwZTI5ZDY2MzQyMTA3OGUyOGI3OWNlODknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgY29tcG9uZW50RGF0YS50aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudGl0bGUpO1xuICAgIGNvbXBvbmVudERhdGEudmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG4vLyDmnInmlbDmja4g5rKh5Y2V5YWDXG5jb25zdCBub3JtYWxfaGFzVmFsdWUgPSB7XG4gIC8vIOaIkei/memHjOWBt+aHkuS6hiDnm7TmjqXnlKjnmoRmaWVsZOeahFxuICBrZXk6ICdlMGU2NGQ3NmMxNDYyZjUwNzkxODI1MDE4MmQ3ZDFmOTI3MWUxNmU5JyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnRpdGxlKTtcbiAgICBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcblxuLy8g5pyJ5pWw5o2uIOacieWNleWFg1xuY29uc3Qgbm9ybWFsX2hhc1ZhbHVlX3VuaXQgPSB7XG4gIGtleTogJzk1ZjFjNDgwYzRjNGEwZTExY2VhMDY5YWFlNzYzMDI5ZTBjZDk4NDAnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIHRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGUpO1xuXG4gICAgY29uc3QgaGFzVmFsdWUgPSBjb21wb25lbnREYXRhLnZhbHVlIHx8IGNvbXBvbmVudERhdGEudmFsdWUgPT09IDA7XG4gICAgaGFzVmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICBjb21wb25lbnREYXRhLnVuaXQgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnVuaXQpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50U3RhdGU6IG51bGwsXG4gIGdldENvbXBvbmVudEtleTogZnVuY3Rpb24gKGNvbXBvbmVudERhdGEpIHtcbiAgICBjb25zdCBoYXNWYWx1ZSA9ICEhY29tcG9uZW50RGF0YS52YWx1ZSB8fCBjb21wb25lbnREYXRhLnZhbHVlID09PSAwO1xuXG4gICAgLy8gbm9ybWFsX3JlYWRvbmx5X2hhc1ZhbHVlX3VuaXRcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IGhhc1ZhbHVlID8gbm9ybWFsX3JlYWRvbmx5X2hhc1ZhbHVlX3VuaXQgOiBub3JtYWxfcmVhZG9ubHlfaGFzVmFsdWU7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnREYXRhLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2VtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tcG9uZW50RGF0YS51bml0KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBoYXNWYWx1ZSA/IG5vcm1hbF9oYXNWYWx1ZV91bml0IDogbm9ybWFsX2VtcHR5X3VuaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gaGFzVmFsdWUgPyBub3JtYWxfaGFzVmFsdWUgOiBub3JtYWxfZW1wdHk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuY29uc3Qgbm9ybWFsX2VtcHR5ID0ge1xuICBrZXk6ICc2YzcwNDA1ODk4M2FkOGE5NGQyMWRhYTg1YzM3MjY3NDg5YzM5ODVlJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgLy8gYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb25zdCBvbGRDaGFyYWN0ZXJzID0gaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycztcbiAgICBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGUgfHwgb2xkQ2hhcmFjdGVycztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG5jb25zdCBub3JtYWxfaGFzVmFsdWUgPSB7XG4gIGtleTogJ2NjYThmZDhkOGY3OWMxNGNhOWIwZTg1YzhkMmViZTcyODk0MDYwYmEnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBjb25zdCB0aXRsZUNoYXJhY3RlcnNPYmogPSBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXTtcbiAgICB0aXRsZUNoYXJhY3RlcnNPYmouY2hhcmFjdGVycyA9IHRpdGxlIHx8IHRpdGxlQ2hhcmFjdGVyc09iai5jaGFyYWN0ZXJzO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuLy8g5Y+q6K+754q25oCBXG5jb25zdCBub3JtYWxfcmVhZG9ubHlfaGFzVmFsdWUgPSB7XG4gIC8vIOWBt+aHkuS6hiwg5oiR6L+Z6YeM55u05o6l55So55qEZmllbGTnmoTlj6ror7vnu4Tku7ZcbiAga2V5OiAnNzM2Y2UyYmZhNzk2YTUwNTBlMjlkNjYzNDIxMDc4ZTI4Yjc5Y2U4OScsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb21wb25lbnREYXRhLnRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSk7XG4gICAgY29tcG9uZW50RGF0YS52YWx1ZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudmFsdWUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRTdGF0ZTogbnVsbCxcbiAgZ2V0Q29tcG9uZW50S2V5OiBmdW5jdGlvbiAoY29tcG9uZW50RGF0YSkge1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gISFjb21wb25lbnREYXRhLnZhbHVlIHx8IGNvbXBvbmVudERhdGEudmFsdWUgPT09IDBcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9yZWFkb25seV9oYXNWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudERhdGEuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfaGFzVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOayoeaXtumXtOe/u+ivkemCo+S5iOWkmuS6hiwg5YWI5bCG5bCx55So5pyJ5pWw5o2u55qE57uE5Lu26aG25LiKXG4gICAgICAvLyB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX2VtcHR5O1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9oYXNWYWx1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY29tcG9uZW50U3RhdGUnLCB0aGlzLmNvbXBvbmVudFN0YXRlKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTdGF0ZSA/IHRoaXMuY29tcG9uZW50U3RhdGUua2V5IDogbnVsbDtcbiAgfSxcblxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50U3RhdGUpIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbXBvbmVudFN0YXRlLnNldENvbXBvbmVudERhdGEocGFyYW1zKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiXG5jb25zdCBub3JtYWxfZW1wdHkgPSB7XG4gIGtleTogJ2NhZWYxMmE3MTkyMzAzNGU2ZGY0OWYzYWNkZDJhMDlkNTAyODVhOTQnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICAvLyBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbnN0IG9sZENoYXJhY3RlcnMgPSBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzO1xuICAgIGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSB0aXRsZSB8fCBvbGRDaGFyYWN0ZXJzO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cbmNvbnN0IG5vcm1hbF9oYXNWYWx1ZSA9IHtcbiAga2V5OiAnNzY3MmRmMmY4NjdlNDU2OTI2ODU3NDA4OWExNTYxMzkxMTJkYmYwMScsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBjb21wb25lbnREYXRhLnRpdGxlO1xuICAgIGNvbnN0IHRpdGxlQ2hhcmFjdGVyc09iaiA9IGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdO1xuICAgIHRpdGxlQ2hhcmFjdGVyc09iai5jaGFyYWN0ZXJzID0gdGl0bGUgfHwgdGl0bGVDaGFyYWN0ZXJzT2JqLmNoYXJhY3RlcnM7XG5cbiAgICBjb25zdCB2YWx1ZUNoYXJhY3RlcnNPYmogPSBpbnN0YW5jZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICB2YWx1ZUNoYXJhY3RlcnNPYmouY2hhcmFjdGVycyA9IHRpdGxlIHx8IHZhbHVlQ2hhcmFjdGVyc09iai5jaGFyYWN0ZXJzXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuLy8g5Y+q6K+754q25oCBXG5jb25zdCBub3JtYWxfcmVhZG9ubHlfaGFzVmFsdWUgPSB7XG4gIC8vIOWBt+aHkuS6hiwg5oiR6L+Z6YeM55u05o6l55So55qEZmllbGTnmoTlj6ror7vnu4Tku7ZcbiAga2V5OiAnNzM2Y2UyYmZhNzk2YTUwNTBlMjlkNjYzNDIxMDc4ZTI4Yjc5Y2U4OScsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb21wb25lbnREYXRhLnRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSk7XG4gICAgY29tcG9uZW50RGF0YS52YWx1ZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudmFsdWUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRTdGF0ZTogbnVsbCxcbiAgZ2V0Q29tcG9uZW50S2V5OiBmdW5jdGlvbiAoY29tcG9uZW50RGF0YSkge1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gISFjb21wb25lbnREYXRhLnZhbHVlIHx8IGNvbXBvbmVudERhdGEudmFsdWUgPT09IDBcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9yZWFkb25seV9oYXNWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudERhdGEuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBoYXNWYWx1ZSA/IG5vcm1hbF9oYXNWYWx1ZSA6IG5vcm1hbF9lbXB0eTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuLy8g5pyJ5pWw5o2uIOayoeWNleWFg1xuY29uc3Qgbm9ybWFsX2hhc1ZhbHVlID0ge1xuICBrZXk6ICc3ZDA1MzJmYWVmZTU4ZmU3NmY1NjgwMGU5ZmVhM2YwMzgzMTA0Mjk5JyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICAvLyBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb21wb25lbnREYXRhLnRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSk7XG5cbiAgICBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufTtcblxuLy8g5pyJ5pWw5o2uIOacieWNleWFg1xuY29uc3Qgbm9ybWFsX2hhc1ZhbHVlX3VuaXQgPSB7XG4gIGtleTogJzI0Mzg0MGQzNGZkMjY0ZTk2NzVhZDNiOTkxMWI3NTNmYjJkMzcxNWMnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgY29tcG9uZW50RGF0YS50aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudGl0bGUpO1xuXG4gICAgY29uc3QgaGFzVmFsdWUgPSBjb21wb25lbnREYXRhLnZhbHVlIHx8IGNvbXBvbmVudERhdGEudmFsdWUgPT09IDA7XG4gICAgaGFzVmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICBcbiAgICBjb21wb25lbnREYXRhLnVuaXQgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnVuaXQpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cblxuLy8g5Y+q6K+754q25oCBIOacieWAvCDmnInljZXlhYNcbmNvbnN0IG5vcm1hbF9yZWFkb25seV9oYXNWYWx1ZV91bml0ID0ge1xuICAvLyDlgbfmh5LkuoYsIOaIkei/memHjOebtOaOpeeUqOeahG51bWJlcueahOWPquivu+e7hOS7tlxuICBrZXk6ICc0NmRkNTAwOWQ4NDliMzI3NTk0MjE0ZTFlNzBhZThhNGM5MzVjNWQzJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnRpdGxlKTtcbiAgICBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgY29tcG9uZW50RGF0YS51bml0ICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS51bml0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG4vLyDlj6ror7vnirbmgIEg5pyJ5YC8IOayoeWNleWFg1xuY29uc3Qgbm9ybWFsX3JlYWRvbmx5X2hhc1ZhbHVlID0ge1xuICAvLyDlgbfmh5LkuoYsIOaIkei/memHjOebtOaOpeeUqOeahGZpZWxk55qE5Y+q6K+757uE5Lu2XG4gIGtleTogJzczNmNlMmJmYTc5NmE1MDUwZTI5ZDY2MzQyMTA3OGUyOGI3OWNlODknLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdQaW5nRmFuZyBTQycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgY29tcG9uZW50RGF0YS50aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudGl0bGUpO1xuICAgIGNvbXBvbmVudERhdGEudmFsdWUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnZhbHVlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudFN0YXRlOiBudWxsLFxuICBnZXRDb21wb25lbnRLZXk6IGZ1bmN0aW9uIChjb21wb25lbnREYXRhKSB7XG4gICAgY29uc3QgaGFzVmFsdWUgPSAhIWNvbXBvbmVudERhdGEudmFsdWUgfHwgY29tcG9uZW50RGF0YS52YWx1ZSA9PT0gMDtcbiAgICBpZiAoY29tcG9uZW50RGF0YS5yZWFkb25seSkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IGNvbXBvbmVudERhdGEudW5pdCA/IG5vcm1hbF9yZWFkb25seV9oYXNWYWx1ZV91bml0IDogbm9ybWFsX3JlYWRvbmx5X2hhc1ZhbHVlO1xuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50RGF0YS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9oYXNWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoY29tcG9uZW50RGF0YS51bml0KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBoYXNWYWx1ZSA/IG5vcm1hbF9oYXNWYWx1ZV91bml0IDogbm9ybWFsX2VtcHR5X3VuaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gaGFzVmFsdWUgPyBub3JtYWxfaGFzVmFsdWUgOiBub3JtYWxfaGFzVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsIlxuY29uc3Qgbm9ybWFsID0ge1xuICBrZXk6ICczNzRlNGY4ZWMzZGY0ZWM5MjQyZTE5NjBhNDc1NjY3MzZhMWIwOTEyJyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgLy8gYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb25zdCBvbGRDaGFyYWN0ZXJzID0gaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycztcbiAgICBpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gdGl0bGUgfHwgb2xkQ2hhcmFjdGVycztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG59O1xuLy8g5Y+q6K+754q25oCBXG5jb25zdCBub3JtYWxfcmVhZG9ubHlfaGFzVmFsdWUgPSB7XG4gIC8vIOWBt+aHkuS6hiwg5oiR6L+Z6YeM55u05o6l55So55qEZmllbGTnmoTlj6ror7vnu4Tku7ZcbiAga2V5OiAnNzM2Y2UyYmZhNzk2YTUwNTBlMjlkNjYzNDIxMDc4ZTI4Yjc5Y2U4OScsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb21wb25lbnREYXRhLnRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSk7XG4gICAgY29tcG9uZW50RGF0YS52YWx1ZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudmFsdWUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50U3RhdGU6IG51bGwsXG4gIGdldENvbXBvbmVudEtleTogZnVuY3Rpb24gKGNvbXBvbmVudERhdGEpIHtcbiAgICAvLyBjb25zdCBoYXNWYWx1ZSA9ICEhY29tcG9uZW50RGF0YS52YWx1ZSB8fCBjb21wb25lbnREYXRhLnZhbHVlID09PSAwXG4gICAgaWYgKGNvbXBvbmVudERhdGEucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWxfcmVhZG9ubHlfaGFzVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBub3JtYWw7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbXBvbmVudFN0YXRlJywgdGhpcy5jb21wb25lbnRTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50U3RhdGUgPyB0aGlzLmNvbXBvbmVudFN0YXRlLmtleSA6IG51bGw7XG4gIH0sXG5cbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5jb21wb25lbnRTdGF0ZS5zZXRDb21wb25lbnREYXRhKHBhcmFtcyk7XG4gICAgfVxuICB9LFxufTtcbiIsImNvbnN0IG5vcm1hbF9lbXB0eSA9IHtcbiAga2V5OiAnODE5ZDliOGU4MjY2OThkMWM2ZjQ3NDdkODkyZWRmNGM1ZGE3ODdiOCcsXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jICh7IGNvbXBvbmVudERhdGEsIGZpZ21hLCBpbnN0YW5jZSB9KSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudERhdGEudGl0bGU7XG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICB0aXRsZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IHRpdGxlKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5jb25zdCBub3JtYWxfaGFzVmFsdWUgPSB7XG4gIGtleTogJzZlMTAzN2U1NWI3Y2IxOWY2ZmQ0OTY1YWUyMjA3YWQ2MDQ3NmZhNjcnLFxuICBzZXRDb21wb25lbnREYXRhOiBhc3luYyAoeyBjb21wb25lbnREYXRhLCBmaWdtYSwgaW5zdGFuY2UgfSkgPT4ge1xuXG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BpbmdGYW5nIFNDJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICBjb21wb25lbnREYXRhLnRpdGxlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS50aXRsZSk7XG5cbiAgICBjb25zdCBoYXNWYWx1ZSA9IGNvbXBvbmVudERhdGEudmFsdWUgfHwgY29tcG9uZW50RGF0YS52YWx1ZSA9PT0gMDtcbiAgICBoYXNWYWx1ZSAmJiAoaW5zdGFuY2UuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hhcmFjdGVycyA9IGNvbXBvbmVudERhdGEudmFsdWUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbn07XG5cblxuY29uc3Qgbm9ybWFsX3JlYWRvbmx5ID0ge1xuICBrZXk6ICc5MjQ0Y2NjODA0MjRiZjgzYzA4MTNlNmQ2YWFkMTIxMzZkN2RhN2I4JyxcbiAgc2V0Q29tcG9uZW50RGF0YTogYXN5bmMgKHsgY29tcG9uZW50RGF0YSwgZmlnbWEsIGluc3RhbmNlIH0pID0+IHtcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUGluZ0ZhbmcgU0MnLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xuICAgIC8vIGNvbXBvbmVudERhdGEudGl0bGUgJiYgKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoYXJhY3RlcnMgPSBjb21wb25lbnREYXRhLnRpdGxlKTtcbiAgICAvLyBjb21wb25lbnREYXRhLnZhbHVlICYmIChpbnN0YW5jZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGFyYWN0ZXJzID0gY29tcG9uZW50RGF0YS52YWx1ZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudFN0YXRlOiBudWxsLFxuICBnZXRDb21wb25lbnRLZXk6IGZ1bmN0aW9uIChjb21wb25lbnREYXRhKSB7XG4gICAgY29uc3QgaGFzVmFsdWUgPSAhIWNvbXBvbmVudERhdGEudmFsdWUgfHwgY29tcG9uZW50RGF0YS52YWx1ZSA9PT0gMFxuICAgIGlmIChjb21wb25lbnREYXRhLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gbm9ybWFsX3JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50RGF0YS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IG5vcm1hbF9lbXB0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IGhhc1ZhbHVlID8gbm9ybWFsX2hhc1ZhbHVlIDogbm9ybWFsX2VtcHR5O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5jb21wb25lbnRTdGF0ZScsIHRoaXMuY29tcG9uZW50U3RhdGUpO1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFN0YXRlID8gdGhpcy5jb21wb25lbnRTdGF0ZS5rZXkgOiBudWxsO1xuICB9LFxuXG4gIHNldENvbXBvbmVudERhdGE6IGFzeW5jIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY29tcG9uZW50U3RhdGUuc2V0Q29tcG9uZW50RGF0YShwYXJhbXMpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgbmFyQmFyU2VydmljZSBmcm9tICcuL2Jhc2UtbmF2QmFyLmpzJztcbmltcG9ydCBmb3JtRmllbGRTZXJ2aWNlIGZyb20gJy4vZm9ybS1maWVsZC5qcyc7XG5pbXBvcnQgZm9ybUZpbGVVcGxvYWRlclNlcnZpY2UgZnJvbSAnLi9mb3JtLWZpbGVVcGxvYWRlci5qcyc7XG5pbXBvcnQgZm9ybVNpbmdsZVBpY2tlclNlcnZpY2UgZnJvbSAnLi9mb3JtLXNpbmdsZVBpY2tlci5qcyc7XG5pbXBvcnQgZm9ybU11bHRpUGlja2VyU2VydmljZSBmcm9tICcuL2Zvcm0tbXVsdGlQaWNrZXIuanMnO1xuaW1wb3J0IGZvcm1OdW1iZXJTZXJ2aWNlIGZyb20gJy4vZm9ybS1udW1iZXIuanMnO1xuaW1wb3J0IGZvcm1SYWRpb1NlcnZpY2UgZnJvbSAnLi9mb3JtLXJhZGlvLmpzJztcbmltcG9ydCBmb3JtVGV4dGFyZWFTZXJ2aWNlIGZyb20gJy4vZm9ybS10ZXh0YXJlYS5qcyc7XG5pbXBvcnQgZm9ybVN0ZXBwZXJTZXJ2aWNlIGZyb20gJy4vZm9ybS1zdGVwcGVyLmpzJztcbmltcG9ydCBmb3JtSW1hZ2VVcGxvYWRlclNlcnZpY2UgZnJvbSAnLi9mb3JtLWltYWdlVXBsb2FkZXIuanMnO1xuaW1wb3J0IGZvcm1Td2l0Y2hTZXJ2aWNlIGZyb20gJy4vZm9ybS1zd2l0Y2guanMnO1xuaW1wb3J0IGJhc2VTdGVwU2VydmljZSBmcm9tICcuL2Jhc2Utc3RlcC5qcyc7XG5pbXBvcnQgYmFzZUJ1dHRvbkdyb3VwU2VydmljZSBmcm9tICcuL2Jhc2UtYnV0dG9uR3JvdXAuanMnO1xuaW1wb3J0IGJhc2VQcm9maWxlU2VydmljZSBmcm9tICcuL2Jhc2UtcHJvZmlsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0U2VydmljZUJ5Q29tcFR5cGU6ICh0eXBlKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiYXNlLW5hdkJhcic6XG4gICAgICAgIHJldHVybiBuYXJCYXJTZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS1maWVsZCc6XG4gICAgICAgIHJldHVybiBmb3JtRmllbGRTZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS1maWxlVXBsb2FkZXInOlxuICAgICAgICByZXR1cm4gZm9ybUZpbGVVcGxvYWRlclNlcnZpY2U7XG4gICAgICBjYXNlICdmb3JtLXNpbmdsZVBpY2tlcic6XG4gICAgICAgIHJldHVybiBmb3JtU2luZ2xlUGlja2VyU2VydmljZTtcbiAgICAgIGNhc2UgJ2Zvcm0tbXVsdGlQaWNrZXInOlxuICAgICAgICByZXR1cm4gZm9ybU11bHRpUGlja2VyU2VydmljZTtcbiAgICAgIGNhc2UgJ2Zvcm0tbnVtYmVyJzpcbiAgICAgICAgcmV0dXJuIGZvcm1OdW1iZXJTZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS1yYWRpbyc6XG4gICAgICAgIHJldHVybiBmb3JtUmFkaW9TZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS10ZXh0YXJlYSc6XG4gICAgICAgIHJldHVybiBmb3JtVGV4dGFyZWFTZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS1pbWFnZVVwbG9hZGVyJzpcbiAgICAgICAgcmV0dXJuIGZvcm1JbWFnZVVwbG9hZGVyU2VydmljZTtcbiAgICAgIGNhc2UgJ2Zvcm0tc3dpdGNoJzpcbiAgICAgICAgcmV0dXJuIGZvcm1Td2l0Y2hTZXJ2aWNlO1xuICAgICAgY2FzZSAnZm9ybS1zdGVwcGVyJzpcbiAgICAgICAgcmV0dXJuIGZvcm1TdGVwcGVyU2VydmljZTtcbiAgICAgIGNhc2UgJ2Jhc2UtYnV0dG9uR3JvdXAnOlxuICAgICAgICByZXR1cm4gYmFzZUJ1dHRvbkdyb3VwU2VydmljZTtcbiAgICAgIGNhc2UgJ2Jhc2UtcHJvZmlsZSc6XG4gICAgICAgIHJldHVybiBiYXNlUHJvZmlsZVNlcnZpY2U7XG4gICAgICBjYXNlICdiYXNlLXN0ZXAnOlxuICAgICAgICByZXR1cm4gYmFzZVN0ZXBTZXJ2aWNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBjb21wb25lbnRNYXBTZXJ2aWNlIGZyb20gJy4uL2FwcC9jb21wb25lbnRTZXJ2aWNlL2luZGV4LmpzJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgIHdpZHRoOiAzNjAsXG4gICAgaGVpZ2h0OiA2MDAsXG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdzZW5kLXVzZXItbWVzc2FnZScpIHtcbiAgICAgICAgZnVuY3Rpb24gaW1wb3J0Tm9kZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU1pbkhlaWdodCA9IDgxMjtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlV2lkdGggPSAzNzU7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVMaXN0ID0gbXNnLmRhdGEgfHwgW107XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RGaWdtYTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyYW1lTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUl0ZW1EYXRhID0gZnJhbWVMaXN0W2pdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RGaWdtYSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09ZnJhbWUnLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBmcmFtZUl0ZW1EYXRhLnBhZ2VOYW1lIHx8ICgn6aG16Z2iJyArIGopO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUocGFnZVdpZHRoLCBwYWdlTWluSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2F0ZXJmYWxsRmxvd0xheW91dCA9IGZyYW1lSXRlbURhdGEubGF5b3V0LnJlZHVjZSgocmVzLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSByZXMuY29uY2F0KChjdXJyLmNvbXBvbmVudHMgfHwgW10pLm1hcChzdWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZnJhbWVJdGVtRGF0YS5tb2RlKSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIucmVhZG9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F0ZXJmYWxsRmxvd0xheW91dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbSA9IHdhdGVyZmFsbEZsb3dMYXlvdXRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRTZXJ2aWNlID0gY29tcG9uZW50TWFwU2VydmljZS5nZXRTZXJ2aWNlQnlDb21wVHlwZShjb21wb25lbnRJdGVtLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRLZXkgPSBjb21wb25lbnRTZXJ2aWNlLmdldENvbXBvbmVudEtleShjb21wb25lbnRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1wb3J0Q29tcG9uZW50ID0geWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhjb21wb25lbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gaW1wb3J0Q29tcG9uZW50LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgY29tcG9uZW50U2VydmljZS5zZXRDb21wb25lbnREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YTogY29tcG9uZW50SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudEl0ZW0udHlwZSA9PT0gJ2Jhc2UtYnV0dG9uR3JvdXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ICsgaW5zdGFuY2UuaGVpZ2h0ID4gcGFnZU1pbkhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ICs9IGluc3RhbmNlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnkgPSBwYWdlTWluSGVpZ2h0IC0gaW5zdGFuY2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS55ID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSArPSBpbnN0YW5jZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUocGFnZVdpZHRoLCBNYXRoLm1heCh5LCBwYWdlTWluSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkID0gcGFnZS5jaGlsZHJlbi5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUueCA9IHBhZ2UuY2hpbGRyZW5bbGFzdENoaWxkXS54ICsgcGFnZS5jaGlsZHJlbltsYXN0Q2hpbGRdLndpZHRoICsgNDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtsYXN0RmlnbWFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydE5vZGUoKTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9