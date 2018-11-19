import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { isEmpty, map } from 'lodash/fp';
import Modal from 'react-responsive-modal';
import { Card, DetailsCard } from './Card';
import CardPlaceholder from './CardPlaceholder';
import TopBar from './TopBar';
import { contentActions, globalActions } from '../../actions';
import { Button, Footer, CopyrightText } from '../styles';
import {
  MiddleContentWrapper,
  Content,
  PageActions,
} from './MiddleContent.styles';

const MAX_ITEM_COUNT = 25;

class MiddleContent extends React.PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.posts,
      itemModalOpen: false,
      currentModalItem: null,
      previousPath: '/',
    };
  }

  componentDidMount = () => {
    const { fnFetchReddit, fnFetchSubReddit, global: { pageParams } } = this.props;

    if (pageParams.subredditName) {
      fnFetchSubReddit({
        sub: pageParams.subredditName,
      });
    } else {
      fnFetchReddit();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.posts !== nextProps.posts) {
      this.setState(prevState => ({
        ...prevState,
        ...nextProps.posts,
      }));
    }
  }
  
  onOpenModal = (currentItem) => {
    const { router } = this.props;

    const prevPath = router.asPath;

    this.props.fnSetModalItem(currentItem);

    this.setState(prevState => ({
      ...prevState,
      previousPath: prevPath,
      itemModalOpen: true,
      currentModalItem: currentItem,
    }), this.props.fnSetRouterPath({
      prevPath, 
    }));    
  };

  onCloseModal = () => {
    const { router, global: { router: { prevPath } } } = this.props;
    this.setState({
      itemModalOpen: false,
      currentModalItem: null,
    });

    router.replace(`/?${prevPath}`, prevPath, { shallow: true });
  };

  onLoadMoreItems = () => {
    const { posts: { sort, after }, global: { pageParams } } = this.props;
    const params = {
      sort,
      after,
    };
    if (pageParams.subredditName) {
      this.props.fnLoadMoreSubRedditItems({ ...params, sub: pageParams.subredditName });
    } else {
      this.props.fnLoadMoreRedditItems();
    }
  }

  render () {
    const { fetching } = this.state;
    const { posts, global: { pageParams } } = this.props;
    // const finalItems = take(MAX_ITEM_COUNT, items);
    const finalItems = posts.allPosts;
    return (
      <MiddleContentWrapper>
        <TopBar sort={posts.sort} pageParams={pageParams} />
        <Content>
          { fetching || isEmpty(finalItems)
            ? <CardPlaceholder count={MAX_ITEM_COUNT} />
            : finalItems.length > 0 && map(name => (
              <Card key={name} item={posts.model[name]} onOpenModal={this.onOpenModal} onCloseModal={this.onCloseModal} onExpand={this.props.fnExpandItem}/>
            ), finalItems)
          }
        </Content>
        <PageActions>
          <Button width={174} onClick={this.onLoadMoreItems}>Load More</Button>
        </PageActions>
        <Footer>
          <CopyrightText>
          Use of this site constitutes acceptance of our User Agreement and Privacy Policy. 
          <br />© 2018 reddit inc. All rights reserved.
          </CopyrightText>
        </Footer>
        <Modal
          open={this.state.itemModalOpen}
          onClose={this.onCloseModal}
          center
          styles={{
            modal: { minWidth: '800px', minHeight: '90%'}
          }}
        >
          <DetailsCard />
        </Modal>
      </MiddleContentWrapper>
    );
  }
}

MiddleContent.propTypes = {
  fnFetchReddit: PropTypes.func,
  fnLoadMoreRedditItems: PropTypes.func,
  fnFetchSubReddit: PropTypes.func,
  fnLoadMoreSubRedditItems: PropTypes.func,
  fnExpandItem: PropTypes.func,
  fnSetModalItem: PropTypes.func,
  fnSetRouterPath: PropTypes.func,
};

MiddleContent.defaultProps = {
  fnFetchReddit: () => {},
  fnLoadMoreRedditItems: () => {},
  fnFetchSubReddit: () => {},
  fnLoadMoreSubRedditItems: () => {},
  fnExpandItem: () => {},
  fnSetModalItem: () => {},
  fnSetRouterPath: () => {},
};

const mapStateToProps = (state) => ({
  global: state.global,
  posts: state.posts,
  currentModalItem: state.currentModalItem,
});

const mapDispatchToProps = (dispatch) => ({
  fnFetchReddit: params => dispatch(contentActions.fetchReddit(params)),
  fnLoadMoreRedditItems: params => dispatch(contentActions.loadMoreRedditItems(params)),
  fnFetchSubReddit: params => dispatch(contentActions.fetchSubReddit(params)),
  fnLoadMoreSubRedditItems: params => dispatch(contentActions.loadMoreSubRedditItems(params)),
  fnExpandItem: (item) => dispatch(contentActions.expandItem(item)), 
  fnSetModalItem: (item) => dispatch(contentActions.setModalContentItem(item)), 
  fnSetRouterPath: (params) => dispatch(globalActions.setRouterPath(params)), 
})

const MiddleContentWithRouter = withRouter(MiddleContent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddleContentWithRouter);
