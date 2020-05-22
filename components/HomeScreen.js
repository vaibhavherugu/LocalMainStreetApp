import * as React from 'react';
import {
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Navigator from './routes/shopStack';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3006/app/qrcode/posts')
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch(function (err) {
        alert(err);
      });
  }

  render() {
    console.log('##data', this.state.data);
    const Item = ({user}) => {
      console.log('##item');
      console.log(user);
      return (
        <View>
          <Text>{user.item.nameq}</Text>
          <Text>{user.item.balance}</Text>
        </View>
      );
    };
    const {navigate} = this.props.navigation;
    return (
      <Navigator />

      // <StatusBar hidden />
      /* <FlatList
          data={this.state.data}
          renderItem={(user) => <Item user={user} />}
          keyExtractor={(user) => user.id}
        /> */
    );
  }
}
const styles = StyleSheet.create({});

export default HomeScreen;
