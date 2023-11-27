import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeWrapper } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';
import auth from '@'


export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Iniciar' component={Iniciar} options={{headerShown:false}} />
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown:false}} />
        <Stack.Screen name='Compras' component={Compras} options={{headerShown:false}} />
        <Stack.Screen name='Mancer' component={Mancer} options={{headerShown:false}} />
        <Stack.Screen name='Nitro' component={Nitro} options={{headerShown:false}} />
        <Stack.Screen name='Fryer' component={Fryer} options={{headerShown:false}} />
        <Stack.Screen name='Neon' component={Neon} options={{headerShown:false}} />
        <Stack.Screen name='Final' component={Final} options={{headerShown:false}} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const Splash = ({navigation}) => {
  
  return (
    <>
    <StatusBar style="auto"  />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black" }}>

    <TouchableOpacity  onPress={() => {navigation.navigate('Iniciar')}}>


    <Image
      source={require('./assets/splash.png')}
      style={{ width: 200, height: 200 }}/>
    </TouchableOpacity>
    
  </View>
  </>
  );
};

const Iniciar = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black" }}>

      <Image source={require('./assets/brungpu.png')} style={{ width: 120, height: 80 }}/>
      <Image source={require('./assets/bemvindo.png')} style={{ width: 200, height: 150, marginTop: 30}}/>
      <TouchableOpacity style={[styles.botver, {marginTop: 80}]} onPress={() => {navigation.navigate('Login')} }>
        <Text style={styles.textbotver}>Fazer Login</Text>
      </TouchableOpacity>

      
    </View>
    </>
  );
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    // Lógica para lidar com o login
    navigation.navigate('Compras');
  };

  return (
    <>
    <StatusBar style="auto"  />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black" }}>
    <Image source={require('./assets/logo.png')} style={{ width: 200, height: 60}}/>
    <Image source={require('./assets/loginpalavra.png')} style={{ width: 200, height: 60, marginTop: 70}}/>


    <TextInput
        style={[styles.input, {marginTop: 40}]}
        placeholder="Email"
        placeholderTextColor="white"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, {marginTop: 10}]}
        placeholder="Senha"
        placeholderTextColor="white"
        secureTextEntry
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity style={[styles.botverent, {marginTop: 20}]} onPress={() => {navigation.navigate('Compras')} }>
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Cadastro')} }>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </TouchableOpacity>

    


    </View>
    </>
  );
};

const Cadastro = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    // Lógica para lidar com o login
    navigation.navigate('Compras');
  };

  return (
    <>
    <StatusBar style="auto"  />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black" }}>
    <Image source={require('./assets/logo.png')} style={{ width: 200, height: 60}}/>
    <Image source={require('./assets/loginpalavra.png')} style={{ width: 200, height: 60, marginTop: 70}}/>


    <TextInput
        style={[styles.input, {marginTop: 40}]}
        placeholder="Email"
        placeholderTextColor="white"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, {marginTop: 10}]}
        placeholder="Senha"
        placeholderTextColor="white"
        secureTextEntry
        onChangeText={(text) => setSenha(text)}
      />

      <Text style={styles.texttelacadastro}>Repita a senha:</Text>
      
      <TextInput
        style={[styles.input, {marginTop: 10}]}
        placeholder="Senha"
        placeholderTextColor="white"
        secureTextEntry
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Compras')} }>
        <Text style={{ color: 'white' }}>Cadastre-se</Text>
      </TouchableOpacity>


    


    </View>
    </>
  );
};

const Compras = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
      <Text style={{marginBottom:50}}>____________________________[\n]___[\n]___[\n]</Text>
      <View style={styles.menucompras}>
        <TouchableOpacity>
          <Image source={require('./assets/botaomenu.png')} style={{ width: 60, height: 60,marginBottom:30}}/>
        </TouchableOpacity>
        
        <Image source={require('./assets/logo.png')} style={{ width: 350, height: 100, marginRight: 50,marginBottom:30}}/>
      </View>
      
      <View style={styles.menucompras}>
        <TextInput
          style={[styles.barrapesquisa, {marginRight: 0}]}
          placeholder="Pesquise aqui:"
        />

        <TouchableOpacity>
          <Image source={require('./assets/botaopesquisa.png')} style={{ width: 38, height: 38}}/>
        </TouchableOpacity> 
      </View>

     

      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>

        <Image source={require('./assets/kitgamer.png')} style={{ width: 350, height: 150 }}/>
        <ScrollView horizontal style={{marginTop:30}}>

          <TouchableOpacity onPress={() => {navigation.navigate('Mancer')} }>
            <Image source={require('./assets/mancer.png')} style={{ width: 300, height: 300, marginRight:10 }}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('Nitro')} }>
            <Image source={require('./assets/nitro.png')} style={{ width: 300, height: 300, marginRight:10 }}/>
          </TouchableOpacity>

          

        </ScrollView>
        <Image source={require('./assets/eletrodomesticos.jpg')} style={{ width: 300, height: 150, marginTop: 30}}/>

        <ScrollView horizontal style={{marginTop:30,}}>

        <TouchableOpacity onPress={() => {navigation.navigate('Fryer')} }>
            <Image source={require('./assets/fryer.png')} style={{ width: 300, height: 300, marginRight:10 }}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('Neon')} }>
            <Image source={require('./assets/neon.png')} style={{ width: 300, height: 300, marginRight:10 }}/>
          </TouchableOpacity>

        </ScrollView>

        <Image source={require('./assets/brungpu.png')} style={{width:150, height:100}}/>
      </ScrollView>
    </View>
    </>
  );
};

