# Ziarra Expo App

This is a standalone Expo version of the Ziarra mobile experience.

## Run locally

```powershell
cd expo-app
npm install
npm run start
```

Then scan the QR code with Expo Go, or press `a` for Android and `i` for iOS if you have a simulator installed.

If Expo cannot reach its remote version checks, run:

```powershell
$env:EXPO_NO_TELEMETRY='1'
npm run start:offline
```

## Screens included

- Travel discovery home
- Search input
- Category chips
- Next-trip summary
- Stay cards
- Explorer rewards card
- Destination ideas
- Bottom tab bar mock navigation
