import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';

import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import react from 'react';

export default function SignIn() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "android" ? "null" : "height"} 
    style={[styles.container, specificStyle.specificContainer]}
    keyboardVerticalOffset={800}
    enabled={true}>

      <ScrollView style={{width: "100%"}}>
        <View style={styles.container}>

          <View>
            <Image
              source={require('../../assets/lua-e-estrelas.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>LOGIN</Text>
            <Text style={styles.text}>Responda para continuar</Text>
          </View>

          <View style={styles.containerForm}>
            <Text style={styles.loginForm}>E-MAIL</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor='#A9A9A9'
              // Atualiza o estado do email quando o texto do TextInput mudar
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.loginForm}>SENHA</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor='#A9A9A9'
              onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity style={styles.button} 
            onPress={() => {
              console.log('Email:', email);
              console.log('Senha', senha);

              if (email && senha) {
                navigation.navigate('Weather');
              }
              else {
                Alert.alert('Atenção!', 'Preencha os campos vazios!')
              }
            }}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText}>Não possui uma conta? Cadastre-se!</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    padding:0,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#345DA7',
  },

  image: {
    width: '50%',
    alignSelf: 'center',
  },

  title: {
    fontSize: 60,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '-37%',
  },

  text: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#e3d3c5',
  },

  containerForm: {
    backgroundColor: '#e3d3c5',
    width: 400,
    height: 320,
    borderRadius: 50,
    marginTop: '10%',

    paddingStart: '5%',
    paddingEnd: '5%',

    borderTopLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 60
  },

  button: {
    position: 'absolute',
    backgroundColor: '#38bac4',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  loginForm: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    color: '#444749'
  },

  input: {
    backgroundColor: '#cabeb4',
    borderRadius: 20,
    height: 50,
    marginBottom: 12,
    fontSize: 16,
    padding: 10,
  },

  buttonRegister: {
    marginTop: 66,
    alignItems: "center",
    marginLeft: -2,
  },

  registerText: {
    color: 'gray'  
  }
})