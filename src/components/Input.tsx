import { useState } from "react";



export default function Input() {
  const [ing, setIng] = useState<string[]>([])
    function handleSearch() {
        // Implement search functionality here
        console.log('Search button clicked');
    }
    function overInput() {
        console.log('Mouse over input field');
    }
    function onSubConsole () {
        console.log('Form submitted');
    }
    function inputIng(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const newIng = formData.get("ingridients")
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
    
  return (
    <div className="flex items-center justify-center mt-4">
        <form onSubmit={inputIng}>
      <input
        name="ingridients"
        onMouseOver={overInput}
        type="text"
        placeholder="Enter a recipe..."
        className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
       <button type="submit">add ingriedinet</button>
      </form>
      <button onClick={handleSearch}>
        Search
      </button>
      <ul>
        {ing.map((item, index) => (
            <li key={index}>{item}<button onClick={()=>deleteElement(index)}>remove</button></li>))}
            
      </ul>
      <button onClick={deleteList}>Delete all</button>
    </div>
  );
}