


export default function ContentSearchCard({result, idx, handleDetail}) {


  return (
    <div key={idx}>
      <ul>
        <li>
          {result.name}
        </li>
        <img src={result.image_url} alt={result.name} poster />  
        <button onClick={() => handleDetail(result.id)}>Get Details </button>
      </ul>


    </div>

  )
}