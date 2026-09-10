import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";

const roles = [
  { title: "प्रवासी", sub: "राईड बुक करा", path: "/passenger" },
  { title: "ड्रायव्हर", sub: "राईड स्वीकारा", path: "/driver" },
  { title: "अॅडमिन", sub: "सिस्टम व्यवस्थापन", path: "/admin" }
];

export default function Home() {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.container}>
        <View style={s.logo}><Text style={s.taxi}>🚕</Text></View>
        <Text style={s.title}>हिंदुस्तानी टॅक्सी</Text>
        <Text style={s.subtitle}>आपली सुरक्षित आणि विश्वासार्ह राईड</Text>

        <Text style={s.choose}>भूमिका निवडा</Text>
        {roles.map((r) => (
          <Pressable key={r.path} style={s.card} onPress={() => router.push(r.path as any)}>
            <View>
              <Text style={s.role}>{r.title}</Text>
              <Text style={s.sub}>{r.sub}</Text>
            </View>
            <Text style={s.arrow}>›</Text>
          </Pressable>
        ))}

        <Text style={s.demo}>Demo App • Backend शिवाय UI</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:"#FFF8E7"},
  container:{flex:1,padding:24,justifyContent:"center"},
  logo:{width:92,height:92,borderRadius:46,backgroundColor:"#F5B400",alignSelf:"center",alignItems:"center",justifyContent:"center"},
  taxi:{fontSize:48},
  title:{fontSize:30,fontWeight:"800",textAlign:"center",color:"#171717",marginTop:18},
  subtitle:{fontSize:15,textAlign:"center",color:"#777",marginTop:6,marginBottom:32},
  choose:{fontSize:18,fontWeight:"700",color:"#222",marginBottom:12},
  card:{backgroundColor:"#FFF",borderRadius:18,padding:18,marginBottom:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:1,borderColor:"#EEE0B5"},
  role:{fontSize:19,fontWeight:"700",color:"#222"}, sub:{color:"#777",marginTop:3}, arrow:{fontSize:32,color:"#F0A800"},
  demo:{textAlign:"center",color:"#999",marginTop:18,fontSize:12}
});
