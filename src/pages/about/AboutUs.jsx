import { Link } from 'react-router-dom'
import '../about/AboutUs.css'
export default function AboutUS() {
  return (
    <div className='aboutUs-block'>
      <Link to='/aboutus'>
        <h1 className='aboutUs-title'>About Us</h1>
      </Link>
      <p className='aboutUs-description'>
        Rick and Morty, the dynamic duo of interdimensional chaos and cosmic
        misadventures, embark on yet another mind-bending escapade. As Rick, the
        eccentric and brilliant scientist, concocts a plan to outsmart the
        multiverse, Morty, his perpetually anxious grandson, reluctantly tags
        along.
      </p>
      <p>
        Together, they navigate through bizarre dimensions, encountering strange
        creatures, outsmarting intergalactic bureaucrats, and, of course,
        grappling with the consequences of Ricks reckless genius. Amidst the
        chaos, their dysfunctional yet endearing relationship adds a touch of
        humor to the cosmic pandemonium, making each episode a rollercoaster
        ride of absurdity and unexpected twists. Welcome to the unpredictable
        world of Rick and Morty, where the only constant is the uncertainty of
        what comes next.
      </p>
    </div>
  )
}
