import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { InvestmentContextProvider } from "./context/investmentCtx";

function App() {

   return (
    <>
      <Header />
      <InvestmentContextProvider>
        <UserInput />
        <Results />
      </InvestmentContextProvider>
    </>
  )
}

export default App
