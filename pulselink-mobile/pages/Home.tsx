import { Navbar } from 'components';
import { Details } from 'components/Details';
import { permissions } from 'constants/permissions';
import { useHandleMedicalData } from 'hooks/useHandleMedicalData';
import { useRefresh } from 'hooks/useRefresh';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppleHealthKit from 'react-native-health';
import { colors } from 'styles/colors';
import { Poppins } from 'styles/theme';
import { Layout } from 'ui';

enum HomeStep {
    PERMISSSION_FAILED,
    PERMISSSION_REQUESTED,
    READY,
}

export const Home = (): ReactNode => {
    const [step, setStep] = useState<HomeStep>(HomeStep.PERMISSSION_REQUESTED);
    const { handleMedicalData } = useHandleMedicalData();

    const refreshProps = useRefresh(() => {
        handleMedicalData();
    });

    useEffect(() => {
        setTimeout(() => {
            AppleHealthKit.initHealthKit(permissions, (error) => {
                if (error) {
                    setStep(HomeStep.PERMISSSION_FAILED);
                    console.log('[ERROR] Cannot grant permissions!');
                    return;
                }

                handleMedicalData();
                setStep(HomeStep.READY);
            });
        }, 1000);
    }, []);

    const Main = (): ReactNode => {
        switch (step) {
            case HomeStep.PERMISSSION_REQUESTED:
                return (
                    <View style={styles.fullheight}>
                        <ActivityIndicator />
                        <View>
                            <Text style={styles.text}>
                                Requesting Apple permission
                            </Text>
                        </View>
                    </View>
                );
            case HomeStep.PERMISSSION_FAILED:
                return (
                    <View style={styles.fullheight}>
                        <Text style={styles.text}>
                            Enable permissions to Apple Health to proceed.
                        </Text>

                        <Text style={styles.text}>Settings {'>'} Health</Text>
                    </View>
                );
            case HomeStep.READY:
                return (
                    <View>
                        <Details />
                        <Layout>
                            <View></View>
                        </Layout>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.light }}>
            <View style={styles.wrapper}>
                <ScrollView
                    refreshControl={<RefreshControl {...refreshProps} />}
                >
                    <Main />
                </ScrollView>
                <Navbar />
            </View>
        </SafeAreaView>
    );
};

//eslint-disable-next-line
const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: colors.background,
    },
    fullheight: {
        height: Dimensions.get('screen').height - 200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        marginTop: 12,
        fontFamily: Poppins.regular,
    },
});