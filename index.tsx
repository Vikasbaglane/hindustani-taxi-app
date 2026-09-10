import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TextInput } from "react-native";

export default function Passenger() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.container}>
        <Pressable onPress={() => router.back()}><Text style={s.back}>‹ मागे</Text></Pressable>
        <Text style={s.title}>राईड बुक करा 🚕</Text>
        <Text style={s.label}>पिकअप लोकेशन</Text>
        <TextInput style={s.input} placeholder="उदा. पुणे स्टेशन" />
        <Text style={s.label}>गंतव्य</Text>
        <TextInput style={s.input} placeholder="उदा. शिवाजीनगर" />

        <Text style={s.section}>वाहन निवडा</Text>
        {[
          ["🚕", "Hindustani Mini", "₹12/km", "4 सीट"],
          ["🚖", "Hindustani Sedan", "₹16/km", "4 सीट"],
          ["🚐", "Hindustani XL", "₹22/km", "6 सीट"]
        ].map(([icon,name,rate,seats]) => (
          <View style={s.vehicle} key={name}>
            <Text style={s.icon}>{icon}</Text>
            <View style={{flex:1}}><Text style={s.name}>{name}</Text><Text style={s.muted}>{rate} • {seats}</Text></View>
            <Pressable style={s.select} onPress={() => router.push("/passenger/payment")}><Text style={s.selectText}>निवडा</Text></Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const s=StyleSheet.create({
 safe:{flex:1,backgroundColor:"#FFF8E7"},container:{padding:20},back:{fontSize:17,color:"#555",marginBottom:12},
 title:{fontSize:28,fontWeight:"800",color:"#171717",marginBottom:24},label:{fontWeight:"700",marginBottom:7,color:"#333"},input:{backgroundColor:"#FFF",borderWidth:1,borderColor:"#E5D7AA",borderRadius:12,padding:15,fontSize:16,marginBottom:18},
 section:{fontSize:19,fontWeight:"800",marginTop:5,marginBottom:12},vehicle:{backgroundColor:"#FFF",borderRadius:16,padding:15,marginBottom:12,flexDirection:"row",alignItems:"center",gap:12},icon:{fontSize:30},name:{fontWeight:"700",fontSize:16},muted:{color:"#777",marginTop:4},select:{backgroundColor:"#F5B400",paddingVertical:10,paddingHorizontal:14,borderRadius:10},selectText:{fontWeight:"800"}
});
