import './Home.css';

export default function Home(){
    let data;
    let employees = JSON.parse(localStorage.getItem('employees'))//JSON.parse transforma string in array
    console.log('employees', employees) 
    
    if (!employees) {
      console.log('setting employees')
      data = require('assets/data/employees.json')
      employees = data
      localStorage.setItem('employees', JSON.stringify(data)) //JSON.stringify transforma JSON(array/obiect) in string
    }   
    
    return(
<div>

    {employees.map((item, index)=>{
       return <div className="employeeCard">
                  <ul>
                    <li key={index}>
                                {item.FirstName+" "}
                                {item.SecondName}<br/>
                                {item.Position}<br/><br/>
                                {item.Details}
                    </li>
                  </ul>
              </div> 
    }) }


</div>
    )
}   
