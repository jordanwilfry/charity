import { View, Text, Image } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { Dimensions } from "react-native";
import {
  SIZES,
  SPACING,
  ELEVATION,
  BORDER_RADIUS,
} from "../../constants/sizes";

const { width, height } = Dimensions.get("window");

const Social = ({ image }) => {
  return (
    <View style={{width:width/6, height:width/6, borderRadius:width/8, padding: 10, borderWidth: 1, borderColor: COLORS.textColor, display: "flex", justifyContent: "center", alignItems: "center", marginHorizontal: SPACING.large}}>
      <Image source={image} style={{width: width/10, height:width/10 , resizeMode: "contain"}}/>
    </View>
  );
};

export default Social;
