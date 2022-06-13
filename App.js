import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SignUpScreen from './src/screens/ProfileAuth/SignUpScreen';
import PhoneNumberScreen from './src/screens/ProfileAuth/PhoneNumberScreen';
import VerifyingCodeScreen from './src/screens/ProfileAuth/VerifyingCodeScreen';
import ProfileDetailScreen from './src/screens/ProfileAuth/ProfileDetailScreen';
import ChoosingGenderScreen from './src/screens/ProfileAuth/ChoosingGenderScreen';
import HomeScreen from './src/screens/MainApp/HomeScreen';
import { GlobalStyles } from './src/constants/styles';
import MatchesScreen from './src/screens/MainApp/MatchesScreen';
import MessageScreen from './src/screens/MainApp/MessageScreen';
import UserProfileScreen from './src/screens/MainApp/UserProfileScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomTab = () => (
    <BottomTab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: GlobalStyles.colors.background },
            tabBarActiveTintColor: GlobalStyles.colors.red,
            tabBarInactiveTintColor: GlobalStyles.textColor.inactive,
            tabBarShowLabel: false,
        }}
    >
        <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="cards"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <BottomTab.Screen
            name="MatchesScreen"
            component={MatchesScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="heart"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <BottomTab.Screen
            name="MessageScreen"
            component={MessageScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="message-text"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <BottomTab.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
    </BottomTab.Navigator>
);

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
            name="PhoneNumberScreen"
            component={PhoneNumberScreen}
            options={{ headerLeft: () => null }}
        />
        <Stack.Screen
            name="VerifyingCodeScreen"
            component={VerifyingCodeScreen}
        />
        <Stack.Screen
            name="ProfileDetailScreen"
            component={ProfileDetailScreen}
            options={{ headerLeft: () => null }}
        />
        <Stack.Screen
            name="ChoosingGenderScreen"
            component={ChoosingGenderScreen}
        />
    </Stack.Navigator>
);

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Homepage"
                >
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    <Stack.Screen name="Homepage" component={HomeBottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
