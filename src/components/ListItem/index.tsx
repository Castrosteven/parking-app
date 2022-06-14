import { Text, View } from "react-native";
import ArrowIcon from "../../../assets/images/s-icon-arrow.svg";

interface Props {
  Icon: any;
  title: string;
  hideBorder?: boolean;
}
export const ListItem = ({ Icon, title, hideBorder }: Props) => {
  const IconComponent = () => {
    return (
      <View
        style={{
          width: 24,
          height: 24,
          backgroundColor: "#000000",
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon />
      </View>
    );
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 24,
        height: 59,
        borderBottomColor: "#EAEDF0",
        borderBottomWidth: hideBorder ? 0 : 1,
        justifyContent: "space-between",
      }}
    >
      <IconComponent />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={{ marginLeft: 12 }}>{title} </Text>
        <View style={{ marginRight: 24 }}>
          <ArrowIcon />
        </View>
      </View>
    </View>
  );
};
