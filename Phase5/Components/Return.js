import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress, ScrollView } from 'react-native';

const ReturnExchangeProcedure = ({navigation}) => {
  return (
    <View>
    <ScrollView style={styles.container}>
      <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
                <Text style={styles.heading}>RETURN & EXCHANGE PROCEDURE</Text>
            </View>
            <Text style={styles.bold}>
        YOU CAN APPLY FOR A RETURN OR EXCHANGE WITHIN 7 DAYS OF YOUR PURCHASE.
      </Text>
      <Text style={styles.text}>
        IF YOU ARE NOT SATISFIED WITH YOUR PURCHASE, PLEASE RETURN IT TO US WITHIN 7 DAYS OF YOUR PURCHASE, AND WE WILL GLADLY ISSUE A REFUND OR PROCESS AN EXCHANGE MAXIMUM WITHIN A WEEK OF RECEIVING THE RETURNED GOODS.
      </Text>
      <Text style={styles.text}>
        ITEMS MUST BE UNWORN, UNWASHED, UNDAMAGED, AND UNUSED WITH ALL ORIGINAL TAGS ATTACHED FOR A RETURN TO BE ACCEPTABLE.
      </Text>
      <Text style={styles.note}>
      <span style={styles.b}>NOTE:</span>  BUYER PAYS THE RETURN COURIER CHARGES.
      </Text>
      <Text style={styles.bold}>EXCHANGE</Text>
      <Text style={styles.text}>
        THE EXCHANGE DEPENDS ON THE AVAILABILITY OF STOCK AT THAT MOMENT.
      </Text>
      <Text style={styles.text}>
        ITEMS MUST BE UNWORN, UNWASHED, UNDAMAGED, AND UNUSED WITH ALL ORIGINAL TAGS ATTACHED FOR AN EXCHANGE TO BE ACCEPTABLE.
      </Text>
      <Text style={styles.note}>
        <span style={styles.b}>NOTE:</span> BUYER PAYS THE RETURN COURIER CHARGES.
      </Text>
      <Text style={styles.bold}>RETURN & EXCHANGE PROCEDURE</Text>
      <Text style={styles.text}>
        TO RETURN THE ITEM(S) PLEASE FOLLOW THE PROCEDURE BELOW:
      </Text>
      <Text style={styles.procedureText}>
        1. TAKE A PICTURE OF THE DEFECTIVE PART OF THE ITEM
      </Text>
      <Text style={styles.procedureText}>
        2. PACK THE ITEM BACK IN THE ORIGINAL PACKING
      </Text>
      <Text style={styles.procedureText}>
        3. EMAIL US [INFO@GRACESTORE.PK] THE PICTURE OF THE DEFECTIVE PART AND LET US KNOW THAT YOU WANT TO RETURN OR EXCHANGE
      </Text>
      <Text style={styles.procedureText}>
        4. WE WILL GIVE YOU THE ADDRESS TO RETURN THE ITEM
      </Text>
      <Text style={styles.procedureText}>
        5. GO TO YOUR LOCAL COURIER AND SEND US THE PACKAGE
      </Text>
      <Text style={styles.bold}>REFUNDS</Text>
      <Text style={styles.text}>
        ONCE WE HAVE RECEIVED YOUR RETURN PACKAGE AND YOU HAVE PROVIDED US WITH EITHER YOUR BANK ACCOUNT OR ANY OTHER MEANS TO RECEIVE YOUR MONEY BACK, YOUR REFUND WILL BE PROCESSED WITHIN 7 BUSINESS DAYS. IN THE CASE OF BANK TRANSFER, PLEASE ALLOW ANOTHER 2 TO 4 BUSINESS DAYS FOR THE AMOUNT TO BE CREDITED TO YOUR BANK ACCOUNT.
      </Text>
    </ScrollView>
      <View style={styles.footer}>
              <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Login')}>
                <Icon name="home" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="heart" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="shopping-cart" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="user" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    backgroundColor: '#F1F1F1',
    flex:1,
    paddingBottom: 50,
  },
  Header: {
    width: 390,
    height: 74,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal:40,
  },
  bold:{
    paddingTop: 5,
    fontWeight:'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal:10,
  },
  note: {
    fontSize: 14,
    marginBottom: 10,
    fontStyle: 'italic',
    marginHorizontal: 10,
  },
  b:{
    fontWeight: 'bold',
  },
  procedureText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
    // borderTopWidth: 1,
    // borderTopColor: '#e2e2e2',
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
  activeIcon: {
    tintColor: "#000",
  },
  inactiveIcon: {
    tintColor: "#b4b4b4",
  },
});

export default ReturnExchangeProcedure;
