import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function RegistrarAcaoScreen({ onBack }) {
  const [tipoAcao, setTipoAcao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successTitle}>Solicitação enviada.</Text>
          <Text style={styles.successSubtitle}>Sua ação será analisada.</Text>
          <TouchableOpacity style={styles.actionButton} onPress={onBack}>
            <Text style={styles.actionButtonText}>Voltar ao Dashboard</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onBack}><Text style={styles.backButtonText}>← Voltar</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Ação</Text>
        <View style={{ width: 60 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Registrar Impacto</Text>
        <Text style={styles.inputLabel}>Quantidade</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ex: 5 kg ou 120 litros"
            placeholderTextColor="#475569"
            value={quantidade}
            onChangeText={setQuantidade}
          />
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={() => setEnviado(true)}>
          <Text style={styles.actionButtonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#1E252B' },
  backButtonText: { color: '#64748B', fontSize: 15 },
  headerTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  scrollContent: { paddingHorizontal: 24, paddingVertical: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 20 },
  inputLabel: { fontSize: 14, color: '#94A3B8', marginBottom: 12 },
  inputContainer: { backgroundColor: '#13191E', borderWidth: 1, borderColor: '#1E252B', borderRadius: 12, paddingHorizontal: 14, height: 54, justifyContent: 'center', marginBottom: 35 },
  input: { color: '#FFFFFF', fontSize: 15 },
  actionButton: { backgroundColor: '#00E676', borderRadius: 14, paddingVertical: 16, alignItems: 'center', justifyContent: 'center' },
  actionButtonText: { color: '#0B0F12', fontSize: 16, fontWeight: '700' },
  successContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  successIcon: { fontSize: 64, marginBottom: 20 },
  successTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' },
  successSubtitle: { fontSize: 15, color: '#64748B', marginTop: 8, marginBottom: 30 }
});