import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';
import { CaretIcon } from '../../icons';
import { WhiteView } from '../design/WhiteView';

const Dropdown = ({ options, activeOption, onMenuItemSelect, keyVal, titleVal, wrapperStyles = {} }) => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const openMenu = () => setMenuVisibility(true);

  const closeMenu = () => setMenuVisibility(false);

  const selectMenuItem = (val: any) => {
    onMenuItemSelect(val);
    closeMenu();
  };

  return (
    <WhiteView style={{ ...styles.dropdownMenuWrapper, ...wrapperStyles }}>
      <Menu
        visible={menuVisibility}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu} style={styles.dropdownMenuAnchor}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 10 }}>
              <View>{titleVal(activeOption)}</View>
              <View>
                <CaretIcon />
              </View>
            </View>
          </TouchableOpacity>
        }
      >
        {options &&
          options.map((val: any) => {
            return (
              <Menu.Item
                onPress={() => {
                  selectMenuItem(val);
                }}
                key={keyVal(val)}
                title={titleVal(val)}
              />
            );
          })}
      </Menu>
    </WhiteView>
  );
};

const styles = StyleSheet.create({
  dropdownMenuWrapper: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    flexDirection: 'row',
    marginBottom: 15,
    width: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  dropdownMenuAnchor: { width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
});

export default Dropdown;
