import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';
import {Colors} from '../../../../../source/utils/colors'
import {Font} from '../../../../../source/utils/fonts'
import {Dimens} from '../../../../../source/utils/dimens'


const STYLESHEET_ID = 'stylesheet.calendar.header';

 export default function (theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // paddingLeft: 10,
      // paddingRight: 10,
      // marginTop: 6,
      width: '103%',
      marginLeft: -5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      alignItems: 'center',
      
      backgroundColor: Colors.theme,
      height: 40,
    },
    headerContainer: {
      flexDirection: 'row',
      
    },
    monthText: {
      fontSize: Dimens.dimen_18,
      fontFamily: Font.Nunito_Medium,
      color: Colors.black,
      margin: 10,
    },
    arrow: {
      padding: 18,
      ...appStyle.arrowStyle
    },
    arrowImage: {
      tintColor: appStyle.arrowColor,
      ...Platform.select({
        web: {
          width: appStyle.arrowWidth,
          height: appStyle.arrowHeight
        }
      })
    },
    disabledArrowImage: {
      tintColor: appStyle.disabledArrowColor
    },
    week: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '103%',
      marginLeft: -5,
      backgroundColor: Colors.dayName_Background,
    },
    dayHeader: {
      marginTop: 0,
      marginBottom: 0,
      width: 32,
      textAlign: 'center',
      fontSize: Dimens.dimen_13,
      fontFamily: Font.Nunito_Bold,
      color: Colors.black
    },
    disabledDayHeader: {
      color:  appStyle.textSectionTitleDisabledColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
