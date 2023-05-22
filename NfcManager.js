import { Platform } from 'react-native';
import { NfcManager, NfcTech } from 'expo-nfc';

// Check if NFC is supported on the device
const isSupported = async () => {
  try {
    await NfcManager.start();
    return true;
  } catch (ex) {
    return false;
  }
};

// Enable NFC tag discovery
const start = async () => {
  await NfcManager.registerTagEvent();
};

// Disable NFC tag discovery
const stop = async () => {
  await NfcManager.unregisterTagEvent();
  await NfcManager.stop();
};

// Read NFC tag
const readTag = async () => {
  try {
    const tag = await NfcManager.requestTechnology(NfcTech.Ndef);
    const payload = tag.ndefMessage[0].payload;
    // Process the payload as needed
    console.log('NFC tag payload:', payload);
    await NfcManager.cancelTechnologyRequest();
  } catch (ex) {
    console.warn('Error reading NFC tag:', ex);
  }
};

// Write data to NFC tag
const writeTag = async (data) => {
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const bytes = NfcManager.stringToBytes(data);
    const message = [
      {
        ndefMessage: [
          { type: NfcManager.Ndef.TNF_WELL_KNOWN, payload: bytes },
        ],
      },
    ];
    await NfcManager.writeNdefMessage(message);
    await NfcManager.cancelTechnologyRequest();
    console.log('NFC tag written successfully');
  } catch (ex) {
    console.warn('Error writing to NFC tag:', ex);
  }
};

export default {
  isSupported,
  start,
  stop,
  readTag,
  writeTag,
};
