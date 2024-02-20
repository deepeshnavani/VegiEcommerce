//Employee SignUp

import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { useFocusEffect } from "@react-navigation/native";

const moveFromHere = (navigation, setfirstName, setEmail, setId, setPass, setRepeatPass) => {
    navigation.replace("Employee Login");
    setfirstName("");
    setEmail("");
    setId("");
    setPass("");
    setRepeatPass("");
};

const signUpDetails =
    (firstname, email, id, pass, repeatPass, display, setDisplay, navigation,
        setfirstName, setEmail, setId, setPass, setRepeatPass,
        nameError, emailError, idError, passError, repeatPassError,
        setNameError, setEmailError, setIdError, setPassError, setRepeatPassError,
        validateName, validateEmail, validateId, validatePass, validateRepeatPass,
        setError, error, setShowPassword, setShowRepeatPassword
    ) => {

        // validateName(firstname);
        // validateEmail(email);
        // validateId(id);
        // validatePass(pass);
        // validateRepeatPass(repeatPass);

        if (display) {
            setError("");
            if (firstname && email && id && pass && repeatPass) {
                setError("");
                if (nameError === "" && emailError === "" && idError === "" && passError === "" && repeatPassError === "") {
                    setError("");
                    if (pass === repeatPass) {
                        setDisplay(true);
                        navigation.navigate("Employee Login", { email: email, pass: pass, firstname: firstname });
                        setfirstName("");
                        setEmail("");
                        setId("");
                        setPass("");
                        setRepeatPass("");
                        setNameError("");
                        setEmailError("");
                        setIdError("");
                        setPassError("");
                        setRepeatPassError("");
                        setError("");
                        setShowPassword();
                        setShowRepeatPassword();
                    }
                    else {
                        setError("Passwords do not match");
                        // console.error("Passwords do not match");
                    }
                }
                else {
                    setError("Please fill all the details correctly!");
                    // console.error("Please fill all the details correctly!");
                }
            }
            else {
                // Alert.alert("Your name is: " + name + "\n" + "Your email is: " + email + "\n" +
                //     "Your id is: " + id + "\n" + "Your password is: " + pass + "\n");
                setError("Please fill all the details!");
                // console.error("Please fill all the details!");
                setDisplay(false);
            }
        }
    }

