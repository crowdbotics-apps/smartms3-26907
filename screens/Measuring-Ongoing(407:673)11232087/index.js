import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_407_674}>
        <Text style={styles.Text_407_674}>Measuring...</Text>
      </View>
      <View style={styles.View_407_675}>
        <Text style={styles.Text_407_675}>Sit Ups</Text>
      </View>
      <View style={styles.View_407_676}>
        <Text style={styles.Text_407_676}>MS3: </Text>
      </View>
      <View style={styles.View_407_677}>
        <View style={styles.View_407_678} />
        <View style={styles.View_407_679}>
          <Text style={styles.Text_407_679}>0:00:45 s</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_407_680}
      />
      <View style={styles.View_407_682}>
        <View style={styles.View_407_683} />
        <View style={styles.View_407_684}>
          <Text style={styles.Text_407_684}>Pause</Text>
        </View>
      </View>
      <View style={styles.View_407_685}>
        <View style={styles.View_407_686} />
        <View style={styles.View_407_687}>
          <Text style={styles.Text_407_687}>Stop</Text>
        </View>
      </View>
      <View style={styles.View_407_688}>
        <View style={styles.View_407_689}>
          <Text style={styles.Text_407_689}>Sets</Text>
        </View>
        <View style={styles.View_407_690}>
          <Text style={styles.Text_407_690}>4</Text>
        </View>
        <View style={styles.View_407_691}>
          <Text style={styles.Text_407_691}>Repetitions</Text>
        </View>
        <View style={styles.View_407_692}>
          <Text style={styles.Text_407_692}>4</Text>
        </View>
      </View>
      <View style={styles.View_407_701}>
        <View style={styles.View_I407_701_370_683} />
        <View style={styles.View_I407_701_219_213}>
          <View style={styles.View_I407_701_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_I407_701_219_215}
          />
          <View style={styles.View_I407_701_219_216} />
        </View>
        <View style={styles.View_I407_701_219_217}>
          <Text style={styles.Text_I407_701_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <View style={styles.View_407_702}>
        <Text style={styles.Text_407_702}>connected</Text>
      </View>
      <View style={styles.View_413_774}>
        <View style={styles.View_413_775} />
        <View style={styles.View_413_776} />
        <View style={styles.View_413_777} />
        <View style={styles.View_413_778} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b7/d843/b2c8040a799d753a9201ba155a172367"
          }}
          style={styles.ImageBackground_413_779}
        />
        <View style={styles.View_413_780}>
          <Text style={styles.Text_413_780}>+</Text>
        </View>
        <View style={styles.View_413_781}>
          <Text style={styles.Text_413_781}>-</Text>
        </View>
        <View style={styles.View_413_782}>
          <Text style={styles.Text_413_782}>1</Text>
        </View>
      </View>
      <View style={styles.View_413_783}>
        <View style={styles.View_413_784} />
        <View style={styles.View_413_785} />
        <View style={styles.View_413_786} />
        <View style={styles.View_413_787} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec9/a3c3/be53a2f8db6061e1e212b1b68aef455b"
          }}
          style={styles.ImageBackground_413_788}
        />
        <View style={styles.View_413_789}>
          <Text style={styles.Text_413_789}>+</Text>
        </View>
        <View style={styles.View_413_790}>
          <Text style={styles.Text_413_790}>-</Text>
        </View>
        <View style={styles.View_413_791}>
          <Text style={styles.Text_413_791}>1</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_407_674: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("12.158469945355192%")
  },
  Text_407_674: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_675: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("20.901639344262296%")
  },
  Text_407_675: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_676: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("26.639344262295083%")
  },
  Text_407_676: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_677: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("39.75409836065574%")
  },
  View_407_678: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_679: {
    width: wp("61.024124956361334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  Text_407_679: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 32,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_680: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_407_682: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463768%"),
    top: hp("64.07103825136612%")
  },
  View_407_683: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_684: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.14492753623189%"),
    top: hp("2.0491803278688536%")
  },
  Text_407_684: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_685: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("63.934426229508205%")
  },
  View_407_686: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(190, 43, 10, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_687: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429954%"),
    top: hp("2.0491803278688394%")
  },
  Text_407_687: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_688: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("77.59562841530054%")
  },
  View_407_689: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_689: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_690: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%"),
    top: hp("0.40983606557378494%")
  },
  Text_407_690: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_691: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.6183574879227%"),
    top: hp("0%")
  },
  Text_407_691: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_692: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("0.40983606557378494%")
  },
  Text_407_692: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_701: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("110.79234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_701_370_683: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I407_701_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  View_I407_701_219_214: {
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I407_701_219_215: {
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I407_701_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I407_701_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956522%"),
    top: hp("25.273224043715828%")
  },
  Text_I407_701_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontFamily: "CrimsonText-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_702: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    top: hp("26.639344262295083%")
  },
  Text_407_702: {
    color: "rgba(127, 212, 87, 1)",
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_774: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("84.97267759562843%")
  },
  View_413_775: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_776: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_777: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301925%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  View_413_778: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301925%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  ImageBackground_413_779: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301925%"),
    top: hp("10.928961748633867%")
  },
  View_413_780: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644130246074873%")
  },
  Text_413_780: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_781: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644130246074873%")
  },
  Text_413_781: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_782: {
    width: wp("4.5893719806763285%"),
    minWidth: wp("4.5893719806763285%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589374%"),
    top: hp("6.6939890710382315%")
  },
  Text_413_782: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_783: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.14009661835749%"),
    top: hp("84.97267759562843%")
  },
  View_413_784: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_785: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_786: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  View_413_787: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  ImageBackground_413_788: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("10.928961748633867%")
  },
  View_413_789: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64413024607488%")
  },
  Text_413_789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_790: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64413024607488%")
  },
  Text_413_790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_791: {
    width: wp("4.5893719806763285%"),
    minWidth: wp("4.5893719806763285%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835748792270536%"),
    top: hp("6.6939890710382315%")
  },
  Text_413_791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
