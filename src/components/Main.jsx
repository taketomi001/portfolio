import '../css/main.css'
import Xp from './Xp'
import Diplomes from './Diplomes'
import Competences from './Competences'

export default function Main(){
    return(<>
    <div className='content'>
        <h2 className='status'>Stagiaire en conception et développeur d'application <span className='web'>w<span className='web2'>e</span>b</span></h2>
        
        <Competences/>
        <Xp/>
        <Diplomes/>
   </div>
    </>)
}