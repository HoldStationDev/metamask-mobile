import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Box from './Box';
import BaseListItem from '../../../Base/ListItem';
import CustomText from '../../../Base/Text';

import CurrencyChevron from './CurrencyChevron';

// TODO: Convert into typescript and correctly type optionals
const Text = CustomText as any;
const ListItem = BaseListItem as any;

const styles = StyleSheet.create({
  amount: {
    fontSize: 24,
  },
  chevron: {
    flex: 0,
    marginLeft: 8,
  },
});

interface Props {
  label?: string;
  currencySymbol?: string;
  amount: string;
  currencyCode: string;
  highlighted?: boolean;
  onPress?: () => any;
  onCurrencyPress?: () => any;
}

const AmountInput: React.FC<Props> = ({
  label,
  currencySymbol,
  amount,
  currencyCode,
  highlighted,
  onPress,
  onCurrencyPress,
}: Props) => (
  <Box label={label} onPress={onPress} highlighted={highlighted}>
    <ListItem.Content>
      <ListItem.Body>
        <Text
          black
          bold
          style={styles.amount}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {currencySymbol || ''}
          {amount}
        </Text>
      </ListItem.Body>
      <ListItem.Amounts style={styles.chevron}>
        <TouchableOpacity
          disabled={!onCurrencyPress}
          onPress={onCurrencyPress}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <CurrencyChevron currency={currencyCode} />
        </TouchableOpacity>
      </ListItem.Amounts>
    </ListItem.Content>
  </Box>
);

export default AmountInput;