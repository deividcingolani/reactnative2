import React, {useState, memo, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text, Select, SelectItem} from '@ui-kitten/components';
import moment from 'moment';

const hours = Array.from({length: 12}, (e, i) => (i > 8 ? i + 1 : `0${i + 1}`));
const minutes = Array.from({length: 60 / 5 + 1}, (e, i) =>
  i * 5 > 9 ? i * 5 : `0${i * 5}`,
);
const amPm = ['am', 'pm'];
const format = 'hh:mm a';

const TimePicker = memo(({onSelect, value}) => {
  const [hour, setHour] = useState('01');
  const [minute, setMinute] = useState('00');
  const [ampm, setAmpm] = useState('am');

  //2021-04-13T04:00:00.000Z
  useEffect(() => {
    if (value) {
      const type = typeof value;
      const aux = type === 'string' ? value : moment(value).format(format);
      const valid = moment(value, format, true).isValid();

      if (valid) {
        const split = aux.split(' ');
        const times = split[0].split(':');
        const cardinal = split[1];

        setHour(times[0]);
        setMinute(times[1]);
        setAmpm(cardinal);
      }
    }
  }, [value]);

  const handleSelect = () => {
    const time = `${hour}:${minute} ${ampm}`;
    onSelect(moment(time, format));
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          minWidth: 210,
          maxWidth: '100%',
        }}>
        <Select
          value={hour}
          size='large'
          onSelect={idx => setHour(hours.find((h, i) => i === idx.row))}
          placeholder='00'
          accessoryRight={() => null}
          style={{flex: 1, borderWidth: 0}}>
          {hours.map((h, i) => (
            <SelectItem
              key={h}
              style={{justifyContent: 'center', alignItems: 'center'}}
              title={h}
            />
          ))}
        </Select>
        <Text category='h6' style={{marginHorizontal: 3}}>
          :
        </Text>
        <Select
          value={minute}
          size='large'
          onSelect={idx => setMinute(minutes.find((m, i) => i === idx.row))}
          placeholder='00'
          accessoryRight={() => null}
          style={{flex: 1, borderRadius: 0}}>
          {minutes.map((m, i) => (
            <SelectItem key={m} title={m} />
          ))}
        </Select>
        <Text category='h6' style={{marginHorizontal: 1}}>
          &nbsp;
        </Text>
        <Select
          value={ampm}
          size='large'
          onSelect={idx => setAmpm(amPm.find((p, i) => i === idx.row))}
          placeholder='am/pm'
          accessoryRight={() => null}
          style={{flex: 1}}>
          {amPm.map((p, i) => (
            <SelectItem key={p} title={p} />
          ))}
        </Select>
      </View>
      <Button size='small' onPress={handleSelect}>
        Seleccionar
      </Button>
    </>
  );
});

export default TimePicker;
