import '../css/main.css'
import Xp from './Xp'
import Diplomes from './Diplomes'
import Competences from './competences'
export default function Main(){
    return(<>
    <div className='content'>
        <Competences/>
        <Xp/>
        <Diplomes/>
   </div>
    </>)
}