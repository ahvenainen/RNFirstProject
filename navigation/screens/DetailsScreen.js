import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DetailsScreen() {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
        fetchProjects();
        fetchMaterials();
    }, []);

    const fetchUsers = () => {
        axios.get('http://10.0.2.2:3000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    const fetchProjects = () => {
        axios.get('http://10.0.2.2:3000/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    };

    const fetchMaterials = () => {
        axios.get('http://10.0.2.2:3000/api/materials')
            .then(response => {
                setMaterials(response.data);
            })
            .catch(error => {
                console.error('Error fetching materials:', error);
            });
    };


    const fetchPopulatedUsers = () => {
        axios.get('http://10.0.2.2:3000/api/users/populated')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching populated users:', error);
            });
    };

    useFocusEffect(
        useCallback(() => {
            fetchPopulatedUsers();
            fetchProjects();
            fetchMaterials();
        }, [])
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Users List</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>Projects Dropdown</Text>
            <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={projects.map(project => ({ label: project.name, value: project._id }))}
                defaultValue={selectedProject}
                containerStyle={{ height: 40, width: 200, marginBottom: 50, }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{ justifyContent: 'flex-start' }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setSelectedProject(item.value)}
            />
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 50 }}>Materials List</Text>
            <FlatList
                data={materials}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>Item: {item.name}</Text>
                        <Text>Amount: {item.amount}</Text>
                    </View>
                )}

            />
            <FlatList
                data={users}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>User: {item.name}</Text>
                        {item.projects.map((project) => (
                            <Text key={project._id}>Project: {project.name}</Text>
                        ))}
                        {item.materials.map((material) => (
                            <Text key={material._id}>Material: {material.name}, Amount: {material.amount}</Text>
                        ))}
                        {item.hours.map((hour) => (
                            <Text key={hour._id}>Hours: {hour.hours}, Minutes: {hour.minutes}</Text>
                        ))}
                    </View>
                )}
            />

        </View>
    );
}
