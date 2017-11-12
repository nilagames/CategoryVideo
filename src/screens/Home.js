import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { CategoryList } from '../components';
import { HOME_DATA } from '../data/sample';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <CategoryList data={HOME_DATA} text={'Alphabets'} />
        <CategoryList data={HOME_DATA} text={'Fruits & Vegetables'} />
        <CategoryList data={HOME_DATA} text={'Animals'} />
        <CategoryList data={HOME_DATA} text={'Shapes'} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
