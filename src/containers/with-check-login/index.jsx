import React, {Component} from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * 高阶组件：用来做登录验证的
 * @param WrappedComponent
 */
function  withCheckLogin(WrappedComponent) {
        return connect (
            (state)=>({token:state.user.token}),
            null
        )(class extends Component{
            render() {
                const { token, ...rest} = this.props;
                const { location:{pathname} } = rest;

                if (pathname === '/login' && token) return <Redirect to="/"/>;
                if (pathname !== '/login' && !token) return <Redirect to="/login"/>;
                return <WrappedComponent {...rest} />;
            }
        })

}

export default withCheckLogin;


