import { Slot, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [fontsLoaded, fontsError] = useFonts({
        Inter600: Inter_600SemiBold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontsError])


    if (!fontsError && !fontsLoaded) {
        return null
    }

    return (
        <Stack
            screenOptions={{}}
        >

            <Stack.Screen name="index" options={{
                title: 'DEVember'
            }} />

        </Stack>
    )

}