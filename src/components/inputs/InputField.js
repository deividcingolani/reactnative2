import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
import {Icon} from '@ui-kitten/components';

import Input from './bases/Input';
import styles from './styles';

const InputField = ({
  name,
  label,
  // value,
  error,
  placeholder,
  containerStyles = {},
  secureTextEntry = false,
  returnKeyType,
  disabled,
  type = 'text',
  keyboardType = 'default',
  editable = true,
  autoCompleteType,
  autoCapitalize = 'words',
  multiline = false,
  maxLength,
  pointerEvents,
  icon = null,
  iconName,
  control,
  right,
  onFocus,
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Controller
      control={control}
      name={name}
      // defaultValue={value}
      render={({field: {onChange, value}}) => (
        <View style={[styles.inputContainer, containerStyles]}>
          <Input
            type={type}
            label={label}
            disabled={disabled}
            showPassword={showPassword}
            value={value}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onChange={text =>
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
            error={error}
            onFocus={onFocus}
            accessoryRight={props => (
              <>
                {(secureTextEntry || icon) ? (
                  <Pressable onPress={toggleShowPassword}>
                    {/*<Icon {...props} name='alert-circle-outline' />*/}
                    <Icon
                      {...props}
                      name={icon ? iconName : !showPassword ? 'eye' : 'eye-off'}
                    />
                  </Pressable>
                ) : (
                  right
                )}
              </>
            )}
          />
        </View>
      )}
    />
  );
};

export default InputField;
