import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { CategoryList } from '../components';
import { DATA } from '../data/sample';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <CategoryList data={DATA} text={'Alphabets'} />
        <CategoryList data={DATA} text={'Fruits & Vegetables'} />
        <CategoryList data={DATA} text={'Animals'} />
        <CategoryList data={DATA} text={'Shapes'} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
