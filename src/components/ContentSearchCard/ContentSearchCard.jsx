


export default function ContentSearchCard({result, idx}) {


  return (
    <div key={idx}>
      <ul>
        <li>
          {result.name}
        </li>
        <img src={result.image_url} alt={result.name} poster />
      </ul>


    </div>

  )
}