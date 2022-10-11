import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-gesture-handler";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ marginTop: 40 }}
    >
      <View
        style={{
          backgroundColor: "pink",
          padding: 12,
          height: 130,
          width: "100%",
          marginTop: 3,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "darkblue",
            fontWeight: "bold",
            fontSize: 18,
            display: "flex",
          }}
        >
          Welcome To Andy's Fitness Club
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginTop: 6,
              }}
            >
              WORKOUTS
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ fontSize: 17, marginTop: 6 }}>KCAL</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ fontSize: 17, marginTop: 6 }}>MINS</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 100,
              marginTop: 10,
              borderRadius: 5,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
