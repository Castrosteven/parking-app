import { StyleSheet, View, Text } from "react-native";
import MoreIcon from "../../../assets/images/icon-more.svg";
import ParkIcon from "../../../assets/images/icon-parking.svg";
import { GetDirectionsButton } from "./GetDirectionsButton";

export const ParkingCard = () => {
  return (
    <View style={styles.conainer}>
      {/* Top Card */}
      <View style={styles.topCardContainer}>
        {/* Icon */}
        <View style={styles.parkIcon}>
          <ParkIcon />
        </View>
        {/* Address and Button */}
        <View style={styles.addressAndButtonContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.topText}>Fells Wargo's Parking Lot</Text>
            <Text style={styles.bottomText}>
              15714 Melrose Ave, Beverly Hills, CA 90201
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <MoreIcon height={24} width={24} />
          </View>
        </View>
        {/* Spot and Get Directions */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 15,
            marginLeft: 24,
          }}
        >
          <Text style={{ fontFamily: "rubik-bold", marginRight: 22 }}>
            SPOT21
          </Text>
          <View>
            <GetDirectionsButton />
          </View>
        </View>
      </View>
      {/* Divider */}
      <View style={[{ height: 1, overflow: "hidden" }]}>
        <View
          style={[
            {
              height: 2,
              borderWidth: 1,
              borderColor: "#EBEEF1",
              borderStyle: "dashed",
            },
          ]}
        ></View>
      </View>
      {/* Date Cards */}
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    backgroundColor: "white",
    width: "100%",
    height: 475,
    marginTop: 24,
    borderRadius: 8,
  },
  parkIcon: {
    marginLeft: 16,
    position: "absolute",
    top: -13,
  },
  addressAndButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 24,
    marginTop: 44,
  },
  topCardContainer: {
    height: 141,
  },
  addressContainer: {
    width: 255,
  },
  iconContainer: { marginRight: 34 },

  topText: {
    fontFamily: "rubik-medium",
    fontSize: 19,
    lineHeight: 22.52,
  },
  bottomText: {
    fontFamily: "rubik-regular",
    fontSize: 13,
    lineHeight: 22.52,
    color: "#00000080",
  },
});
