import React, {memo} from 'react';
import {Input, Text, withStyles} from '@ui-kitten/components';
import {colors, hp} from '../../../assets/styles/variables';

const InputComponent = memo(
  ({
    placeholder,
    inputStyles = {},
    returnKeyType,
    onChange = () => {},
    disabled = false,
    type = 'text',
    keyboardType = 'default',
    editable = true,
    autoCompleteType,
    autoCapitalize = 'words',
    multiline = false,
    maxLength,
    pointerEvents,
    error,
    value,
    size = 'large',
    accessoryRight,
    showPassword,
    eva,
    label,
    onFocus,
    showSoftInputOnFocus,
  }) => {
    return (
      <Input
        showSoftInputOnFocus={showSoftInputOnFocus}
        onFocus={onFocus}
        size={size}
        status={error?.message && 'warning'}
        disabled={disabled}
        secureTextEntry={showPassword}
        style={[{width: '100%', marginBottom: hp(2)}, inputStyles]}
        value={value}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        onChangeText={text =>
          onChange(type === 'number' ? text.replace(/[^0-9]/g, '') : text)
        }
        {...(disabled && {editable: !disabled})}
        editable={editable}
        keyboardType={keyboardType}
        {...(autoCompleteType && {autoCompleteType})}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        maxLength={maxLength}
        pointerEvents={pointerEvents}
        accessoryRight={accessoryRight}
        {...(error && {
          caption: textProps => (
            <Text
              style={{
                ...textProps.style[0],
                color: colors.yellowMercantil,
              }}>
              {error?.message}
            </Text>
          ),
        })}
        {...(label && {
          label: textProps => <Text {...textProps}>{label}</Text>,
        })}
      />
    );
  },
);

export default withStyles(InputComponent, theme => ({
  primaryColor: theme['color-primary-500'],
}));
