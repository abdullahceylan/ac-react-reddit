import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MiddleContent from '../MiddleContent';
import { globalActions, contentActions } from '../../actions';
import { HomeWrapper, Content } from './Home.styles';

const SECTION_COUNT = 3;
const SECTION_MARGIN = 2;
const SECTION_WIDTH = (100 / SECTION_COUNT) - SECTION_MARGIN;

class Home extends PureComponent {
  componentWillMount() {
    this.props.fnSetPageParams({
      ...this.props.pageParams,
    });
    this.props.fnSetRouterPath({
      currentPath: this.props.pageParams.url || '/',
    });
  }

  componentDidMount() {
    this.props.fnFetchSubredditList();

    Router.events.on('routeChangeStart', this.routeChangeStart)
    Router.events.on('routeChangeComplete', this.routeChangeComplete)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.routeChangeStart)
    Router.events.off('routeChangeComplete', this.routeChangeComplete)
  }

  routeChangeStart = (url) => {
    const { global: { pageParams } } = this.props;
    this.props.fnSetPageParams();
    if (pageParams.url) {
      this.props.fnSetRouterPath({
        prevPath: pageParams.url,
      });
    }
  }

  routeChangeComplete = (url) => {
    const { global: { pageParams } } = this.props;
    this.props.fnSetPageParams({
      ...pageParams,
      ...Router.query,
    });
    this.props.fnSetRouterPath({
      currentPath: this.props.pageParams.url || '/',
    });
  }
  
  render() {
    return (
      <HomeWrapper>
        <Header />
        <Content>
          <Sidebar />
          <MiddleContent />
        </Content>
      </HomeWrapper>
    );
  }
}

const mapStateProps = state => ({
  global: state.global,
});

const mapDispatchToProps = (dispatch) => ({
  fnSetPageParams: (params) => dispatch(globalActions.setPageParams(params)),
  fnSetRouterPath: (params) => dispatch(globalActions.setRouterPath(params)),
  fnFetchSubredditList: () => dispatch(contentActions.fetchSubRedditList()),
})

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(Home);
