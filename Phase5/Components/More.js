import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, onPress} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const More = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.backArrow}></View> */}
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../img/your-profile-picture.png")}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.name}>Hammad Zaib</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require("../img/profile.png")} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Profile</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Order')}>
          <Image source={require("../img/orders.png")} style={styles.menuItemIcon}/>
          <Text style={styles.menuItemText}>Orders</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
          <Image source={require("../img/call.png")} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Contact Us</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
          <Image source={require("../img/about.png")} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>About Us</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Return')}>
          <Image source={require("../img/return.png")} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Return and Exchange</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Login")}
        >
          <Image source={require("../img/logout.png")} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Logout</Text>
          <Image
            source={require("../img/right-arrow.png")}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
      </View>
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
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 30,
    width: 390,
    height: 844,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menu: {
    marginBottom: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  menuItemText: {
    fontSize: 16,
  },
  rightArrow: {
    width: 20,
    height: 20,
    marginLeft: "auto",
    backgroundColor: "#fff",
    marginRight: 10,
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
  }
})
export default More;
