import {StyleSheet} from 'react-native';
import {
  colors,
  inputs,
  hp,
  checkboxes,
  modals,
} from '../../assets/styles/variables';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: inputs.radius,
  },
  inputContainer: {
    borderRadius: inputs.radius,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    flex: 1,
  },
  label: {
    color: colors.charcoalGrey,
    marginBottom: hp(0.7),
  },
  labelLink: {
    color: colors.darkIndigo,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  error: {
    marginTop: hp(1),
    color: colors.lightishRed,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.paleGrey,
    borderRadius: inputs.radius,
    width: checkboxes.width,
    height: checkboxes.height,
    marginRight: checkboxes.margin,
    padding: checkboxes.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContent: {
    backgroundColor: colors.lightishRed,
    width: checkboxes.widthContent,
    height: checkboxes.heightContent,
    borderRadius: inputs.radius,
  },
  modalFileContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalFileBox: {
    backgroundColor: 'white',
    height: 'auto',
    padding: modals.padding,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalFileTitle: {
    fontSize: modals.title,
    color: colors.darkIndigo,
    fontWeight: 'bold',
    marginLeft: modals.margin,
    marginTop: modals.margin,
    marginBottom: hp(3),
  },
  documentPickerButton: {
    alignItems: 'center',
    borderColor: '#E4E9F2',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    minHeight: 48,
    paddingHorizontal: 20,
    width: '100%'
  },
  documentPickerTitle: {
    fontSize: 15,
    paddingVertical: 11
  },
  errorContainer:{ 
    width: '100%',
    alignContent: 'flex-start', 
    justifyContent: 'flex-start',
    marginBottom: 15,
  }
});
