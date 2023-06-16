import {StyleSheet,View,Text} from "react-native";

export default function Header(){
  return (
    <View style = {styles.main}>
      <Text style = {styles.text}>Spisok der</Text>
    </View>
    
  );
}


const styles =StyleSheet.create({
  main:{
    paddingTop:60,
    heigth: 100,
    backgroundColor: "red"
  },
  text:{
    fontSize: 18,
    color: "silver",
    textAlign:"center"
    
  }
});