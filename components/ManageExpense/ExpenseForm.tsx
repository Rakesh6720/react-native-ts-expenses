import { View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function amountChangedHandler() {}
  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          keyboardType: "demical-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="descrpition"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}
