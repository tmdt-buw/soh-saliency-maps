import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import SaliencyMap from './saliencymap_component';
import About from './about_component';


const { Header, Content, Footer } = Layout;

function App() {

  const [menuItem, setMenuItem] = useState<string>('heatmaps');

  function capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const onMenuClick = (item: any) => {
    setMenuItem(item.key);
  };
  

  const items1: MenuProps['items'] = ['heatmaps', 'about'].map((key) => ({
    key,
    label: `${capitalizeFirstLetter(key)}`,
  }));
  let content;
  if (menuItem === 'heatmaps') {	
    content = <SaliencyMap />
  } else {
    content = <About/>;
}

  return (
    <Layout className="layout">
      <Header className="header">
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/TMDT_Logo_light_complete.png`} alt="logo" />
      </div>
        <Menu theme="dark" mode="horizontal" onClick={onMenuClick} items={items1}  selectedKeys={[menuItem]}/>
      </Header>
      <Content>
         {content}
      </Content>
      <Footer style={{ textAlign: 'center' }}>State of Health Forecasting - Saliency Maps</Footer>
    </Layout>
  );
}

export default App;
