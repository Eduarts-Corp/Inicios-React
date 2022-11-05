import './testimonial.css';
import  { }  from '../images/profile_1.jpg';


export const Testimonial = ({img,name,starts,text}) => {
  return (
      <>
          <div className='testimonial__container'>
              <div className='testimonial__content'>
                <img className='testimonial__photo' src={img} alt='profile'></img>
                <h2 className='testimonial__name'>{name}</h2>
              </div>
              <div className='testimonial__content2'>
                <p className='testimonial__stars'>{starts}</p>
                <p className='testimonial__text'>{text}</p>
              </div>
          </div>
          
      </>
  )
}
