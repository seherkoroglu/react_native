import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    paddingTop: 0.1 * windowWidth, // Responsive padding
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    marginVertical: 0.04 * windowWidth, // Responsive margin
    paddingHorizontal: 0.05 * windowWidth, // Responsive padding
  },
  goals: {
    flex: 2,
    alignItems: 'center',
  },
  goalCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 0.05 * windowWidth,
    marginTop: 0.02 * windowWidth, // Boşluk
  },
  goalCard: {
    width: '48%',
    paddingVertical: 0.02 * windowWidth, // Responsive padding
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginBottom: 0.04 * windowWidth, // Responsive margin
  },
  selectedCard: {
    backgroundColor: '#8ab1ff',
  },
  image: {
    width: 0.15 * windowWidth, // Responsive width
    height: 0.15 * windowWidth, // Responsive height
    marginBottom: 0.02 * windowWidth, // Responsive margin
  },
  options: {
    fontSize: 0.04 * windowWidth, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 0.01 * windowWidth, // Responsive margin
  },
  text: {
    fontSize: 0.03 * windowWidth, // Responsive font size
    textAlign: 'center',
  },
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0.05 * windowWidth, // Responsive padding
  },
  signInText: {
    color: '#1558e6',
  },
});

export default styles;
