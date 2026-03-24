 type RecipeProps = {
        ing: string[]
        recipeShown: boolean
        setBoolToTrue: () => void;
        deleteList: () => void;

    }



export default function Recipe(props: RecipeProps){

   
    return(
        <>
        <section>
        <h2>ingridients on hand: </h2>
        {props.ing.length > 3 ? <p>example text</p>: null}
        
      </section>
      <button onClick={props.setBoolToTrue}>show recipe</button>
      { props.recipeShown &&
        <p>placeholder Text</p>}
              <button onClick={props.deleteList}>Delete all</button>

        </>
    )
}