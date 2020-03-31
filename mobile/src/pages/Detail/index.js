import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import styles from "./styles";
import logoImg from "../../assets/logo.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  const message = `Olá ${ incident.name }, estou entrando em contacto, pois gostaria de ajudar no caso ${incident.title}, com o valor de ${Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Heróis do caso: ${ incident.title }`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={24} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
  <Text style={styles.incidentValue}>{incident.name} de { incident.city }/{ incident.uf }</Text>

        <Text style={styles.incidentProperty}>CASO: </Text>
        <Text style={styles.incidentValue}> {incident.description} </Text>

        <Text style={styles.incidentProperty}>VALOR: </Text>
        <Text style={styles.incidentValue}>
          {" "}
          {Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
          }).format(incident.value)}{" "}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contacto:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
