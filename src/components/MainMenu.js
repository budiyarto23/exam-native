import { createBottomTabNavigator } from 'react-navigation';
import HomePage from './Home';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomePage
        },
        Profile: {
            screen: Profile
        }
    },  
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);