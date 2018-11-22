import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {
  FaHotjar, FaRegListAlt, FaRegChartBar,
  FaTrophy, FaRegStar, FaRegNewspaper,
} from 'react-icons/fa';
import { contentActions } from '../../../actions';
import SingleItem from './SingleItem';
import { MenuItems } from './SidebarMenu.styles';

const menuList = [
  {
    id: 'hot',
    title: 'Hot',
    icon: <FaHotjar />,
  },
  {
    id: 'new',
    title: 'New',
    icon: <FaRegListAlt />,
  },
  {
    id: 'rising',
    title: 'Rising',
    icon: <FaRegChartBar />,
  },
  {
    id: 'top',
    title: 'Top',
    icon: <FaTrophy />,
  },
  {
    id: 'best',
    title: 'Best',
    icon: <FaRegStar />,
  },
  {
    id: 'controversial',
    title: 'Controversial',
    icon: <FaRegNewspaper />,
  },
];

class SidebarMenu extends React.PureComponent {
  onClickItem = (sort) => {
    const { global: { pageParams }, router } = this.props;

    let href = `/${sort}`;
    
    this.props.changeRedditSorting({ sort });
    if (pageParams.subredditName) {
      href = `/r/${pageParams.subredditName}/${sort}`;
      this.props.fetchSubReddit({ 
        sub: pageParams.subredditName,
        sort,
      });
    } else {
      this.props.fetchReddit({ sort });
    }
  
    router.push(`/?${href}`, href, { shallow: true });
  }

  render() {
    const { posts, global: { pageParams } } = this.props;
    const currentType = posts.sort || pageParams.sort;
    return (
      <MenuItems>
        {
          menuList.length > 0 && menuList.map(item => (
            <SingleItem key={`sidebarMenu_${item.id}`} isActive={currentType === item.id} item={item} onClick={this.onClickItem} />
          ))
        }
      </MenuItems>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  global: state.global,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReddit: params => dispatch(contentActions.fetchReddit(params)),
  fetchSubReddit: params => dispatch(contentActions.fetchSubReddit(params)),
  changeRedditSorting: params => dispatch(contentActions.changeRedditSorting(params)),
})

const SidebarMenuWithRouter = withRouter(SidebarMenu);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarMenuWithRouter);