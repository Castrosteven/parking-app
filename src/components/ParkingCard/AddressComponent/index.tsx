import { View, Text, StyleSheet } from "react-native";
import MoreIcon from "../../../../assets/images/icon-more.svg";
import ParkIcon from "../../../../assets/images/icon-parking.svg";
import { GetDirectionsButton } from "./GetDirectionsButton";

interface Props {
  parkingLotAddress: string;
  parkingLotName: string;
  parkingLotSpot: number;
}
export const AddressComponent = ({
  parkingLotAddress,
  parkingLotName,
  parkingLotSpot,
}: Props) => {
  return (
    <View style={styles.topCardContainer}>
      {/* Icon */}
      <View style={styles.parkIcon}>
        <ParkIcon />
      </View>
      {/* Address and Button */}
      <View style={styles.addressAndButtonContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.topText}>{parkingLotName}</Text>
          <Text style={styles.bottomText}>{parkingLotAddress}</Text>
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
          SPOT {parkingLotSpot}
        </Text>
        <View>
          <GetDirectionsButton />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
