import React, { useState } from 'react';
import { Layout, Menu, Col, Row, Select, Card } from 'antd';
import { AppstoreOutlined, TableOutlined } from '@ant-design/icons';
const { Meta } = Card;



const { Header, Content, Footer } = Layout;



function App() {

  // state image name and path
  const [modelLeft, setModelLeft] = useState<string>('MLP');
  const [imageLeftBin, setImageLeftBin] = useState<string>('00');
  const [imageLeftTable, setImageLeftTable] = useState<string>('I&SOC-charging');

  const [modelRight, setModelRight] = useState<string>('CNN');
  const [imageRightBin, setImageRightBin] = useState<string>('00');
  const [imageRightTable, setImageRightTable] = useState<string>('I&SOC-charging');


  const binList: Array<{ value: string; label: string }> = [];
  const stressorTables: Array<{ value: string; label: string }> = [
    { value: 'I&SOC-charging', label: 'I & SOC-charging' },
    { value: 'I&SOC-discharging', label: 'I & SOC-discharging' },
    { value: 'T&SOC-charging', label: 'T & SOC-charging' },
    { value: 'T&SOC-discharging', label: 'T & SOC-discharging' },
    { value: 'T&SOC-hold', label: 'T & SOC-hold' },
  ];

  const models: Array<{ value: string; label: string }> = [
    { value: 'MLP', label: 'MLP' },
    { value: 'CNN', label: 'CNN' },
  ];

  const sohBinRanges = [
    "−28.1 to −26.1",
    "−26.1 to −24.0",
    "−24.0 to −21.9",
    "−21.9 to −19.9",
    "−19.9 to −17.8",
    "−17.8 to −15.8",
    "−15.8 to −13.7",
    "−13.7 to −11.7",
    "−11.7 to −9.6",
    "−9.6 to −7.6",
    "−7.6 to −5.5",
    "−5.5 to −3.5",
    "−3.5 to −1.4",
    "−1.4 to 0.7",
    "0.7 to 2.7",
  ];

  for (let i = 0; i <= 14; i++) {
    const label = i < 10 ? `0${i}` : `${i}`;
    binList.push({ value: label, label: sohBinRanges[i] });
  }

  const handleChangeLefModel = (value: string) => {
    console.log(`selected ${value}`);
    setModelLeft(value);
  };

  const handleChangeLeftBin = (value: string) => {
    console.log(`selected ${value}`);
    setImageLeftBin(value);
  };

  const handleChangeLeftTable = (value: string) => {
    console.log(`selected ${value}`);
    setImageLeftTable(value);
  };

  const handleChangeRightModel = (value: string) => {
    console.log(`selected ${value}`);
    setModelRight(value);
  };

  const handleChangeRightBin = (value: string) => {
    console.log(`selected ${value}`);
    setImageRightBin(value);
  };

  const handleChangeRightTable = (value: string) => {
    console.log(`selected ${value}`);
    setImageRightTable(value);
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<TableOutlined />}>
            Heatmaps
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            About
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row>
          <Col span={24}> <h1 style={{ textAlign: 'center' }}>Saliency Maps</h1></Col>
        </Row>
        <Row>
          <Col span={10} offset={1}>
              <Select
                defaultValue="MLP"
                style={{ width: 80 }}
                onChange={handleChangeLefModel}
                options={models}
              />
              <Select
                defaultValue="00"
                style={{ width: 150 }}
                onChange={handleChangeLeftBin}
                options={binList}
              />
              <Select
                defaultValue="I&SOC-charging"
                style={{ width: 240 }}
                onChange={handleChangeLeftTable}
                options={stressorTables}
              />
              <Card
                className="heatmap"
                hoverable
                cover={<img alt="example" src={`${process.env.PUBLIC_URL}/images/${modelLeft}_${imageLeftBin}-bucket_${imageLeftTable}.png`} />}
              >
                <Meta title={`${modelLeft}`} description={`${sohBinRanges[Number(imageLeftBin)]} - ${imageLeftTable}`} />
              </Card>
          </Col>
          <Col span={10} offset={2}>
            <Select
                defaultValue="CNN"
                style={{ width: 80 }}
                onChange={handleChangeRightModel}
                options={models}
              />
            <Select
                defaultValue="00"
                style={{ width: 150 }}
                onChange={handleChangeRightBin}
                options={binList}
              />
              <Select
                defaultValue="I&SOC-charging"
                style={{ width: 240 }}
                onChange={handleChangeRightTable}
                options={stressorTables}
              />
              <Card
                className="heatmap"
                hoverable
                cover={<img alt="example" src={`${process.env.PUBLIC_URL}/images/${modelRight}_${imageRightBin}-bucket_${imageRightTable}.png`} />}
              >
                <Meta title={`${modelRight}`} description={`${sohBinRanges[Number(imageLeftBin)]} - ${imageLeftTable}`} />
              </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>State of Health Forecasting - Saliency Maps</Footer>
    </Layout>
  );
}

export default App;
