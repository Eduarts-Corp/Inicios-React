import { useState } from 'react';
import './App.css';
import { Testimonial } from './components/Testimonial';
import  photo1  from './images/profile_1.jpg';
import { Button } from './components/Button';  


export const App = () => {
  
  const [theme, setTheme] = useState('Light');

  function onClickFn() {
    if (theme === 'Light') {
      setTheme('Dark')
    } else {
      setTheme('Light');
      
    }
  }


  return (
    <>
      <div className={'main-container ' + theme}>

        <Button onClickFn = {onClickFn}
                value={theme === 'Dark' ? 'Light' : 'Dark'} />

                
        <Testimonial
          img={photo1}
          name="Juan Castellanos"
          starts="⭐⭐⭐⭐⭐"
          text="Cambio aca ipsum dolor sit amet consectetur adipisicing elit. Illo et, esse rem cum modi nostrum? Adipisci, earum itaque illo non nobis recusandae harum blanditiis "
        />
        <Testimonial
          img={photo1}
          name="Jhon Nash"
          starts="⭐⭐⭐⭐"
          text="Realizando Cambios con los props aca ipsum dolor sit amet consectetur adipisicing elit. Illo et, esse rem cum modi nostrum? Adipisci, earum itaque illo non nobis recusandae"
        />
        
      </div>
    </>
  );
}

