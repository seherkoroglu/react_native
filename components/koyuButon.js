const KoyuButon = ({navigation, children, select, setSelect, customStyle}) => {
  const handlePress = () => {
    setSelect(!select);
    setTimeout(() => {
      navigation.navigate('page10');
    }, 1300);
  };

  return (
    <View style={styles.koyuButton}>
      <TouchableOpacity
        style={[
          styles.koyuButon,
          select
            ? {
                backgroundColor: '#4d4f59',
                width: 350,
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
                borderRadius: 9,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#71727a',
                borderWidth: 1,
              }
            : null,
          customStyle,
        ]}
        onPress={handlePress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};
