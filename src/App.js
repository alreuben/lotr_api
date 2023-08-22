import { useEffect, useState } from 'react';

const App = () => {

    const [lotr, setLotr] = useState([])
    // const [quote, setQuote] = useState()
    // const [character, setCharacter] = useState();
    
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
          }

        const getLotr = async () => {
            let data = await fetch('https://the-one-api.dev/v2/quote', {
              headers: headers
            })
            let lotr = await data.json()
            let lotrData = lotr.docs 
            setLotr(lotrData)
            console.log(lotrData)
            console.log(lotrData[0].name)
        }
        
        getLotr()
        
    }, [])

    return (
      <>
        <ul>test</ul>
        {/* <p>{lotrData.name}</p> */}
      </>
    )
}

export default App;
