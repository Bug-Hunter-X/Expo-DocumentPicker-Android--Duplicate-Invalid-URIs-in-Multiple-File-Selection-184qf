```javascript
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

async function pickAndProcessFiles() {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });

    if (result.type === 'success') {
      const uniqueUris = [...new Set(result.uri)]; // Remove duplicates
      const validUris = [];

      for (const uri of uniqueUris) {
        try {
          const fileInfo = await FileSystem.getInfoAsync(uri);
          if (fileInfo.exists) {
            validUris.push(uri);
          }
        } catch (error) {
          console.warn('Invalid URI or access error:', uri, error);
        }
      }

      console.log('Valid and unique URIs:', validUris);
      //Process only the valid and unique URIs
    } else {
      console.log('Cancelled');
    }
  } catch (error) {
    console.error('Error picking files:', error);
  }
}
```