import Tag from './Tag'; 

function Tags({ names }) {


  return (
    <div className='flex flex-wrap'>
      {names.map((name, index) => (
        <Tag key={index} name={name} />
      ))}
    </div>
  ); 
}

export default Tags; 