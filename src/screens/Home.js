import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { CategoryList } from '../components';
import { HOME_DATA } from '../data/sample';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <CategoryList data={HOME_DATA} text={'Alphabets'} navigate={this.props.navigation.navigate} />
        <CategoryList data={HOME_DATA} text={'Fruits & Vegetables'} navigate={this.props.navigation.navigate} />
        <CategoryList data={HOME_DATA} text={'Animals'} navigate={this.props.navigation.navigate} />
        <CategoryList data={HOME_DATA} text={'Shapes'} navigate={this.props.navigation.navigate} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
