import{useEffect} from "react"
import{Card} from "react-bootstrap"
import{useDispatch, useSelector} from "react-redux"


const WeatherSection = () => {
    //dispatch e selector 
const dispatch = useDispatch();
const city = useSelector((state) => state.city)
const data = useSelector((state) => state.cityWeather)
    //fetchs
    const fetchWeather = async () => {
            try {
                let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=466403af4396c148a9b94f0a2e5bf8b0`)
                console.log(res)
                if(res.ok){
                    let data = await res.json()
                    dispatch({
                        type: "CITY_WEATHER",
                        payload: data,
                    })
                    console.log('data',data)
                } 
            }catch (error) {
                    console.log(error)
                }
        }
        

    useEffect(()=>{
        fetchWeather();
    },[city])


return(
<>
<Card style={{ width: '18rem',marginTop:'2em'}}  >
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data?.coord?.lon}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</>
)
}
export default WeatherSection