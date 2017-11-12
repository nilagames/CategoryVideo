import React, { PureComponent } from 'react';
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
  height: 200px;
`;

class VideoList extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <CellView {...item}>
        <ImageContainer>
          <CachedImage source={{uri : item.thumbnail}} resizeMode="stretch"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </ImageContainer>
        <TitleText>{item.text}</TitleText>
        <SourceText>{item.source}</SourceText>
      </CellView>
    );
  }
};

export default VideoList;
