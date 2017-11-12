import React, { Component } from 'react';
import styled from 'styled-components/native';
import MasonryList from '@appandflow/masonry-list';
import { Cell } from '../components';
import { RANDOM_COLORS } from '../utils/constants';

/* Temporary Data for Masonry */
const DATA = Array.from({ length: 50 }).map((_, i) => ({
  id: `item_${i}`,
  text: `${i}`,
  height: Math.round(Math.random() * 75 + 150),
  color: RANDOM_COLORS[i % RANDOM_COLORS.length],
}));

const MasonryView = styled.View`
  margin: 5px;
`;

class CategoryScreen extends Component {
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
          renderItem={({ item }) => <Cell item={item} />}
          getHeightForItem={({ item }) => item.height + 2}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </MasonryView>
    );
  }
}

export default CategoryScreen;
