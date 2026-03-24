type ingriedientsProp = {
    ing: string[]
    inputIng: (event: FormData ) => void;
    deleteElement: (indexToDelete: Number) => void;

}


export default function Ingriedients (prop: ingriedientsProp) {
    return (
        <>
     <form action={prop.inputIng}>
      <input
        name="ingridients"
        type="text"
        placeholder="Enter a recipe..."
        className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
       <button type="submit">add ingriedinet</button>
      </form>
      
      <ul>
        {prop.ing.map((item, index) => (
            <li key={index}>{item}<button onClick={()=>prop.deleteElement(index)}>remove</button></li>))}
            
      </ul>
      </>
    )
}