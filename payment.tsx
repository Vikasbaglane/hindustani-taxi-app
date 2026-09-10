import { router } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Pressable, SafeAreaView, Alert } from "react-native";

const UPI_ID = "7219723004vikas@okhdfcbank";

export default function Payment() {
  const upi = `upi://pay?pa=${UPI_ID}&pn=Hindustani%20Taxi&am=250&cu=INR`;
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.container}>
        <Pressable onPress={() => router.back()}><Text style={s.back}>‹ मागे</Text></Pressable>
        <Text style={s.title}>पेमेंट करा</Text>
        <View style={s.amount}><Text style={s.small}>अंदाजे भाडे</Text><Text style={s.price}>₹250</Text></View>
        <View style={s.qr}><QRCode value={upi} size={210} /></View>
        <Text style={s.scan}>QR Code Scan & Pay</Text>
        <Text style={s.upi}>UPI: {UPI_ID}</Text>
        <Text style={s.note}>Demo payment — प्रत्यक्ष पेमेंट gateway जोडलेले नाही.</Text>
        <Pressable style={s.button} onPress={() => Alert.alert("पेमेंट यशस्वी", "Demo ride confirmed!", [{text:"ठीक आहे", onPress:()=>router.replace("/passenger")}])}>
          <Text style={s.buttonText}>Scan & Pay / पेमेंट पूर्ण</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const s=StyleSheet.create({
 safe:{flex:1,backgroundColor:"#FFF8E7"},container:{padding:20,alignItems:"center",flex:1},back:{alignSelf:"flex-start",fontSize:17,color:"#555",marginBottom:10},title:{fontSize:28,fontWeight:"800",alignSelf:"flex-start",marginBottom:18},
 amount:{backgroundColor:"#FFF",width:"100%",borderRadius:16,padding:16,alignItems:"center"},small:{color:"#777"},price:{fontSize:30,fontWeight:"900",marginTop:2},
 qr:{backgroundColor:"#FFF",padding:18,borderRadius:18,marginTop:22},scan:{fontSize:18,fontWeight:"800",marginTop:15},upi:{color:"#555",marginTop:6},note:{color:"#9A7B00",fontSize:12,textAlign:"center",marginTop:14},
 button:{backgroundColor:"#F5B400",padding:17,borderRadius:14,width:"100%",alignItems:"center",marginTop:"auto",marginBottom:12},buttonText:{fontSize:17,fontWeight:"900"}
});
