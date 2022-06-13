import IconStart from "../../../../assets/images/s-icon-start.svg";
import IconEnd from "../../../../assets/images/s-icon-end.svg";
import { View } from "react-native";
import { DateCard } from "../DateCard";

interface Props {
  start: {
    date: string;
    time: string;
  };
  end: {
    date: string;
    time: string;
  };
}
export const DateCardContainer = ({ end, start }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#EBEEF1",
      }}
    >
      <DateCard {...start} Icon={IconStart} title="START DATE" />
      <View
        style={{
          display: "flex",
          height: "100%",
          borderLeftColor: "#E7EAED",
          borderLeftWidth: 1,
        }}
      ></View>
      <DateCard {...end} Icon={IconEnd} title="END DATE" />
    </View>
  );
};
