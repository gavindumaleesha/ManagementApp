import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Splash from './components/Splash';
import AddUSer from './components/AddUSer';
import AllUsers from './components/AllUsers';
import AppUser from './components/AppUser';
import Questions from './components/Questions';
import MyProfile from './components/MyProfile';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AskQuestion from './components/AskQuestion';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ header: () => null }}/>
          <Stack.Screen name="UserDashboard" component={UserDashboard} options={{ header: () => null }}/>
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ header: () => null }}/>
          <Stack.Screen name="AddUser" component={AddUSer} options={{ header: () => null }}/>
          <Stack.Screen name="AllUsers" component={AllUsers} options={{ header: () => null }}/>
          <Stack.Screen name="AppUser" component={AppUser} options={{ header: () => null }}/>
          <Stack.Screen name="Questions" component={Questions} options={{ header: () => null }}/>
          <Stack.Screen name="MyProfile" component={MyProfile} options={{ header: () => null }}/>
          <Stack.Screen name="Login" component={Login} options={{ header: () => null }}/>
          <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ header: () => null }}/>
          <Stack.Screen name="AskQuestion" component={AskQuestion} options={{ header: () => null }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