export const EmployeeSignUp = (props) => {

    const [firstname, setfirstName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [display, setDisplay] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [idError, setIdError] = useState("");
    const [passError, setPassError] = useState("");
    const [repeatPassError, setRepeatPassError] = useState("");
    const [error, setError] = useState("");

    const validateName = (firstname) => {
        const regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        if (firstname === "") {
            setNameError("Please fill this feild");
        }
        else if (!regex.test(firstname)) {
            setNameError("Enter only in first & second name");
        }
        else {
            setNameError("");
        }
    }

    const validateEmail = (email) => {
        // const regex = /^[a-zA-Z0-9]+\@[a-z]{2,}\.[a-z]+([a-z]{1,}\.[a-z]{1,})?$/;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            setEmailError("Please fill this feild");
        }
        else if (!regex.test(email)) {
            setEmailError("Enter in proper email format");
        }
        else {
            setEmailError("");
        }
    }

    const validateId = (id) => {
        const regex = /^[a-zA-Z][0-9]$/;
        if (id === "") {
            setIdError("Please fill this feild");
        }
        else if (!regex.test(id)) {
            setIdError("Enter id with one character and one number");
        }
        else {
            setIdError("");
        }
    }

    const validatePass = (pass) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const whitespaceRegex = /\s/;

        if (pass === "") {
            setPassError("Please fill this feild");
        } else if (pass.length < 8) {
            setPassError("Password must be at least 8 characters");
        } else if (whitespaceRegex.test(pass)) {
            setPassError("Password cannot contain whitespace characters");
        } else if (!uppercaseRegex.test(pass)) {
            setPassError("Password must contain at least one uppercase letter");
        } else if (!lowercaseRegex.test(pass)) {
            setPassError("Password must contain at least one lowercase letter");
        } else if (!digitRegex.test(pass)) {
            setPassError("Password must contain at least one digit");
        } else {
            setPassError("");
        }
    }

    const validateRepeatPass = (repeatPass) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const whitespaceRegex = /\s/;

        if (repeatPass === "") {
            setRepeatPassError("Please fill this feild");
        } else if (repeatPass.length < 8) {
            setRepeatPassError("Password must be at least 8 characters");
        } else if (whitespaceRegex.test(repeatPass)) {
            setRepeatPassError("Password cannot contain whitespace characters");
        } else if (!uppercaseRegex.test(repeatPass)) {
            setRepeatPassError("Password must contain at least one uppercase letter");
        } else if (!lowercaseRegex.test(repeatPass)) {
            setRepeatPassError("Password must contain at least one lowercase letter");
        } else if (!digitRegex.test(repeatPass)) {
            setRepeatPassError("Password must contain at least one digit");
        } else {
            setRepeatPassError("");
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword);
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.main}>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpTitle}>Create an account</Text>
                    <TextInput
                        keyboardType="default"
                        style={[styles.inputField, nameError ? styles.errorBorder : null]}
                        placeholder="Name"
                        onChangeText={(n) => setfirstName(n)}
                        value={firstname}
                        onBlur={() => validateName(firstname)}
                    />
                    {
                        nameError !== "" ?
                            <Text style={styles.errorText}> {nameError} </Text>
                            :
                            null
                    }
                    <TextInput
                        keyboardType="email-address"
                        style={[styles.inputField, emailError ? styles.errorBorder : null]}
                        placeholder="Yourname@gmail.com"
                        onChangeText={(n) => setEmail(n)}
                        value={email}
                        autoCapitalize="none"
                        accessibilityLabel="Email Address"
                        accessibilityHint="Enter your email address"
                        onBlur={() => validateEmail(email)}
                    />
                    {
                        emailError !== "" ? <Text style={styles.errorText}>{emailError}</Text> : null
                    }
                    <TextInput
                        keyboardType="default"
                        style={[styles.inputField, idError ? styles.errorBorder : null]}
                        placeholder="Company Id"
                        onChangeText={(n) => setId(n)}
                        value={id}
                        autoCapitalize="none"
                        onBlur={() => validateId(id)}
                    />
                    {
                        idError !== "" ? <Text style={styles.errorText}>{idError}</Text> : null
                    }
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.inputField, passError ? styles.errorBorder : null]}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(n) => setPass(n)}
                            value={pass}
                            onBlur={() => validatePass(pass)}
                        />
                        <TouchableOpacity onPress={togglePassword} >
                            <Icon style={styles.Icon} name={showPassword ? "eye" : "eye-with-line"} size={22} color="#85888c" />
                        </TouchableOpacity>
                    </View>
                    {
                        passError !== "" ? <Text style={styles.errorText}>{passError}</Text> : null
                    }
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.inputField, repeatPassError ? styles.errorBorder : null]}
                            placeholder="Repeat Password"
                            secureTextEntry={!showRepeatPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(n) => setRepeatPass(n)}
                            value={repeatPass}
                            onBlur={() => validateRepeatPass(repeatPass)}
                        />
                        <TouchableOpacity onPress={toggleRepeatPassword} >
                            <Icon style={styles.Icon} name={showRepeatPassword ? "eye" : "eye-with-line"} size={22} color="#85888c" />
                        </TouchableOpacity>
                    </View>
                    {
                        repeatPassError !== "" ? <Text style={styles.errorText}>{repeatPassError}</Text> : null
                    }
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}
                            onPress={() =>
                                signUpDetails
                                    (firstname, email, id, pass, repeatPass, true, setDisplay, props.navigation,
                                        setfirstName, setEmail, setId, setPass, setRepeatPass,
                                        nameError, emailError, idError, passError, repeatPassError,
                                        setNameError, setEmailError, setIdError, setPassError, setRepeatPassError,
                                        validateName, validateEmail, validateId, validatePass, validateRepeatPass,
                                        setError, error, setShowPassword, setShowRepeatPassword,
                                    )}
                        >Signup</Text>
                    </TouchableOpacity>
                    {
                        error !== "" ? <Text style={styles.errorText}>{error}</Text> : null
                    }
                    <Text style={styles.signUpText}>Already have an account?
                        <Text
                            style={styles.signUpLink}
                            onPress={() => moveFromHere(props.navigation, setfirstName, setEmail, setId, setPass, setRepeatPass)} >
                            Log in</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    signUpTitle: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        padding: responsiveHeight(2),
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    main: {
        backgroundColor: '#3483eb',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(85),
        height: responsiveHeight(75),
        borderRadius: responsiveWidth(5),
        padding: responsiveWidth(2),
    },
    inputField: {
        borderColor: 'black',
        marginVertical: responsiveHeight(1.5),
        borderWidth: 0.8,
        borderRadius: responsiveWidth(2),
        padding: responsiveWidth(2),
        width: responsiveWidth(70),
    },
    signUpButton: {
        backgroundColor: '#3483eb',
        borderRadius: responsiveWidth(2),
        marginVertical: responsiveHeight(1),
        width:"87%"
    },
    signUpButtonText: {
        color: 'white',
        padding: responsiveWidth(4),
        fontSize: responsiveFontSize(1.6),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    signUpText: {
        fontSize: responsiveFontSize(1.6),
        marginVertical: responsiveHeight(2),
    },
    signUpLink: {
        color: 'blue',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon: {
        position: 'absolute',
        right: responsiveWidth(1),
        marginTop: -responsiveHeight(1),
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: "500",
    },
    errorBorder: {
        borderColor: "red"
    }
});