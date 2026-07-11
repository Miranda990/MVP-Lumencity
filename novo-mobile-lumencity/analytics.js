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

export default function AnalyticsScreen({ onNavigateToHome, onNavigateToWallet, onNavigateToProfile }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Qual meu impacto?</Text>
          <Text style={styles.pageSubtitle}>Métricas focadas 100% em sustentabilidade planetária.</Text>
        </View>

        <View style={styles.rankingCard}>
          <View style={styles.rankingBadge}><Text style={styles.rankingBadgeText}>🏆 DESTAQUE</Text></View>
          <Text style={styles.rankingMainText}>Você está entre o <Text style={styles.greenText}>Top 15%</Text> dos usuários mais sustentáveis!</Text>
        </View>

        <View style={styles.co2Card}>
          <Text style={styles.co2Label}>Você já evitou</Text>
          <Text style={styles.co2Value}>31 kg</Text>
          <Text style={styles.co2Sub}>de emissões de CO₂ na atmosfera</Text>
          <View style={styles.progressBarBg}><View style={styles.progressBarFill} /></View>
        </View>

        <Text style={styles.sectionTitle}>Análise por Categoria</Text>
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>♻️ Reciclagem por mês (kg)</Text>
          <View style={styles.barChartContainer}>
            <View style={styles.chartBarColumn}><View style={[styles.chartBar, { height: 40 }]} /><Text style={styles.chartBarLabel}>Mai</Text></View>
            <View style={styles.chartBarColumn}><View style={[styles.chartBar, { height: 65 }]} /><Text style={styles.chartBarLabel}>Jun</Text></View>
            <View style={styles.chartBarColumn}><View style={[styles.chartBar, { height: 95, backgroundColor: '#00E676' }]} /><Text style={styles.chartBarLabelSelected}>Jul</Text></View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToHome}><Text style={styles.navIcon}>🏠</Text><Text style={styles.navText}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToWallet}><Text style={styles.navIcon}>👛</Text><Text style={styles.navText}>Carteira</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIconActive}>📊</Text><Text style={styles.navTextActive}>Analytics</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToProfile}><Text style={styles.navIcon}>👤</Text><Text style={styles.navText}>Perfil</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 110 },
  headerContainer: { marginVertical: 25 },
  pageTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  pageSubtitle: { fontSize: 14, color: '#64748B', marginTop: 4 },
  rankingCard: { backgroundColor: 'rgba(0, 230, 118, 0.05)', borderWidth: 1, borderColor: 'rgba(0, 230, 118, 0.2)', borderRadius: 16, padding: 16, marginBottom: 20 },
  rankingBadge: { backgroundColor: '#00E676', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 10 },
  rankingBadgeText: { color: '#0B0F12', fontSize: 10, fontWeight: '800' },
  rankingMainText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600', lineHeight: 22 },
  greenText: { color: '#00E676' },
  co2Card: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 24, padding: 24, alignItems: 'center', marginBottom: 25 },
  co2Label: { fontSize: 13, color: '#94A3B8' },
  co2Value: { fontSize: width > 360 ? 46 : 40, fontWeight: 'bold', color: '#FFFFFF', marginVertical: 6 },
  co2Sub: { fontSize: 13, color: '#64748B', marginBottom: 16 },
  progressBarBg: { width: '100%', height: 6, backgroundColor: '#1E252B', borderRadius: 3 },
  progressBarFill: { width: '82%', height: '100%', backgroundColor: '#00E676', borderRadius: 3 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', marginBottom: 16 },
  chartCard: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 20, padding: 18, marginBottom: 15 },
  chartTitle: { fontSize: 14, fontWeight: '600', color: '#FFFFFF', marginBottom: 16 },
  barChartContainer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', height: 110 },
  chartBarColumn: { alignItems: 'center' },
  chartBar: { width: 34, backgroundColor: '#1E252B', borderRadius: 6 },
  chartBarLabel: { color: '#64748B', fontSize: 12, marginTop: 8 },
  chartBarLabelSelected: { color: '#00E676', fontSize: 12, fontWeight: '600', marginTop: 8 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, backgroundColor: '#13191E', borderTopWidth: 1, borderTopColor: '#1E252B', flexDirection: 'row', justifyRules: 'center', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 },
  navItem: { alignItems: 'center' },
  navIconActive: { fontSize: 20 },
  navTextActive: { color: '#00E676', fontSize: 11, fontWeight: '600', marginTop: 2 },
  navIcon: { fontSize: 20, opacity: 0.4 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 }
});