import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
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
  marginTop: 5px;
  fontSize: 20;
  marginLeft: 10px;
  marginRight: 10px;
  color: ${props => props.theme.WHITE};
`;
const SourceText = styled.Text`
  fontSize: 11px;
  marginLeft: 10px;
  marginRight: 10px;
  color: ${props => props.theme.WHITE};
`;
const ImageContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: ${props => props.height};
`;

class VideoList extends PureComponent {
  render() {
    const { item, height } = this.props;
    return (
      <CellView {...item}>
        <ImageContainer height={height}>
          <CachedImage source={{uri : item.thumbnail}} resizeMode="stretch"
            style={styles.thumbnail}
          />
        </ImageContainer>
        <TitleText>{item.text}</TitleText>
        <SourceText>{item.source}</SourceText>
      </CellView>
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

export default VideoList;
