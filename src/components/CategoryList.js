import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { VideoList } from '../components';
import { HOME_DATA } from '../data/sample';

const CategoryView = styled.View`
  marginTop: 10px;
  marginBottom: 10px;
`;
const CategoryTitle = styled.Text`
  fontSize: 20;
  fontWeight: bold;
  marginLeft: 10px;
  marginRight: 10px;
  alignSelf: flex-start;
  color: ${props => props.theme.textColor};
`;

class CategoryList extends Component {
  render() {
    return (
      <CategoryView>
        <CategoryTitle>{this.props.text}</CategoryTitle>
        <FlatList
          data={this.props.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <VideoList item={item} />}
          horizontal={true}
        />
      </CategoryView>
    );
  }
};

export default CategoryList;
