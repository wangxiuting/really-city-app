import React from 'react'

// 演示 antd-mobile 的使用：
import { Button } from 'antd-mobile'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>这是首页</h1>

        {/* 渲染 Button 组件 */}
        <Button type="primary">登录</Button>
      </div>
    )
  }
}
