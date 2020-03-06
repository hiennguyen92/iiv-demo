import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Linking,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Main.Style';
import { getListRequest } from './Main.Action';
import NoDataView from '../Components/NoDataView';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { barStyle } from '../const';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      getList: { fetching: false, data: null, err: null },
    };
    this.page = 1;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { getList: nextProps.getList };
  }
  componentDidMount() {
    this.props.onCallApi(getListRequest(this.page));
  }


  onPressTabGrayScale = () => {
    this.setState({ currentTab: 0 })
  };

  onPressTabColor = () => {
    this.setState({ currentTab: 1 })
  };



  onPressShare = item => {
    let body = 'shareApp://117/1544/1024'
    const sep = Platform.OS === 'ios' ? '&' : '?'
    const url = `sms:${''}${
      body ? `${sep}body=${encodeURIComponent(body)}` : ''
      }`
    this.launchURL(url)
  }

  async launchURL(url) {
    const supported = await Linking.canOpenURL(url)
    if (!supported) {
      return Promise.reject(new Error('Provided URL can not be handled'))
    }
    return Linking.openURL(url)
  }


  render() {
    const { currentTab } = this.state
    return (
      <View style={styles.mainContainer}>
        {this.renderToolbar()}


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.btnGrayScale, { backgroundColor: currentTab === 0 ? colors.grey : colors.charcoalGrey }]}
            onPress={this.onPressTabGrayScale}>
            <Text style={styles.textGetData}>Gray Scale</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: currentTab === 1 ? colors.grey : colors.charcoalGrey }]}
            onPress={this.onPressTabColor}>
            <Text style={styles.textGetData}>Color</Text>
          </TouchableOpacity>

        </View>

        {this.renderDataView()}

        {this.state.getList.fetching ? (
          <View style={styles.viewLoading}>
            <ActivityIndicator />
          </View>
        ) : null}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <View style={styles.viewWrapIcLeft} />
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Demo</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  renderDataView = () => {
    if (this.state.getList.data) {
      return (
        <FlatList
          style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}
          data={this.state.getList.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.renderFooterList}
          ListFooterComponent={this.renderFooterList}
          // onEndReached={this.loadMoreData}
        />
      );
    } else if (this.state.getList.err) {
      return <NoDataView onRetryPress={this.getUserProfile} />;
    } else {
      return null;
    }
  };

  renderItem = ({ item, index }) => {
    const { currentTab } = this.state
    return (
      <View style={styles.viewWrapItem}>
        <Image style={styles.image} source={{ uri: currentTab === 1 ? item.download_url : `${item.download_url}?grayscale` }} />
        <View style={styles.itemFooterWrapper}>
          <Text style={styles.textBy}>by {item.author}</Text>
          <TouchableOpacity
            style={styles.btnShare}
            onPress={() => this.onPressShare(item)}>
            <Text style={styles.textShare} >Share</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  renderFooterList = () => {
    return <View style={{ height: 10 }} />;
  };

  // loadMoreData = () => {
  //   this.page++
  //   this.props.onCallApi(getListRequest(this.page));
  // }
}

const mapStateToProps = state => {
  return {
    getList: state.getList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCallApi: object => dispatch(object),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
