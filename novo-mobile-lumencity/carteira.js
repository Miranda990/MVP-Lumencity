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

export default function CarteiraScreen({ onNavigateToHome, onNavigateToAnalytics, onNavigateToProfile }) {
  const historicoTransacoes = [
    { id: 1, titulo: 'Reciclagem Papel', tempo: 'Ontem', valor: '+20' },
    { id: 2, titulo: 'Economia Água', tempo: '3 dias atrás', valor: '+15' },
    { id: 3, titulo: 'PET', tempo: 'Semana passada', valor: '+30' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Minha Carteira</Text>
          <Text style={styles.pageSubtitle}>Seus ativos digitais e registros na Blockchain.</Text>
        </View>

        <View style={styles.walletCard}>
          <Text style={styles.walletLabel}>Quanto eu já ganhei?</Text>
          <Text style={styles.walletValue}>145 <Text style={styles.greenText}>LUM</Text></Text>
          <View style={styles.networkBadge}>
            <View style={styles.networkDot} />
            <Text style={styles.networkText}>Rede Principal Ativa</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Histórico</Text>
        <View style={styles.historyList}>
          {historicoTransacoes.map((item) => (
            <View key={item.id} style={styles.historyItem}>
              <View style={styles.itemLeftContent}>
                <View style={styles.tokenCircle}><Text style={styles.tokenCircleText}>$</Text></View>
                <View><Text style={styles.itemTitle}>{item.titulo}</Text><Text style={styles.itemTime}>{item.tempo}</Text></View>
              </View>
              <Text style={styles.itemValue}>{item.valor} LUM</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToHome}><Text style={styles.navIcon}>🏠</Text><Text style={styles.navText}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIconActive}>👛</Text><Text style={styles.navTextActive}>Carteira</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToAnalytics}><Text style={styles.navIcon}>📊</Text><Text style={styles.navText}>Analytics</Text></TouchableOpacity>
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
  walletCard: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 24, padding: 24, alignItems: 'center', marginBottom: 30 },
  walletLabel: { fontSize: 14, color: '#94A3B8', fontWeight: '500', marginBottom: 10 },
  walletValue: { fontSize: width > 360 ? 46 : 40, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 },
  greenText: { color: '#00E676' },
  networkBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 230, 118, 0.06)', borderWidth: 1, borderColor: 'rgba(0, 230, 118, 0.15)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  networkDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#00E676', marginRight: 8 },
  networkText: { color: '#00E676', fontSize: 12, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', marginBottom: 16 },
  historyList: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 20, paddingVertical: 6 },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#1E252B' },
  itemLeftContent: { flexDirection: 'row', alignItems: 'center' },
  tokenCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0, 230, 118, 0.1)', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  tokenCircleText: { color: '#00E676', fontSize: 16, fontWeight: 'bold' },
  itemTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  itemTime: { color: '#64748B', fontSize: 12, marginTop: 2 },
  itemValue: { color: '#00E676', fontSize: 15, fontWeight: '700' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, backgroundColor: '#13191E', borderTopWidth: 1, borderTopColor: '#1E252B', flexDirection: 'row', justifyRules: 'center', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 },
  navItem: { alignItems: 'center' },
  navIconActive: { fontSize: 20 },
  navTextActive: { color: '#00E676', fontSize: 11, fontWeight: '600', marginTop: 2 },
  navIcon: { fontSize: 20, opacity: 0.4 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 },
});