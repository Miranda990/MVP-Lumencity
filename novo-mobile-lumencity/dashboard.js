import React from 'react';
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

const { width } = Dimensions.get('window');

export default function DashboardScreen({ onNavigateToRegister, onNavigateToWallet, onNavigateToAnalytics, onNavigateToProfile }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Olá, Leonardo 👋</Text>
            <Text style={styles.subtitleText}>Bem-vindo ao Lumencity.</Text>
          </View>
          <TouchableOpacity style={styles.profileBadge} onPress={onNavigateToProfile}>
            <Text style={{ fontSize: 18 }}>👤</Text>
            <View style={styles.profileDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.mainCardHeader}>
            <Text style={styles.cardLabel}>SALDO ATUAL</Text>
            <View style={styles.tokenBadge}><Text style={styles.tokenBadgeText}>Blockchain Ativa</Text></View>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>145 <Text style={styles.greenText}>LUM</Text></Text>
            <View style={styles.circularGraphContainer}>
              <View style={styles.circularGraph}>
                <Text style={styles.graphInsideText}>⚡</Text>
                <Text style={styles.graphInsideSub}>Bom</Text>
              </View>
            </View>
          </View>
          <Text style={styles.cardFooterText}>Parabéns! Suas validações geraram novos blocos de recompensa.</Text>
        </View>

        <Text style={styles.sectionTitle}>Seu Impacto Ambiental</Text>
        <View style={styles.gridContainer}>
          <View style={styles.miniCard}>
            <Text style={styles.cardIcon}>♻️</Text>
            <Text style={styles.miniCardValue}>12</Text>
            <Text style={styles.miniCardLabel}>reciclagens</Text>
          </View>
          <View style={styles.miniCard}>
            <Text style={styles.cardIcon}>💧</Text>
            <Text style={styles.miniCardValue}>420L</Text>
            <Text style={styles.miniCardLabel}>economizados</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.85} onPress={onNavigateToRegister}>
          <Text style={styles.actionButtonText}>📸 Registrar Ação Sustentável</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* FOOTER TAB BAR (ATUALIZADA COM PERFIL) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToWallet}>
          <Text style={styles.navIcon}>👛</Text>
          <Text style={styles.navText}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={onNavigateToAnalytics}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToProfile}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 110 },
  header: { flexDirection: 'row', justifyRules: 'space-between', justifyContent: 'space-between', alignItems: 'center', marginVertical: 25 },
  welcomeText: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  subtitleText: { fontSize: 14, color: '#64748B', marginTop: 2 },
  profileBadge: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#1E252B', justifyContent: 'center', alignItems: 'center' },
  profileDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#00E676', position: 'absolute', top: 2, right: 2 },
  mainCard: { backgroundColor: '#13191E', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#1E252B', marginBottom: 25 },
  mainCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { fontSize: 12, fontWeight: '700', color: '#64748B', letterSpacing: 1 },
  tokenBadge: { backgroundColor: 'rgba(0, 230, 118, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  tokenBadgeText: { color: '#00E676', fontSize: 11, fontWeight: '600' },
  balanceContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
  balanceText: { fontSize: width > 360 ? 44 : 38, fontWeight: 'bold', color: '#FFFFFF' },
  greenText: { color: '#00E676' },
  circularGraphContainer: { justifyContent: 'center', alignItems: 'center' },
  circularGraph: { width: 75, height: 75, borderRadius: 37.5, borderWidth: 4, borderColor: '#00E676', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F12' },
  graphInsideText: { fontSize: 18 },
  graphInsideSub: { color: '#64748B', fontSize: 10, fontWeight: '600' },
  cardFooterText: { fontSize: 13, color: '#94A3B8', lineHeight: 18 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', marginBottom: 15 },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  miniCard: { backgroundColor: '#13191E', width: '48%', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#1E252B' },
  cardIcon: { fontSize: 22, marginBottom: 8 },
  miniCardValue: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  miniCardLabel: { fontSize: 12, color: '#64748B', marginTop: 2 },
  actionButton: { backgroundColor: '#00E676', borderRadius: 16, paddingVertical: 18, alignItems: 'center', justifyContent: 'center', marginTop: 15, shadowColor: '#00E676', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 6 },
  actionButtonText: { color: '#0B0F12', fontSize: 16, fontWeight: 'bold' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, backgroundColor: '#13191E', borderTopWidth: 1, borderTopColor: '#1E252B', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 },
  navItem: { alignItems: 'center' },
  navIconActive: { fontSize: 20 },
  navTextActive: { color: '#00E676', fontSize: 11, fontWeight: '600', marginTop: 2 },
  navIcon: { fontSize: 20, opacity: 0.4 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 }
});