import PropTypes from 'prop-types'
import Button from './Buttons'

function Header ({title, onAdd}) {

  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={onAdd} text="Add Task" color={'green'}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header