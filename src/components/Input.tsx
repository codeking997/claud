export default function Input() {
    const ing = ["chicken", "rice", "broccoli"];
    function handleSearch() {
        // Implement search functionality here
        console.log('Search button clicked');
    }
    function overInput() {
        console.log('Mouse over input field');
    }
  return (
    <div className="flex items-center justify-center mt-4">
      <input
        onMouseOver={overInput}
        type="text"
        placeholder="Enter a recipe..."
        className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleSearch}>
        Search
      </button>
      <ul>
        {ing.map((item, index) => (
            <li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}