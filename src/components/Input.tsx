import { useState } from "react";
import Recipe from "./Recipe";
import Ingriedients from "./Ingriedients";


export default function Input() {
  const [ing, setIng] = useState<string[]>([])


  const [recipeShown, setRecipeShown] = useState<boolean>(false);

    
   
  
    function inputIng(event: FormData){
      const newIng = event.get("ingridients")
      if(typeof newIng !== "string" || newIng.trim().length ===0)return;
      setIng(prev => [...prev, newIng])
      console.log(ing)
    }
    function deleteList() {
      setIng([])
    }
    function deleteElement(indexToDelete: Number){
      setIng(prev => prev.filter((item, currentIndex)=> currentIndex !==indexToDelete));
    }
    const setBoolToTrue = () => {
      setRecipeShown(prev => !prev)
    }
    
   
    
  return (
    <div className="flex items-center flex-col justify-center mt-4">

      <Ingriedients ing={ing} inputIng={inputIng} deleteElement={deleteElement}/>
       
      <Recipe  ing={ing} recipeShown={recipeShown} setBoolToTrue={setBoolToTrue} deleteList={deleteList}/>
      
    </div>
  );
}