# Expo DocumentPicker Android Bug: Duplicate and Invalid URIs

This repository demonstrates a bug in Expo's `expo-document-picker` library on Android. When selecting multiple files, the returned URI array may contain duplicates and URIs pointing to nonexistent files.  This can lead to unexpected behavior in applications that process the selected files.

## Bug Description
The `getDocumentAsync` method with `multiple: true` can return an array of URIs containing duplicates and URIs that result in errors when attempting to access the files.  This inconsistency makes reliable file processing challenging.

## Reproduction Steps
1. Run the provided `bug.js` example on an Android device.
2. Select multiple files using the DocumentPicker.
3. Observe the console output for duplicate or invalid URIs.

## Solution
The `bugSolution.js` file provides a workaround to filter out duplicate and invalid URIs.  It iterates through the URIs, checks for duplicates using a Set, and attempts to stat each file to verify its existence.  Only valid and unique URIs are retained.

## Note
This is a workaround, not a fix for the underlying Expo library issue. A proper fix would require addressing the root cause within the `expo-document-picker` library itself.