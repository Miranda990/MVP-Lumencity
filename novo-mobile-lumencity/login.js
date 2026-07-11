import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.logoText}>lumen<Text style={styles.logoHighlight}>city</Text></Text>
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to manage your sustainable rewards and impact.</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.inputLabel}>Email address</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>✉</Text>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#475569"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#475569"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onNavigate}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? <Text style={styles.signUpText}>Sign Up</Text></Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  scrollContent: { flexGrow: 1, paddingHorizontal: 28, justifyContent: 'center', paddingVertical: 20 },
  header: { alignItems: 'center', marginBottom: height * 0.04 },
  logoText: { fontSize: 24, fontWeight: '700', color: '#FFFFFF', letterSpacing: -0.5 },
  logoHighlight: { color: '#00E676' },
  welcomeContainer: { marginBottom: 32 },
  title: { fontSize: width > 360 ? 32 : 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#64748B', lineHeight: 20 },
  form: { marginBottom: 24 },
  inputLabel: { fontSize: 12, color: '#94A3B8', marginBottom: 8, fontWeight: '500' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 12, paddingHorizontal: 14, height: 54, marginBottom: 20 },
  inputIcon: { color: '#64748B', fontSize: 16, marginRight: 10 },
  input: { flex: 1, color: '#FFFFFF', fontSize: 15 },
  forgotPasswordButton: { alignSelf: 'flex-start', marginTop: -4 },
  forgotPasswordText: { color: '#00E676', fontSize: 14, fontWeight: '500' },
  button: { backgroundColor: '#00E676', borderRadius: 12, height: 54, alignItems: 'center', justifyRules: 'center', justifyContent: 'center', shadowColor: '#00E676', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4, marginTop: 10 },
  buttonText: { color: '#0B0F12', fontSize: 16, fontWeight: '700' },
  footer: { alignItems: 'center', marginTop: height * 0.05 },
  footerText: { color: '#64748B', fontSize: 14 },
  signUpText: { color: '#00E676', fontWeight: '600' },
});