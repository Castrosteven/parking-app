import { StyleSheet, View, Text } from "react-native";

interface Props {
  date: string;
  time: string;
  Icon: any;
  title: string;
}
export const DateCard = ({ date, time, Icon, title }: Props) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(date);
  const timeObj = new Date(time);
  const month = monthNames[dateObj.getUTCMonth()];
  const day = dateObj.getUTCDate();
  const year = dateObj.getFullYear();
  const t = timeObj.toLocaleDateString("en-us", {
    hour: "numeric",
    hour12: true,
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "rubik-medium", color: "#00000080" }}>
          {title}
        </Text>
        <View>
          <Icon width={15} height={15} />
        </View>
      </View>
      <View>
        <Text
          style={{ fontFamily: "rubik-black", fontSize: 19, marginTop: 11 }}
        >
          {month.toUpperCase()} {day}
        </Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontFamily: "rubik-regular" }}>{year} </Text>
          <Text style={{ fontFamily: "rubik-regular" }}>{`(${time})`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: 12,
    height: 88,
    marginLeft: 24,
    marginRight: 24,
  },
});
