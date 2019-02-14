import { createBottomTabNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Login: {
            screen: LoginForm
        },
        Profile: {
            screen: Profile
        },

    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);
