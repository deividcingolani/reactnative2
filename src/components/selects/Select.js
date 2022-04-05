import React from 'react';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Select, SelectItem, Text, withStyles} from '@ui-kitten/components';
import {colors, hp} from '../../assets/styles/variables';

const SelectComponent = ({
  label,
  placeholder,
  inputStyles = {},
  options = [],
  containerStyles = {},
  name,
  control,
  error,
  disabled = false,
  required = false,
  action,
  eva,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      // defaultValue={value}
      rules={{required}}
      render={({field: {onChange, value}}) => (
        <View style={containerStyles}>
          <Select
            placeholder={placeholder}
            {...(label && {
              label: <Text>{label}</Text>,
            })}
            status={error?.message && 'warning'}
            style={[{width: '100%', marginBottom: hp(2)}, inputStyles]}
            value={options.find(option => option.value === value)?.label}
            size='large'
            onSelect={index => {
              if (action) action()
              onChange(options.find((option, idx) => idx === index.row)?.value)
            }}
            disabled={disabled}
            {...(error && {
              caption: textProps => (
                <Text
                  style={{
                    ...textProps.style[0],
                    color: colors.yellowMercantil,
                    fontSize: 12,
                  }}>
                  {error?.message}
                </Text>
              ),
            })}>
            {options.map(option => (
              <SelectItem key={option.value} title={option.label} />
            ))}
          </Select>
        </View>
      )}
    />
  );
};

export default withStyles(SelectComponent, theme => ({
  primaryColor: theme['color-primary-500'],
}));
