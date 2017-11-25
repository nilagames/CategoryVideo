import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MasonryList from '@appandflow/masonry-list';
import styled from 'styled-components/native';

import { Category, FloatingAction } from '../components';
import { CATEGORIES } from '../data/sample';

const MasonryView = styled.View`
  marginBottom: 50px;
`;

class HomeScreen extends Component {
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
          data={CATEGORIES}
          renderItem={({ item }) => <Category item={item} height={'200px'} navigate={this.props.navigation.navigate} />}
          getHeightForItem={({ item }) => item.height + 2}
          numColumns={1}
          keyExtractor={item => item.id}
        />
        <FloatingAction />
      </MasonryView>
    );
  }
}

export default HomeScreen;
