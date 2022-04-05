import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PlATFORM_IOS from 'react-native';
import {useStoreState} from 'easy-peasy';
import DocumentPicker from 'react-native-document-picker';

import {Error} from '../index';
import {Clip, ClipDark} from '../../assets/images';

import styles from './styles';

const InputDocumentPicker = ({
	value,
	error,
	placeholder,
	onChangeImage = () => { },
}) => {
	const theme = useStoreState(states => states.common.theme);

	const getExtension = (file) => {
		if (file)  return file.split('.').pop(); 
		return ''
	}

	const openPicker = async () => {
		try {
			const res = (await DocumentPicker.pick({
				type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
				allowMultiSelection: false
			}))[0];
			// console.log(res)
			const uri = PlATFORM_IOS ? res.uri.replace('file://', '') : res.uri

			onChangeImage({
				type: res.type,
				file: uri,
				fileName: res.name,
				extension: getExtension(res.name || ''),
			})
		} catch (err) {
			if (DocumentPicker.isCancel(err)) {
				// User cancelled the picker, exit any dialogs or menus and move on
				// inputRef.current.blur();
			} else {
				console.log(err)
			}
		}
	}

	return (
		<>
			<TouchableOpacity
				activeOpacity={.6}
				onPress={openPicker}
				style={[
					styles.documentPickerButton,
					{
						backgroundColor: theme === 'light' ? '#F6F8FB' : '#1A2138',
						borderColor: !!error?.message ? '#FDA51B' : theme === 'light' ? '#E4E9F2' : '#101325'
					}
				]}
			>
				<Text style={[styles.documentPickerTitle, { color: !!value ? (theme === 'light' ? 'black' : '#FDFDFD') :'#8F9BB3' }]}>
					{!!value ? value : placeholder}
				</Text>
				<Image source={theme === 'light' ? Clip : ClipDark} />
			</TouchableOpacity>
			<Error error={error} />
		</>
	);
};

export default InputDocumentPicker;