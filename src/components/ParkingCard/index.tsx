import { StyleSheet, View } from "react-native";
import { AddressComponent } from "./AddressComponent";
import Data from "../../../data.json";
import { DateCardContainer } from "./DateCardContainer";
import { ListItem } from "../ListItem";
import HelpIcon from "../../../assets/images/s-icon-help.svg";
import TimeIcon from "../../../assets/images/s-icon-clock.svg";
import ReceiptIcon from "../../../assets/images/s-icon-receipt.svg";
import { BottomCard } from "./BottomCard";
import Svg, { Circle } from "react-native-svg";

const CircleCutOut = () => {
  return (
    <Svg height="16" width="16" viewBox="0 0 100 100">
      <Circle cx="0" cy="50" r="50" fill="#F2C840" />
    </Svg>
  );
};
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
      <View
        style={{
          position: "absolute",
          marginTop: 133,
          marginLeft: 0,
          zIndex: 10,
        }}
      >
        <Svg height="16" width="16" viewBox="0 0 100 100">
          <Circle cx="0" cy="50" r="50" fill="#F2C840" />
        </Svg>
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 133,
          right: 0,
          zIndex: 10,
        }}
      >
        <Svg height="16" width="16" viewBox="0 0 100 100">
          <Circle cx="100" cy="50" r="50" fill="#F2C840" />
        </Svg>
      </View>
      <View style={[{ height: 1 }]}>
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
      <ListItem Icon={HelpIcon} title="View Parking Instructions" />
      <ListItem Icon={TimeIcon} title="Purchase Aditional months" />
      <ListItem
        hideBorder={true}
        Icon={ReceiptIcon}
        title="View receipt for $272.95"
      />
      {/* Bottom Card */}
      <BottomCard />
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
