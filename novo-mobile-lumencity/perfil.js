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

export default function PerfilScreen({ onNavigateToHome, onNavigateToWallet, onNavigateToAnalytics }) {
  
  const conquistas = [
    { id: 1, icone: '🏅', nome: 'Primeira reciclagem' },
    { id: 2, icone: '💧', nome: 'Economizou água' },
    { id: 3, icone: '⚡', nome: 'Economia de energia' },
    { id: 4, icone: '♻️', nome: '100 itens reciclados' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F12" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* TITULO DA TELA */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Quem sou eu?</Text>
        </View>

        {/* CARD PRINCIPAL DO AVATAR */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarEmoji}>👨‍💻</Text>
          </View>
          
          <Text style={styles.profileName}>Leonardo</Text>
          
          <View style={styles.levelBadge}>
            <Text style={styles.levelBadgeText}>🌱 Guardião Verde</Text>
          </View>
        </View>

        {/* METADADOS DO PERFIL */}
        <View style={styles.metaContainer}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Cidade</Text>
            <Text style={styles.metaValue}>Mongaguá</Text>
          </View>
          
          <View style={styles.metaDivider} />
          
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Membro desde</Text>
            <Text style={styles.metaValue}>Julho de 2026</Text>
          </View>
        </View>

        {/* CONQUISTAS */}
        <Text style={styles.sectionTitle}>Conquistas</Text>

        <View style={styles.conquistasGrid}>
          {conquistas.map((badge) => (
            <View key={badge.id} style={styles.conquistaCard}>
              <View style={styles.badgeIconCircle}>
                <Text style={styles.badgeIconText}>{badge.icone}</Text>
              </View>
              <Text style={styles.badgeName}>{badge.nome}</Text>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* FOOTER TAB BAR (PERFIL SELECIONADO) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToHome}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={onNavigateToWallet}>
          <Text style={styles.navIcon}>👛</Text>
          <Text style={styles.navText}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={onNavigateToAnalytics}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>👤</Text>
          <Text style={styles.navTextActive}>Perfil</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 110 },
  headerContainer: { marginVertical: 25 },
  pageTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  
  profileCard: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 24, padding: 24, alignItems: 'center', marginBottom: 20 },
  avatarContainer: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#1E252B', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#00E676', marginBottom: 16 },
  avatarEmoji: { fontSize: 44 },
  profileName: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  levelBadge: { backgroundColor: 'rgba(0, 230, 118, 0.1)', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(0, 230, 118, 0.2)' },
  levelBadgeText: { color: '#00E676', fontSize: 13, fontWeight: '600' },

  metaContainer: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 20, padding: 18, marginBottom: 25 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  metaLabel: { color: '#64748B', fontSize: 14 },
  metaValue: { color: '#FFFFFF', fontSize: 15, fontWeight: '500' },
  metaDivider: { height: 1, backgroundColor: '#1E252B', marginVertical: 12 },

  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', marginBottom: 16 },
  conquistasGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  conquistaCard: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 16, width: '48%', padding: 16, alignItems: 'center', marginBottom: 14 },
  badgeIconCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#1E252B', justifyContent: 'center', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#2E373E' },
  badgeIconText: { fontSize: 22 },
  badgeName: { color: '#94A3B8', fontSize: 12, fontWeight: '500', textAlign: 'center', lineHeight: 16 },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, backgroundColor: '#13191E', borderTopWidth: 1, borderTopColor: '#1E252B', flexDirection: 'row', justifyRules: 'center', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 },
  navItem: { alignItems: 'center' },
  navIconActive: { fontSize: 20 },
  navTextActive: { color: '#00E676', fontSize: 11, fontWeight: '600', marginTop: 2 },
  navIcon: { fontSize: 20, opacity: 0.4 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 },
});