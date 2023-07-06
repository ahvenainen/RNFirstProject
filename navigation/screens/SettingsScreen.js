import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';

const ProjectCard = ({ project }) => {
    return (
        <View style={styles.projectCard}>
            <View style={styles.sideColor}>
                {project.participants.map((participant, index) => (
                    <Text key={index} style={styles.participant}>{participant}</Text>
                ))}
            </View>
            <View style={styles.cardContent}>
                <View style={styles.titleAndTimeContainer}>
                    <Text style={styles.projectTitle}>{project.name}</Text>
                    <View style={styles.timeContainer}>
                        <Text style={styles.label}>Hours</Text>
                        <Text style={styles.projectTime}>{project.hours}h {project.minutes}m</Text>
                    </View>
                </View>
                <Text style={styles.projectDescription}>{project.description}</Text>
                {project.materials.map((material, index) => (
                    <View key={index} style={styles.materialContainer}>
                        <Text style={styles.material}>{material.name}</Text>
                        <Text style={styles.quantity}>{material.quantity}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const ProjectCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(today);


    // Mocked project data. Replace with your own data fetching logic
    const projects = [
        {
            id: 1,
            name: 'ProjectName',
            date: '2023-07-03',
            description: 'First line\nSecond line',
            participants: ['User1', 'User2'],
            hours: 12,
            minutes: 31,
            materials: [
                { name: 'Screws', quantity: 50 },
                { name: 'Bolts', quantity: 100 },
            ]
        },
        {
            id: 2,
            name: 'ProjectName',
            date: '2023-07-04',
            description: 'This is project 1.',
            participants: ['User3', 'User4'],
            hours: 12,
            minutes: 31,
            materials: [
                { name: 'Screws', quantity: 50 },
                { name: 'Bolts', quantity: 100 },
            ]
        },
        {
            id: 3,
            name: 'ProjectName',
            date: '2023-07-05',
            description: 'This is project 1.',
            participants: ['User4', 'User5'],
            hours: 2,
            minutes: 30,
            materials: [
                { name: 'Screws', quantity: 50 },
                { name: 'Bolts', quantity: 100 },
            ]
        },
        {
            id: 4,
            name: 'ProjectName1',
            date: '2023-07-06',
            description: 'This is project 1.',
            participants: ['User5', 'User6'],
            hours: 2,
            minutes: 30,
            materials: [
                { name: 'Screws', quantity: 50 },
                { name: 'Bolts', quantity: 100 },
            ]
        },
        // Add more projects as needed
    ];

    // Filter projects based on selected date
    const filteredProjects = selectedDate
        ? projects.filter(project => project.date === selectedDate)
        : [];

    // Get today's date in 'YYYY-MM-DD' format
    const today = new Date().toISOString().split('T')[0];

    // Create a markedDates object for ExpandableCalendar
    const markedDates = {
        [today]: { selected: true, marked: true, selectedColor: '#009999' }
    };
    projects.forEach(project => {
        if (!markedDates[project.date]) {
            markedDates[project.date] = { marked: true };
        }
    });


    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Records</Text>
            <CalendarProvider date={today} onDateChanged={setSelectedDate}>
                <View style={styles.calendarCard}>
                    <ExpandableCalendar
                        markedDates={markedDates}
                    />
                    <ScrollView>
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ScrollView>
                </View>
            </CalendarProvider>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 50,
        marginLeft: 50,
    },
    calendarCard: {
        flex: 1,
        marginTop: 70, // Same as marginBottom in header
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    projectCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        marginBottom: 10,
        marginTop: 20,
        width: '90%',
        minHeight: 150, // Set a minimum height
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignSelf: 'center' // This centers the card within its parent
    },
    sideColor: {
        width: '30%',
        backgroundColor: '#B0E0E6',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    participant: {
        fontSize: 14,
    },
    cardContent: {
        width: '75%',
        padding: 10,
        justifyContent: 'flex-start',
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    projectDescription: {
        fontSize: 14,
        marginBottom: 10,
    },
    titleAndTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%', // Limit the width
        paddingRight: 10, // Add some padding on the right
    },
    timeContainer: {
        alignItems: 'center', // This centers the contents horizontally
    },
    projectTime: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    materialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%', // Limit the width
        paddingRight: 10, // Add some padding on the right
    },
    material: {
        fontSize: 16,
    },
    quantity: {
        fontSize: 16,
        color: 'turquoise',
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
        color: 'turquoise',
        fontWeight: 'bold'
    },
});

export default ProjectCalendar;
