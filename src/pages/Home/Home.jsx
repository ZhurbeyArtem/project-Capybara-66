import ExpensesMain from "@/components/ExpensesCategories/ExpensesMain"
import welocomeStyles from "../WelcomePage/WelcomePage.module.css"
import homeStyles from "./Home.module.css"
import { ExpensesAndIncomes } from "@/components/ExpensesAndIncomes/ExpensesAndIncomes"
import { useParams } from "react-router-dom"
import { TransactionForm } from "@/components/TransactionForm/TransactionForm"
const Home = () => {
  const { transactionsType } = useParams()

  return (
    <section className={homeStyles.contianer}>
      <div className={homeStyles.heading}>
        <h1 className={welocomeStyles.mainTitle}>
          {transactionsType === "expenses" ? "Expense" : "Incomes"} Log
        </h1>
        <p className={welocomeStyles.mainDescription}>
          {transactionsType === "expenses"
            ? "  Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."
            : "Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap."}
        </p>
      </div>
      <div className={homeStyles.expensesAndIncomes}>
        <ExpensesAndIncomes />
      </div>
      <div className={homeStyles.transactionForm}>
        <TransactionForm />
      </div>
      <div className={homeStyles.donut}>
        <ExpensesMain />
      </div>
    </section>
  )
}

export default Home
