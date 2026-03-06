# Simple Expo App

This is an Expo project with GluStack UI, authentication, app navigation, and context for state management.

## Features

- **GluStack UI**: Modern UI components for styling with consistent theming
- **Authentication**: Simple login/logout with AsyncStorage
- **App Navigation**: React Navigation with stack navigator
- **State Management**: React Context for auth and app state
- **Screen Container**: Reusable container component for consistent screen layouts

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Run on device/emulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

## Login Credentials

For demo purposes:

- Email: test@example.com
- Password: password

## Project Structure

- `App.tsx`: Main app component with providers
- `contexts/`: Auth and app state contexts
- `screens/`: Login and home screens
- `navigation/`: App navigator setup
- `components/`: Reusable components like ScreenContainer
- `gluestack-ui.config.ts`: GluStack configuration

## Technologies Used

- React Native
- Expo
- React Navigation
- AsyncStorage
- TypeScript
