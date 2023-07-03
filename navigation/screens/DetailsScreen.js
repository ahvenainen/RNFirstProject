import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function DetailsScreen() {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch users and projects from the server when the component is mounted
        fetchUsers();
        fetchProjects();
    }, []);

    const fetchUsers = () => {
        axios.get('http://10.0.2.2:3000/api/users')
            .then(response => {
                console.log('Users fetched successfully:', response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    const fetchProjects = () => {
        axios.get('http://10.0.2.2:3000/api/projects')
            .then(response => {
                console.log('Projects fetched successfully:', response.data);
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    };

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
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>Projects List</Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    );
}
