import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ShopScreen from '../ShopScreen';
import HomeScreen from '../HomeScreen';
import ScanScreen from '../ScanScreen';

const screens = {
  Shop: ShopScreen,

  Home: HomeScreen,

  Scan: ScanScreen,
};
const shopStack = createStackNavigator(screens);

export default createAppContainer(shopStack);
