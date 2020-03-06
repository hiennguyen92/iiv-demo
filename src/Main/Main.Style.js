import { StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../const';
import ApplicationStyle from '../Themes/Application.Style';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  titleHeader: {
    fontFamily: fontFamily.demiBold,
    color: colors.charcoalGrey,
    fontSize: fontSize.large,
    marginLeft: 50,
  },
  btnGrayScale: {
    backgroundColor: colors.charcoalGrey,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    alignSelf: 'center',
  },
  btnColor: {
    backgroundColor: colors.charcoalGrey,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignSelf: 'center',
  },
  textGetData: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  image: {
    resizeMode: 'contain',
    width: 280,
    height: 280,
    borderRadius: 25,
  },
  viewWrapItem: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 5,
    borderColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
    shadowColor: colors.grey,
    backgroundColor: colors.white
  },
  viewLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  itemFooterWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
  },

  textBy: {
    flex: 1,
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  btnShare: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 0,
    shadowColor: colors.grey,
    backgroundColor: colors.grey

  },
  textShare: {
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
});
