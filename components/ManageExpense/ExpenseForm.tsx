import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "./Input";

export default function ExpenseForm() {
  const [amountValue, setAmountValue] = useState("");

  function amountChangedHandler(enteredAmount: string) {
    setAmountValue(enteredAmount);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="amount"
          textInputConfig={{
            keyboardType: "demical-pad",
            onChangeText: amountChangedHandler,
            value: amountValue,
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        label="descrpition"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
