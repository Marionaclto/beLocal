import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import withUser from './withUser'
import './form-new-activity.css'
import BottomNavbar from './bottom-navbar'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

class NewActivity extends React.Component {
  state = {
    name: '',
    startDate: '',
    endDate: '',
    startHour: '',
    endHour: '',
    hostingId: '',
    address: '',
    city: '',
    description: '',
    category: '',
    price: '',
    picture: '',
    longitude: '',
    latitude: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onFileChange = event => {
    this.setState({ picture: event.target.files[0] })
    this.getPosition()
  }

  getPosition() {
    const { address, city } = this.state
    let fullAdress = `${address} ${city}`
    const fullAdressLength = fullAdress.length
    for (let i = 0; i < fullAdressLength; i++) {
      fullAdress = fullAdress.replace(' ', '%20')
    }

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${fullAdress}&inputtype=textquery&fields=geometry&key=${apiKey}`
      )
      .then(response => {
        const { location } = response.data.candidates[0].geometry
        const lat = location.lat
        const lng = location.lng
        this.setState({
          latitude: lat,
          longitude: lng,
        })
      })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('name', this.state.name)
    formData.append('startDate', this.state.startDate)
    formData.append('endDate', this.state.endDate)
    formData.append('startHour', this.state.startHour)
    formData.append('endHour', this.state.endHour)
    formData.append('hostingId', this.props.user.id)
    formData.append('address', this.state.address)
    formData.append('city', this.state.city)
    formData.append('description', this.state.description)
    formData.append('category', this.state.category)
    formData.append('price', this.state.price)
    formData.append('picture', this.state.picture)
    formData.append('longitude', this.state.longitude)
    formData.append('latitude', this.state.latitude)

        axios
        .post('/api/activities', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
        this.goToDashboard()
    }

  goToDashboard = () => {
    this.props.history.push('/dashboard')
  }

  loginRedirect = () => {
    this.props.history.push('/login')
  }

  render() {
    const {
      name,
      startDate,
      endDate,
      startHour,
      endHour,
      address,
      city,
      description,
      category,
      price,
      picture,
    } = this.state
    const { user } = this.props
    if (!user) {
      return (
        <div className='login'>
          <div>
            <br />
            <h1>You need to log in first</h1>
            <Button color='success' onClick={this.loginRedirect}>
              Login
            </Button>
          </div>
        </div>
      )
    }
    return (
      <div className='new-activity'>
        <br /> <br />
        <Form className='new-activity-container' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='name'>Let's start with the activity name.</Label>
            <Input
              value={name}
              onChange={this.handleChange}
              name='name'
              placeholder='Name'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='startDate'>What day does it start?</Label>
            <Input
              value={startDate}
              onChange={this.handleChange}
              name='startDate'
              placeholder='StartDate'
              type='date'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='endDate'>What day does it end?</Label>
            <Input
              value={endDate}
              onChange={this.handleChange}
              name='endDate'
              placeholder='EndDate'
              type='date'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='startHour'>What time does it start?</Label>
            <Input
              value={startHour}
              onChange={this.handleChange}
              name='startHour'
              placeholder='StartHour'
              type='time'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='endHour'>What time does it end?</Label>
            <Input
              value={endHour}
              onChange={this.handleChange}
              name='endHour'
              placeholder='EndHour'
              type='time'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='adress'>Where is the activity happening?</Label>
            <Input
              value={address}
              onChange={this.handleChange}
              name='address'
              placeholder='Address'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='city'>And the city?</Label>
            <Input
              value={city}
              onChange={this.handleChange}
              name='city'
              placeholder='City'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='description'>Can you describe the activity?</Label>
            <Input
              value={description}
              onChange={this.handleChange}
              name='description'
              placeholder='Description'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='category'>Choose the category that fits better</Label>
            <Input
              value={category}
              onChange={this.handleChange}
              name='category'
              placeholder='Category'
              type='select'>
              <option value=' '>Choose category</option>
              <option value='running'>Running</option>
              <option value='cycling'>Cycling</option>
              <option value='hiking'>Hiking</option>
              <option value='food and drinks'>Food and drinks</option>
              <option value='crafts'>Crafts</option>
              <option value='animals'>Animals</option>
              <option value='dancing'>Dancing</option>
              required
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='price'>What's the price for your activity?</Label>
            <Input
              value={price}
              onChange={this.handleChange}
              name='price'
              placeholder='Price'
              type='number'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='picture'>
              Post a picture so the activity gets more attention:
            </Label>
            <Input
              onChange={this.onFileChange}
              name='picture'
              placeholder='Picture'
              type='file'
              required></Input>
          </FormGroup>
          <Button className='button-green' size='lg'>
            New activity
          </Button>
        </Form>
      </div>
    )
  }
}

export default withUser(NewActivity, { renderNull: false })
