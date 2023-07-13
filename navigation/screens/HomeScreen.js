import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const [inputText, setInputText] = useState('');
    const [projectName, setProjectName] = useState('');
    const [materialName, setMaterialName] = useState('');
    const [materialAmount, setMaterialAmount] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const handleUploadUser = () => {
        console.log('User input:', inputText);
        // Make an HTTP request to upload the user data to the server
        axios.post('http://10.0.2.2:3000/api/users/create', { name: inputText })
            .then(response => {
                console.log('User added successfully');
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });
    };

    const handleUploadProject = () => {
        // Make an HTTP request to upload the project data to the server
        axios.post('http://10.0.2.2:3000/api/projects/create', { name: projectName })
            .then(response => {
                console.log('Project added successfully');
            })
            .catch(error => {
                console.error('Error adding project:', error);
            });
    };

    const handleUploadMaterial = () => {
        // Make an HTTP request to upload the material data to the server
        axios.post('http://10.0.2.2:3000/api/materials/create', { name: materialName, amount: materialAmount })
            .then(response => {
                console.log('Material added successfully');
            })
            .catch(error => {
                console.error('Error adding material:', error);
            });
    };

    const handleUploadHours = () => {
        // Make an HTTP request to upload the hours and minutes data to the server
        axios.post('http://10.0.2.2:3000/api/hours/create', { hours: hours, minutes: minutes })
            .then(response => {
                console.log('Hours and minutes added successfully');
            })
            .catch(error => {
                console.error('Error adding hours and minutes:', error);
            });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setProjectName(text)}
                    value={projectName}
                    placeholder="Enter project name"
                />
                <Button onPress={handleUploadProject} title="Add Project" />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setInputText(text)}
                    value={inputText}
                    placeholder="Enter username"
                />
                <Button onPress={handleUploadUser} title="Add User" />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TextInput
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setMaterialName(text)}
                    value={materialName}
                    placeholder="Material name"
                />
                <TextInput
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, marginLeft: 10 }}
                    onChangeText={text => setMaterialAmount(text)}
                    value={materialAmount}
                    placeholder="Amount"
                    keyboardType="numeric"
                />
                <Button onPress={handleUploadMaterial} title="Add Material" />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TextInput
                    style={{ height: 40, width: 90, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setHours(text)}
                    value={hours}
                    placeholder="Hours"
                    keyboardType="numeric"
                />
                <Text style={{ marginHorizontal: 10 }}>:</Text>
                <TextInput
                    style={{ height: 40, width: 90, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setMinutes(text)}
                    value={minutes}
                    placeholder="Minutes"
                    keyboardType="numeric"
                />
                <Button onPress={handleUploadHours} title="Add Hours" />
            </View>
        </View>
    );

}
