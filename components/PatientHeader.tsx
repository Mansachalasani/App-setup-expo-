import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'

interface PatientHeaderProps {
  title: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
  rightIconName?: keyof typeof MaterialIcons.glyphMap
  onRightPress?: () => void
}

const PatientHeader: React.FC<PatientHeaderProps> = ({
  title,
  subtitle,
  showBack,
  onBack,
  rightIconName,
  onRightPress,
}) => {
  return (
    <LinearGradient
      colors={["#2196F3", "#1976D2", "#0D47A1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.topRow}>
        {showBack ? (
          <TouchableOpacity style={styles.iconBtn} onPress={onBack} activeOpacity={0.7}>
            <MaterialIcons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />

        {rightIconName ? (
          <TouchableOpacity style={styles.iconBtn} onPress={onRightPress} activeOpacity={0.7}>
            <MaterialIcons name={rightIconName} size={22} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <Image
        source={require('../assets/splash-icon.png')}
        style={styles.decoration}
        resizeMode="contain"
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 16,
    paddingBottom: 18,
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  placeholder: {
    width: 36,
    height: 36,
  },
  logo: {
    width: 36,
    height: 36,
    opacity: 0.95,
  },
  textWrap: {
    marginTop: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
  },
  decoration: {
    position: 'absolute',
    right: -24,
    bottom: -10,
    width: 120,
    height: 120,
    opacity: 0.06,
    transform: [{ rotate: '12deg' }],
  },
})

export default PatientHeader

