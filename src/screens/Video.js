import React, { Component } from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  ScrollView,
} from 'react-native';
import config from '../../config';
import YouTube from 'react-native-youtube';

class VideoScreen extends Component {
  state = {
    isPlaying: true,
    isLooping: false,
    fullscreen: true,
  };

  videoError(e) {}

  videoState(e) {
    if (e.state == 'playing') {
    }
  }

  videoProgress(e) {}

  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <ScrollView>
        <YouTube
          ref={component => {
            this._youTubeRef = component;
          }}
          apiKey={config.YTKey}
          videoId={params.videoID}
          // Variables
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={2}
          showinfo={true}
          modestbranding={false}
          rel={false}
          showFullscreenButton={false}
          style={styles.backgroundVideo}
          // Methods
          onError={(e) => { this.videoError(e.error) }}
          onChangeState={(e) => { this.videoState({ e: e, state: e.state }) }}
          onReady={(e) => { this.videoState({ e: e, state: 'ready' }) }}
          onProgress={(e) => { this.videoProgress({ e: e, currentTime: e.currentTime, duration: e.duration }) }}
          onChangeQuality={(e) => { this.videoState({ e: e, quality: e.quality }) }}
        />
      </ScrollView>
    );
  }
}


// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    alignSelf: 'stretch',
    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)),
  },
});

export default VideoScreen;
