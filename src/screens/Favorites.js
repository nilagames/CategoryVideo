import React, { Component } from 'react';
import styled from 'styled-components/native';
import MasonryList from '@appandflow/masonry-list';
import { VideoList } from '../components';
import { DATA } from '../data/sample';

const MasonryView = styled.View`
  marginBottom: 10px;
`;

class FavoritesScreen extends Component {
  state = { isRefreshing: false };

  _refreshRequest = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  render() {
    return (
      <MasonryView>
        <MasonryList
          onRefresh={this._refreshRequest}
          refreshing={this.state.isRefreshing}
          data={DATA}
          renderItem={({ item }) => <VideoList item={item} />}
          getHeightForItem={({ item }) => item.height + 2}
          numColumns={1}
          keyExtractor={item => item.id}
        />
      </MasonryView>
    );
  }
}

export default FavoritesScreen;
