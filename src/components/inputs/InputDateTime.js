import React, { memo, useRef } from 'react';
import { Pressable, Text, View, Dimensions } from 'react-native';
import { FalsyText } from '@ui-kitten/components/devsupport';
import { Controller } from 'react-hook-form';
import { Button, withStyles } from '@ui-kitten/components';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

import inputStyles from './styles';
import { colors, hp } from '../../assets/styles/variables';

const InputDateTime = memo(
  ({
    containerStyles = {},
    placeholder,
    dateFormat = 'DD/MM/YYYY',
    timeFormat = 'hh:mm a',
    name,
    control,
    required,
    error,
    disabled,
    format,
    maximumDate,
    minimumDate,
    eva,
    mode = 'date',
  }) => {

    const refRBSheet = useRef();

    const closeSheet = () => {
      refRBSheet.current.close();
    };

    const renderInput = (value = new Date(1990, 0), onChange) => (

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        // {...(Platform.OS !== 'ios' && {
        //   height: 220,
        // })}
        height={hp(50)}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
          },
          container: {
            justifyContent: 'space-between',
            backgroundColor: eva.style.control.backgroundColor,
            borderTopWidth: 1,
            borderTopColor: colors.blueMercantil,
          },
          draggableIcon: {
            backgroundColor: colors.blueMercantil,
          }
        }}>
        <DatePicker
          mode={mode}
          date={typeof value === 'string' ? new Date(value) : value}
          onDateChange={onChange}
          format={format}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          androidVariant='nativeAndroid'
          textColor={eva.style.textColor}
          {...(mode === 'date' && {
            locale: 'es_EN',
          })}
          style={{ width: Dimensions.get('screen').width }}
        />
        <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: hp(5) }}>
          <Button
            size='small'
            style={{ flex: 1, marginRight: 5 }}
            appearance='outline'
            status='info'
            onPress={closeSheet}>
            Cerrar
          </Button>
          <Button
            size='small'
            style={{ flex: 1, marginLeft: 5 }}
            status='info'
            onPress={() => {
              onChange(value);
              closeSheet();
            }}>
            Seleccionar
          </Button>
        </View>
      </RBSheet>
    );

    const renderAnchor = date => {
      return (
        <Pressable
          disabled={disabled}
          onPress={() => refRBSheet.current.open()}
          style={[
            eva.style.control,
            {
              borderColor: error
                ? eva.style.caption.color
                : eva.style.control.borderColor,
            },
          ]}

        >
          <FalsyText
            numberOfLines={1}
            ellipsizeMode='tail'
            component={() =>
              date ? (
                <Text style={{ color: eva.style.textColor }}>
                  {moment(date).format(
                    mode === 'date' ? dateFormat : timeFormat,
                  )}
                </Text>
              ) : (
                <Text style={{ color: eva.style.colorInactive }}>
                  {placeholder}
                </Text>
              )
            }
          />
        </Pressable>
      );
    };

    return (
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field: { onChange, value } }) => (
          <View
            style={[
              inputStyles.container,
              { marginBottom: hp(2), flex: 1 },
              containerStyles,
            ]}>
            {renderAnchor(value)}
            {renderInput(value, onChange)}
            {error && (
              <FalsyText
                numberOfLines={1}
                ellipsizeMode='tail'
                component={() => (
                  <Text style={eva.style.caption}>{error?.message}</Text>
                )}
              />
            )}
          </View>
        )}
      />
    );
  },
);

export default withStyles(InputDateTime, theme => ({
  textColor: theme['text-basic-color'],
  colorInactive: theme['color-basic-600'],
  control: {
    borderColor: theme['border-basic-color-4'],
    backgroundColor: theme['background-basic-color-2'],
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: '100%',
  },
  caption: {
    color: theme['color-warning-500'],
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
  },
}));
