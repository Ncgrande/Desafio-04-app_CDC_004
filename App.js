import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

function Noticia(props) {
  return (
    <View style={{
      flexDirection: 'row',
      marginBottom: 10
    }}>

      <View style={{
        width: 5,
        backgroundColor: '#560aad'
      }} />

      <View style={{
        backgroundColor: '#f0f0f0',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        <View style={{ flex: 1 }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>
            ULTIMAS NOTÍCIAS
          </Text>

          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 5
          }}>
            {props.manchete}
          </Text>

          <Text style={{ color: 'gray' }}>
            {props.data}
          </Text>
        </View>

        <Image
          source={{ uri: props.imagem }}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
      </View>

    </View>
  );
}



export default function App() {

  const noticias = [
    {
      manchete: "Chevrolet Opala é considerado um dos carros mais clássicos do Brasil",
      data: "11/04/2026",
      imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2015/11/Chevrolet-Opala-Standard-L-SL-1.jpg?quality=70&strip=info"
    },
    {
      manchete: "Modelos antigos do Opala valorizam no mercado de colecionadores",
      data: "10/04/2026",
      imagem: "https://lartbr.com.br/wp-content/uploads/2023/04/IMG_8195.jpg"
    },
    {
      manchete: "Opala SS chama atenção em encontro de carros antigos",
      data: "09/04/2026",
      imagem: "https://clickpetroleoegas.com.br/wp-content/uploads/2025/04/image-163.png"
    },
    {
      manchete: "Motor do Opala é destaque pela durabilidade",
      data: "08/04/2026",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1_kHmHrPbf8SQIgRhs0kipCR8VBdBHbyyg&s"
    },
    {
      manchete: "História do Chevrolet Opala marca gerações no Brasil",
      data: "07/04/2026",
      imagem: "https://revistafullpower.com.br/wp-content/uploads/2016/09/opala-lula-fullpower-01-1024x683.jpg"
    }
  ];

  return (
    <ScrollView style={{ flex: 1 }}>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{
          backgroundColor: '#560aad',
          padding: 15,
          borderRadius: 5
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            VEJA MAIS NO PORTAL
          </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 10, color: 'gray' }}>
          cadastre-se, comente, saiba mais
        </Text>
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold'
        }}>
          LEIA MAIS
        </Text>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        {noticias.map((item, index) => (
          <Noticia
            key={index}
            manchete={item.manchete}
            data={item.data}
            imagem={item.imagem}
          />
        ))}
      </View>

<View style={{
  backgroundColor: '#560aad',
  padding: 15,
  alignItems: 'center'
}}>

  <Text style={{ color: 'white', marginBottom: 10 }}>
    Receba nosso informativo gratuitamente
  </Text>

  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }}>

    <Image
      source={{ uri: 'https://marketplace.canva.com/FOIbI/MAG4j2FOIbI/1/tl/canva-vector-design-email-icon-style-MAG4j2FOIbI.png' }}
      style={{ width: 30, height: 30 }}
    />

    <Image
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' }}
      style={{ width: 30, height: 30 }}
    />

    <Image
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png' }}
      style={{ width: 30, height: 30 }}
    />

  </View>
</View>
    </ScrollView>
  );
}