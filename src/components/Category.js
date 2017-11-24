import React, { PureComponent } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { CachedImage } from "react-native-img-cache";

const CellView = styled.View`
  margin: 10px;
  marginBottom: 0px;
  backgroundColor: ${props => props.color};
  height: ${props => props.height};
  elevation: 10;
  borderRadius: 3;
  overflow: hidden;
  minWidth: 320px;
`;
const TitleText = styled.Text`
  textAlign: center;
  fontSize: 24;
  marginTop: 10;
  color: ${props => props.theme.WHITE};
`;
const ImageContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: ${props => props.height};
`;

class Category extends PureComponent {
  render() {
    const { item, height, navigate } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => navigate('CategoryVideos', { item: item })}>
        <CellView {...item}>
          <ImageContainer height={height}>
            <CachedImage source={{uri : item.image}} resizeMode="stretch"
              style={styles.thumbnail}
            />
          </ImageContainer>
          <TitleText>{item.name}</TitleText>
        </CellView>
      </TouchableWithoutFeedback>
    );
  }
};

var styles = StyleSheet.create({
  thumbnail: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Category;
