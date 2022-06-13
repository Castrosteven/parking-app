import { StyleSheet, View } from "react-native";
import { AddressComponent } from "./AddressComponent";
import Data from "../../../data.json";
import { DateCardContainer } from "./DateCardContainer";

export const ParkingCard = () => {
  const { parkingLotAddress, parkingLotName, parkingLotSpot, start, end } =
    Data;
  return (
    <View style={styles.conainer}>
      {/* Top Card */}
      <AddressComponent
        parkingLotAddress={parkingLotAddress}
        parkingLotName={parkingLotName}
        parkingLotSpot={parkingLotSpot}
      />
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
      <DateCardContainer start={start} end={end} />
      {/* Divider */}
      <View style={[{ height: 1, overflow: "hidden" }]}>
        <View
          style={[
            {
              borderWidth: 1,
              borderColor: "#EBEEF1",
            },
          ]}
        ></View>
      </View>
      {/* List Items */}
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
});
