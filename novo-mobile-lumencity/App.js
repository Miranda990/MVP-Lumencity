import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

// Importação das telas do fluxo
import LoginScreen from './login'; 
import DashboardScreen from './dashboard';
import RegistrarAcaoScreen from './registrar-acao';
import CarteiraScreen from './carteira';
import AnalyticsScreen from './analytics';
import PerfilScreen from './perfil'; // Nova tela de Perfil

const { width } = Dimensions.get('window');

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Landing');

  // Gerenciador de Navegação Condicional
  if (currentScreen === 'Login') {
    return <LoginScreen onNavigate={() => setCurrentScreen('Dashboard')} />;
  }

  if (currentScreen === 'Dashboard') {
    return (
      <DashboardScreen 
        onNavigateToRegister={() => setCurrentScreen('RegistrarAcao')} 
        onNavigateToWallet={() => setCurrentScreen('Carteira')}
        onNavigateToAnalytics={() => setCurrentScreen('Analytics')}
        onNavigateToProfile={() => setCurrentScreen('Perfil')}
      />
    );
  }

  if (currentScreen === 'RegistrarAcao') {
    return <RegistrarAcaoScreen onBack={() => setCurrentScreen('Dashboard')} />;
  }

  if (currentScreen === 'Carteira') {
    return (
      <CarteiraScreen 
        onNavigateToHome={() => setCurrentScreen('Dashboard')} 
        onNavigateToAnalytics={() => setCurrentScreen('Analytics')}
        onNavigateToProfile={() => setCurrentScreen('Perfil')}
      />
    );
  }

  if (currentScreen === 'Analytics') {
    return (
      <AnalyticsScreen 
        onNavigateToHome={() => setCurrentScreen('Dashboard')} 
        onNavigateToWallet={() => setCurrentScreen('Carteira')}
        onNavigateToProfile={() => setCurrentScreen('Perfil')}
      />
    );
  }

  if (currentScreen === 'Perfil') {
    return (
      <PerfilScreen 
        onNavigateToHome={() => setCurrentScreen('Dashboard')} 
        onNavigateToWallet={() => setCurrentScreen('Carteira')}
        onNavigateToAnalytics={() => setCurrentScreen('Analytics')}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.logoText}>
            lumen<Text style={styles.logoHighlight}>city</Text>
          </Text>
        </View>

        <View style={styles.heroSection}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🌍 Building a Smarter, Greener Tomorrow</Text>
          </View>

          <Text style={styles.title}>
            Suas ações sustentáveis agora têm <Text style={styles.greenText}>valor.</Text>
          </Text>

          <Text style={styles.description}>
            O Lumencity recompensa cidadãos por práticas sustentáveis como reciclagem e economia de água e energia, utilizando blockchain para registrar recompensas de forma transparente.
          </Text>
        </View>

        <View style={styles.howItWorksSection}>
          <Text style={styles.sectionTitle}>Como funciona</Text>

          <View style={styles.stepCard}>
            <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>1</Text></View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Faça uma ação sustentável</Text>
              <Text style={styles.stepDescription}>Recicle lixo ou economize água e luz na sua casa.</Text>
            </View>
          </View>

          <View style={styles.arrowContainer}><Text style={styles.arrow}>↓</Text></View>

          <View style={styles.stepCard}>
            <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>2</Text></View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Sua ação é validada</Text>
              <Text style={styles.stepDescription}>Nossos sistemas e a rede blockchain auditam seu impacto.</Text>
            </View>
          </View>

          <View style={styles.arrowContainer}><Text style={styles.arrow}>↓</Text></View>

          <View style={styles.stepCard}>
            <View style={styles.stepBadgeToken}><Text style={styles.stepBadgeText}>$</Text></View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Receba tokens LUM</Text>
              <Text style={styles.stepDescription}>Troque seus tokens por benefícios reais ou moedas.</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8} onPress={() => setCurrentScreen('Login')}>
          <Text style={styles.ctaButtonText}>Começar</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  header: { paddingVertical: 20, alignItems: 'flex-start' },
  logoText: { fontSize: 22, fontWeight: '700', color: '#FFFFFF', letterSpacing: -0.5 },
  logoHighlight: { color: '#00E676' },
  heroSection: { marginTop: 20, marginBottom: 35 },
  badge: { alignSelf: 'flex-start', backgroundColor: 'rgba(0, 230, 118, 0.1)', borderWidth: 1, borderColor: 'rgba(0, 230, 118, 0.3)', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12, marginBottom: 20 },
  badgeText: { color: '#00E676', fontSize: 12, fontWeight: '600' },
  title: { fontSize: width > 360 ? 36 : 30, fontWeight: 'bold', color: '#FFFFFF', lineHeight: width > 360 ? 44 : 38, marginBottom: 16 },
  greenText: { color: '#00E676' },
  description: { fontSize: 16, color: '#94A3B8', lineHeight: 24 },
  howItWorksSection: { marginBottom: 40 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', marginBottom: 20 },
  stepCard: { flexDirection: 'row', backgroundColor: '#13191E', borderRadius: 16, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#1E252B' },
  stepBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#1E252B', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  stepBadgeToken: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#00E676', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  stepBadgeText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  stepTextContainer: { flex: 1 },
  stepTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', marginBottom: 4 },
  stepDescription: { fontSize: 13, color: '#94A3B8' },
  arrowContainer: { alignItems: 'center', marginVertical: 8 },
  arrow: { color: '#00E676', fontSize: 20, fontWeight: 'bold' },
  ctaButton: { backgroundColor: '#00E676', borderRadius: 12, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', shadowColor: '#00E676', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
  ctaButtonText: { color: '#0B0F12', fontSize: 18, fontWeight: '700' },
});