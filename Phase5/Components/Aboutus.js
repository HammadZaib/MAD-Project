import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress, ScrollView } from 'react-native';

const AboutScreen = ({navigation}) => {
  return (

    <View>
    <ScrollView style={styles.container}>
    
      <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black"  onPress={() => navigation.navigate('More')} />
                </TouchableOpacity >
                <Text style={styles.heading}>ABOUT US</Text>
            </View>
      <Text style={styles.bold}>Welcome to GraceStore</Text>
      <Text style={styles.description}>
        Your ultimate destination for stylish and trendy women's clothing. At GraceStore, we believe that every woman deserves to feel confident and beautiful in what she wears. That's why we curate a stunning collection of fashionable clothing that caters to your unique style and empowers you to express yourself.
      </Text>
      <Text style={styles.subHeading}>Our Story</Text>
      <Text style={styles.description}>
        GraceStore was founded with a passion for fashion and a mission to provide women with a seamless online shopping experience. We understand that finding the perfect outfit can be a challenge, so we've made it our goal to bring you a diverse range of high-quality clothing options, ensuring that you'll discover something you love every time you visit our app.
      </Text>
      <Text style={styles.subHeading}>Quality and Style</Text>
      <Text style={styles.description}>
        We take pride in offering you clothing pieces that are not only on-trend but also crafted with the utmost attention to detail and quality. Our team of fashion experts carefully selects each item in our collection, ensuring that they meet our high standards of style, comfort, and durability. From chic dresses and trendy tops to cozy loungewear and elegant accessories, we have everything you need to elevate your wardrobe.
      </Text>
      <Text style={styles.subHeading}>Customer Satisfaction</Text>
      <Text style={styles.description}>
        At GraceStore, your satisfaction is our top priority. We strive to provide exceptional customer service and a seamless shopping experience. Our dedicated support team is always ready to assist you with any inquiries or concerns you may have. Whether you need help with sizing, styling advice, or tracking your order, we're here to make your shopping journey as enjoyable as possible.
      </Text>
      <Text style={styles.subHeading}>Stay Inspired</Text>
      <Text style={styles.description}>
        We believe that fashion is more than just clothing—it's a form of self-expression and a way to showcase your unique personality. That's why we regularly update our app with the latest fashion trends, style tips, and outfit inspiration. Follow us on social media and subscribe to our newsletter to stay up-to-date with the newest arrivals, exclusive promotions, and fashion advice from our style experts.
      </Text>
      <Text style={styles.subHeading}>Secure and Convenient Shopping</Text>
      <Text style={styles.description}>
        Rest assured that your privacy and security are of utmost importance to us. Our app utilizes the latest encryption technology to safeguard your personal information, ensuring a secure shopping experience. We also offer various payment options and convenient shipping methods to make your shopping journey smooth and hassle-free.
      </Text>
      <Text style={styles.subHeading}>We're Here for You</Text>
      <Text style={styles.description}>
        Whether you're looking for a show-stopping dress for a special occasion, comfortable and stylish everyday wear, or that perfect accessory to complete your look, GraceStore is here to meet all your fashion needs. We're dedicated to helping you embrace your individuality and feel empowered through your style choices.
      </Text>
      <Text style={styles.footerText}>Thank you for choosing GraceStore as your go-to destination for women's clothing. We're excited to embark on this fashion journey with you and help you discover your own grace and style.</Text>
      <Text style={styles.footerText}>Happy Shopping!</Text>
      <Text style={styles.footerText}>The GraceStore Team</Text>
    </ScrollView>
    <View style={styles.footer}>
            <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={20} color="black"/>
                </TouchableOpacity >
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Wishlist')}>
                <Icon name="heart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('More')}>
                <Icon name="user" size={20} color="black"/>
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
        marginHorizontal:120,
      },
      bold:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        paddingBottom:10,
      },
      subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight:10,
      },
      description: {
        fontSize: 16,
        marginBottom: 15,
        paddingLeft:10,
        paddingRight:10,
      },
      footerText: {
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 10,
        textAlign: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom: 20,
      },
      footer: {
        width: 390,
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

export default AboutScreen;
