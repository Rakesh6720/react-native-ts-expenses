import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  // if is not null then isEditing == true
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return <Text>Manage Expense Screen</Text>;
}
