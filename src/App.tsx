import MyButton from "./componets/MyButton"
import MyForm from "./componets/MyForm"


function App() {
  const imprimir = (text: string) => alert(text)


  return (
    <>
      <MyForm/>
    <MyButton action= {() => imprimir("Hola mundo")}text="Hola"/>
    <MyButton action= {() => imprimir("Hola mundo")}text="Hola"/>
  
  
   
    </>
  )
}

export default App