const Mancer = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
      <Text style={{marginBottom:50}}>____________________________[\n]___[\n]___[\n]</Text>
      <View style={styles.menucompras}>
        <TouchableOpacity>
          <Image source={require('./assets/botaomenu.png')} style={{ width: 60, height: 60,marginBottom:30}}/>
        </TouchableOpacity>
        
        <Image source={require('./assets/logo.png')} style={{ width: 350, height: 100, marginRight: 50,marginBottom:30}}/>
      </View>

      <ScrollView>

        <Image source={require('./assets/mancer.png')} style={{ width: 400, height: 400,marginBottom:0}}/>

        <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Final')} }>
        <Text style={{ color: 'white' }}>Comprar</Text>
      </TouchableOpacity>



      </ScrollView>
      
      
    </View>
    </>
  );
};

const Nitro = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
      <Text style={{marginBottom:50}}>____________________________[\n]___[\n]___[\n]</Text>
      <View style={styles.menucompras}>
        <TouchableOpacity>
          <Image source={require('./assets/botaomenu.png')} style={{ width: 60, height: 60,marginBottom:30}}/>
        </TouchableOpacity>
        
        <Image source={require('./assets/logo.png')} style={{ width: 350, height: 100, marginRight: 50,marginBottom:30}}/>
      </View>

      <ScrollView>

        <Image source={require('./assets/nitro.png')} style={{ width: 400, height: 400,marginBottom:0}}/>

        <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Final')} }>
        <Text style={{ color: 'white' }}>Comprar</Text>
      </TouchableOpacity>



      </ScrollView>
      
      
    </View>
    </>
  );
};

const Fryer = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
      <Text style={{marginBottom:50}}>____________________________[\n]___[\n]___[\n]</Text>
      <View style={styles.menucompras}>
        <TouchableOpacity>
          <Image source={require('./assets/botaomenu.png')} style={{ width: 60, height: 60,marginBottom:30}}/>
        </TouchableOpacity>
        
        <Image source={require('./assets/logo.png')} style={{ width: 350, height: 100, marginRight: 50,marginBottom:30}}/>
      </View>

      <ScrollView>

        <Image source={require('./assets/fryer.png')} style={{ width: 400, height: 400,marginBottom:0}}/>

        <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Final')} }>
        <Text style={{ color: 'white' }}>Comprar</Text>
      </TouchableOpacity>



      </ScrollView>
      
      
    </View>
    </>
  );
};

const Neon = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
      <Text style={{marginBottom:50}}>____________________________[\n]___[\n]___[\n]</Text>
      <View style={styles.menucompras}>
        <TouchableOpacity>
          <Image source={require('./assets/botaomenu.png')} style={{ width: 60, height: 60,marginBottom:30}}/>
        </TouchableOpacity>
        
        <Image source={require('./assets/logo.png')} style={{ width: 350, height: 100, marginRight: 50,marginBottom:30}}/>
      </View>

      <ScrollView>

        <Image source={require('./assets/neon.png')} style={{ width: 400, height: 400,marginBottom:0}}/>

        <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Final')} }>
        <Text style={{ color: 'white' }}>Comprar</Text>
      </TouchableOpacity>



      </ScrollView>
      
      
    </View>
    </>
  );
};



const Final = ({navigation}) => {
  return (
    <>
    <StatusBar style="auto"  />
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"black", marginTop:0}}>
    <Image source={require('./assets/final.png')} style={{ width: 400, height: 200,marginBottom:0}}/>

    <TouchableOpacity style={[styles.botver, {marginTop: 20}]} onPress={() => {navigation.navigate('Compras')} }>
        <Text style={{ color: 'white' }}>Retornar</Text>
      </TouchableOpacity>
      
    </View>
    </>
  );
};










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botver: {
    backgroundColor: '#ff5656',
    paddingVertical: 10, // Ajuste o padding vertical conforme necessário
    paddingHorizontal: 70,
    //borderRadius: 5,
    //marginTop: 150,
  },
  botverent: {
    backgroundColor: '#ff5656',
    paddingVertical: 10, // Ajuste o padding vertical conforme necessário
    paddingHorizontal: 80,
    //borderRadius: 5,
    //marginTop: 150,
  },
  textbotver: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'blue',
    width: 200,
    height: 20,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  texttelacadastro: {
    color: 'white',
    fontSize: 12,
    marginRight:120,
    marginTop:30,
  },
  menucompras: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
  barrapesquisa: {
    backgroundColor: '#1c1b1f',
    paddingVertical: 10, // Ajuste o padding vertical conforme necessário
    paddingHorizontal: 10,
    color: '#77767d',
    textAlign: 'left',
    //borderRadius: 5,
    marginTop: 0,
  },
  botaomenucompras: {
    backgroundColor: 'blue', // Cor de fundo
    borderRadius: 10, // Pontas arredondadas
    marginRight: 10, // Espaçamento entre os botões
    paddingHorizontal: 10, // Adiciona padding apenas horizontalmente
    paddingVertical: 5, // Adiciona padding vertical
  },
  textobotmenu: {
    color: 'white', // Cor do texto
    textAlign: 'center',
  },
  horizontalScrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },

});
