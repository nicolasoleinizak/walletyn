import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
    </ScrollView>
  );
}

const colors = {
  blue: '#fr567'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: '5%',
    boxSizing: 'border-box' 
  },
  siteTitle: {
    fontSize: '2rem'
  },
  mainNav: {
    flex: 1,
    padding: '10px',
    boxSizing: 'border-box'
  },
  navButton: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    padding: '5px',
    boxSizing: 'border-box'
  }
});
