// import React from 'react';
// import React, { useState, useRef, useCallback, useEffect } from 'react';
import React, { useState } from 'react';
// import logo from '../assets/logo.svg';
import gifImg from '../assets/28动图.gif';
import '../styles/ui.css';
import axios from 'axios';

const mockData = [
  {
    pageName: '订单编辑页',
    mode: '3',
    layout: [
      {
        position: 'top',
        components: [
          {
            type: 'base-navBar',
            title: '编辑',
          },
          {
            type: 'base-profile',
            title: '',
            data: {
              title: '保利花园一期空调第一批采购订单',
              badge: '集采',
              desc: ['加急', '现场验收'],
              status: '已发货',
              backgroundColor: 'green',
              footerButton: [],
            },
          },
        ],
      },
      {
        position: 'body',
        components: [
          {
            type: 'base-step',
            value: '',
            data: ['步骤1', '步骤3', '步骤3'],
          },
          {
            type: 'form-field',
            title: '订单编号',
            value: 'BLHY2024092101',
          },
          {
            type: 'form-field',
            title: '采购单位',
            value: '保利发展广州有限公司',
          },
          {
            type: 'form-field',
            title: '销售单位',
            value: '珠海格力电器股份有限公司',
          },
          {
            type: 'form-number',
            title: '采购数量',
            value: '1000',
            unit: '台',
          },
          {
            type: 'form-fileUploader',
            title: '文件上传1',
          },
          {
            type: 'form-singlePicker',
            title: '选择器1',
            value: '单选',
          },
          {
            type: 'form-radio',
            title: '单选框',
            value: '单选2',
          },
          {
            type: 'form-radio',
            title: '开关',
            value: '是',
          },
          {
            type: 'form-stepper',
            title: '步进器',
            value: '1',
          },
          {
            type: 'form-textarea',
            title: '多行文本',
            value: '水电费阿斯蒂芬水岸东方水电费水岸东方水电费水电费',
          },
          {
            type: 'form-textarea',
            title: '订单说明',
            value:
              '需要考虑以下几个关键因素：首先是品牌与型号，不同品牌、型号的空调在性能、价格、售后服务等方面可能存在差异；其次是能效比，高能效比的空调虽然价格稍高，但长期使用下来能节省不少电费；再者是制冷/制热量，根据使用空间的大小来选择合适的制冷/制热量；最后是噪音大小，尤其是对于需要安装在卧室的空调，噪音大小是一个重要的考量因素。',
          },
          {
            type: 'form-imageUploader',
            title: '现场图片',
            value: '',
          },
          {
            type: 'form-switch',
            title: '测试开关',
            value: '',
          },
          {
            type: 'form-stepper',
            title: '步进器啊',
            value: '3',
            unit: '轮',
          },
        ],
      },
      {
        position: 'footer',
        components: [
          {
            type: 'base-buttonGroup',
            data: ['取消', '保存'],
          },
        ],
      },
    ],
  },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [userOrder, setUserOrder] = useState('');

  const onSend = () => {
    setMessages((prevMessages) => [...prevMessages, { text: userOrder, from: 'user' }]);

    const requestData = { data: userOrder, type: 'text' };
    axios
      .post('https://ai.huangchunfei.com/index/index?token=jiaozhenai', requestData)
      .then(function (response) {
        setMessages((prevMessages) => [...prevMessages, { text: response.data.message, from: 'system' }]);
        console.log('===response.data.message', response.data.message);
        if (response.data && Array.isArray(response.data.data)) {
          parent.postMessage({ pluginMessage: { type: 'send-user-message', data: response.data.data } }, '*');
        }
        console.log(response.data);
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });

    setUserOrder('');
  };

  const handleUserOrderChange = (event) => {
    setUserOrder(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSend();
    }
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        {messages.length ? (
          ''
        ) : (
          <div className="placeholder-box">
            <div className="placeholder-title">您好，我是校真AI</div>
            <div className="placeholder-secondary">
              您可以在输入框内输入要生成的页面类型和包含元素，我们将会直接为您绘制在画板上哦!
              <img src={gifImg} />
            </div>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.from === 'user' ? 'user-message' : 'system-message'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-controls">
        <textarea
          placeholder="请输入指令，点击右侧按钮发送"
          value={userOrder}
          onChange={handleUserOrderChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button onClick={onSend}>
          <img
            className="button-icon"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMkwyIDhNOCAyTDE0IDhNOCAyVjE0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
            alt="send"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
