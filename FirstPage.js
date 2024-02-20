import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const FirstPage = (props) => {
    const [showEmployeeButtons, setShowEmployeeButtons] = useState(false);
    const [showAdminButtons, setShowAdminButtons] = useState(false);

    const toggleEmployeeButtons = () => {
        setShowEmployeeButtons(!showEmployeeButtons);
    };

    const toggleAdminButtons = () => {
        setShowAdminButtons(!showAdminButtons);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get Started With</Text>
            <TouchableOpacity onPress={toggleEmployeeButtons} style={styles.questionButton}>
                <Text style={styles.question}>Are you an employee?</Text>
            </TouchableOpacity>
            {showEmployeeButtons && (
                <>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Employee SignUp")} style={[styles.link, { backgroundColor: '#3483eb' }]}>
                        <Text style={styles.linkText}>Signup as Employee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Employee Login")} style={[styles.link, { backgroundColor: '#3483eb' }]}>
                        <Text style={styles.linkText}>Login as Employee</Text>
                    </TouchableOpacity>
                </>
            )}
            <TouchableOpacity onPress={toggleAdminButtons} style={styles.questionButton}>
                <Text style={styles.question}>Are you an Admin?</Text>
            </TouchableOpacity>
            {showAdminButtons && (
                <TouchableOpacity onPress={() => props.navigation.navigate("Admin Login")} style={[styles.link, { backgroundColor: '#6942f5' }]}>
                    <Text style={styles.linkText}>Login as Admin</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: "italic",
        marginBottom: 20,
        color: '#333',
    },
    questionButton: {
        marginBottom: 10,
    },
    question: {
        fontSize: 20,
        color: '#555',
        textAlign: 'center',
    },
    link: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
        maxWidth: 300,
    },
    linkText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});