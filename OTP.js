//Employee Login page

import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export const OTP = (props) => {

    const [otp, setOtp] = useState("");
    const [wrongOtp, setWrongOtp] = useState("");

    const validateOTP = (otp) => {
        const regex = /^[0-9]{6}$/;
        if (otp === "")
            setWrongOtp("Do not leave it blank!");
        else if (otp.length !== 6)
            setWrongOtp("Otp must be exactly 6 characters!");
        else
            setWrongOtp("");
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.main}>
                <View style={styles.loginPage}>
                    <Text style={styles.loginTitle}>OTP Verification Page</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.inputField}
                            placeholder=" Enter OTP"
                            onChangeText={(n) => setOtp(n)}
                            value={otp}
                            autoCapitalize="none"
                            onBlur={() => validateOTP(otp)}
                        />
                    </View>
                    {
                        wrongOtp !== "" ? <Text style={styles.errorText} >{wrongOtp}</Text> : null
                    }
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.loginButtonText} onPress={() => verifyOtp(props.navigation, otp, setWrongOtp)} >Verify</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPassword} onPress={sendOtp} >Resend OTP?</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const sendOtp = () => {
    console.warn("Your otp is: 123456");
}

const verifyOtp = (navigation, otp, setWrongOtp) => {
    if (otp == "123456" && setWrongOtp !== "") {
        navigation.navigate("ChangePassword");
    }
    else {
        console.warn("Incorrect");
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    main: {
        backgroundColor: '#6942f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginPage: {
        backgroundColor: 'white',
        width: responsiveWidth(80),
        height: responsiveHeight(40),
        borderRadius: responsiveWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveWidth(5),
    },
    loginTitle: {
        fontSize: responsiveWidth(5),
        color: 'black',
        padding: responsiveHeight(2),
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    inputField: {
        borderColor: 'black',
        marginVertical: responsiveHeight(1.5),
        borderWidth: 0.5,
        borderRadius: responsiveWidth(2),
        padding: responsiveWidth(3),
        width: '90%',
        paddingRight: 40,
    },
    loginButton: {
        backgroundColor: '#3483eb',
        borderRadius: responsiveWidth(2),
        marginVertical: responsiveHeight(1.5),
        width: '90%',
    },
    loginButtonText: {
        color: 'white',
        padding: responsiveWidth(4),
        fontSize: responsiveWidth(4),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    forgotPassword: {
        color: 'blue',
        textAlign: 'center',
        marginVertical: responsiveHeight(2),
    },
    Icon: {
        position: 'absolute',
        right: responsiveWidth(2),
        marginTop: -responsiveHeight(1),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: "500",
    },
});