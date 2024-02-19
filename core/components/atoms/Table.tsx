import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styles/constants';

interface TableProps {
  data: Array<{
    column1: string | number;
    column2: string | number;
  }>;
}

const Table = ({ data }: TableProps) => {
  return (
    <View style={styles.container}>
      {/* Table header */}
      <View style={styles.row}>
        <Text style={styles.headerCell}>Header 1</Text>
        <Text style={styles.headerCell}>Header 2</Text>
      </View>

      {/* Table rows */}
      {data.map((row, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{row.column1}</Text>
          <Text style={styles.cell}>{row.column2}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    color: colors.textColor,
  },
  headerCell: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: colors.textColor,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: colors.textColor,
  },
});

export default Table;
