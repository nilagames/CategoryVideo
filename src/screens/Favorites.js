import React, { Component } from 'react';
import styled from 'styled-components/native';
import MasonryList from '@appandflow/masonry-list';
import { VideoList, FloatingAction } from '../components';
import { DATA } from '../data/sample';
import { AppoDealInit } from '../utils';

const MasonryView = styled.View`
  marginBottom: 50px;
`;

class FavoritesScreen extends Component {
  state = { isRefreshing: false };

  _refreshRequest = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  componentDidMount() {
    AppoDealInit();
  }

  render() {
    return (
      <MasonryView>
        <MasonryList
          onRefresh={this._refreshRequest}
          refreshing={this.state.isRefreshing}
          data={DATA}
          renderItem={({ item }) => <VideoList item={item} height={'200px'} navigate={this.props.navigation.navigate} />}
          getHeightForItem={({ item }) => item.height + 2}
          numColumns={1}
          keyExtractor={item => item.id}
        />
        <FloatingAction />
      </MasonryView>
    );
  }
}

export default FavoritesScreen;
