import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useAuth } from '../../contexts/AuthContext'
import { router } from 'expo-router'
import { Patient } from '../../lib/supabase'
import HealthTrendsComponent from '../../components/HealthTrendsComponent'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import PatientHeader from '~/components/PatientHeader'

const TrendsScreen: React.FC = () => {
  const { userProfile } = useAuth()
  const patient = userProfile as Patient

  if (!patient) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color="#CCCCCC" />
          <Text style={styles.errorText}>Unable to load patient data</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <PatientHeader title="Health Trends" showBack onBack={() => router.back()} />

      <HealthTrendsComponent
        patientId={patient.id}
        showHeader={false}
        containerStyle={styles.trendsContainer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  trendsContainer: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 16,
    color: '#666666',
    marginTop: 16,
    textAlign: 'center',
  },
})

export default TrendsScreen
