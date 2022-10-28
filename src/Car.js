export default function Car(props) {
    const cars = ['item1', 'item2', 'item3'];

    return <><h2>Hi, I am a {props.word}!
    </h2><button onClick={()=>console.log("yeet")}>Take the Shot!</button>
    <ul>
        {cars.map((car) => <p key={car}>{car}</p>)}
    </ul>
    
    </>;
  }
