import { Tabs } from 'expo-router/tabs';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Ionicons from "@expo/vector-icons/Ionicons"

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'localhost:4000/graphql',
    cache: new InMemoryCache()
});

export default function AppLayout() {
    return (
        <ApolloProvider client={client}>
            <Tabs
                initialRouteName='(home)/home'
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName: any = "home"
    
                        if (route.name === "(home)/home") {
                            iconName = focused ? 
                                "home" : "home-outline"
                        } else if (route.name === "(settings)/settings") {
                            iconName = focused ?
                                "settings" : "settings-outline"
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: "#13017C",
                    tabBarInactiveTintColor: "#DEDEDE",
                    tabBarHideOnKeyboard: true
                })}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        href: null
                    }}
                />
                <Tabs.Screen
                    name="(home)/home"
                    options={{
                        headerTitle: "Payam",
                        tabBarActiveTintColor: "rgba(0, 0, 0, 0.7)",
                        tabBarLabel: "Home"
                    }}
                />
                <Tabs.Screen
                    name="(settings)/settings"
                    options={{
                        headerTitle: "Settings",
                        tabBarActiveTintColor: "rgba(0, 0, 0, 0.7)",
                        tabBarLabel: "Settings"
                    }}
                />
            </Tabs>
        </ApolloProvider>
    );
}