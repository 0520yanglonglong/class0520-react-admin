import { Layout, Breadcrumb } from 'antd';
import React, { Component } from 'react';

import withCheckLogin from '@conts/with-check-login';
import HeaderMain from './header-main';
import { withTranslation } from 'react-i18next';



import LeftNav from  './left-nav';
import logo from '@assets/images/logo.png';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;
@withTranslation()
@withCheckLogin
class BasicLayout extends Component {
    state = {
        collapsed: false,
        isDisplay:true
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({
            collapsed,
            isDisplay: !this.state.isDisplay
        });
    };

    render() {
        const { collapsed, isDisplay } = this.state;
        const  { t } =this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="basic-layout-logo" >
                    <img src={logo} alt="logo"/>
                    <h1 style={{display: isDisplay ? 'block' : 'none'}}>{t('title')}</h1>
                    </div>


                      <LeftNav />
                    {/*<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">*/}
                        {/*<Menu.Item key="1">*/}
                            {/*<Icon type="pie-chart" />*/}
                            {/*<span>Option 1</span>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="2">*/}
                            {/*<Icon type="desktop" />*/}
                            {/*<span>Option 2</span>*/}
                        {/*</Menu.Item>*/}
                        {/*<SubMenu*/}
                            {/*key="sub1"*/}
                            {/*title={*/}
                                {/*<span>*/}
                  {/*<Icon type="user" />*/}
                  {/*<span>User</span>*/}
                {/*</span>*/}
                            {/*}*/}
                        {/*>*/}
                            {/*<Menu.Item key="3">Tom</Menu.Item>*/}
                            {/*<Menu.Item key="4">Bill</Menu.Item>*/}
                            {/*<Menu.Item key="5">Alex</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu*/}
                            {/*key="sub2"*/}
                            {/*title={*/}
                                {/*<span>*/}
                  {/*<Icon type="team" />*/}
                  {/*<span>Team</span>*/}
                {/*</span>*/}
                            {/*}*/}
                        {/*>*/}
                            {/*<Menu.Item key="6">Team 1</Menu.Item>*/}
                            {/*<Menu.Item key="8">Team 2</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<Menu.Item key="9">*/}
                            {/*<Icon type="file" />*/}
                            {/*<span>File</span>*/}
                        {/*</Menu.Item>*/}
                    {/*</Menu>*/}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,height:80}} >
                       <HeaderMain/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {
                                this.props.children
                            }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default BasicLayout;