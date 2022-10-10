import { FlatList, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 39.99,
    date: new Date("2022-03-23"),
  },
  {
    id: "e3",
    description: "A yellow dress",
    amount: 129.99,
    date: new Date("2022-07-24"),
  },
];

interface ExpensesOutputProps {
  expenses?: any[] | undefined;
  expensesPeriod: string;
}
export default function ExpensesOutput({
  expenses,
  expensesPeriod,
}: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
