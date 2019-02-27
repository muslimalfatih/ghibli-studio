import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { peoplesFetchRequest } from '../../store/peoples/actions'
import { Route , Link } from 'react-router-dom'

import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'
import peoplesImage from '../../data/peoples.json'

// const API_BASE = 'https://ghibliapi.herokuapp.com'
// const PEOPLE_API = `${API_BASE}/people?limit=10`


interface TProps {
  dispatch: any,
  peoplesFetchRequest: any,
  peoples: any
}
interface TState {
  data: any,
  peoplesFetchRequest: any,
  isLoading: boolean,
  error: null
}
class Peoples extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: null,
      isLoading: false,
      peoplesFetchRequest: null,
      error: null
    }
  }

  componentWillMount() {
    this.props.peoplesFetchRequest()
  }

  // getData() {
  //   fetch(PEOPLE_API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         throw new Error('Something went wrong')
  //       }
  //     })
  //     .then((data) => {
  //       this.setState({
  //         data
  //       })
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error,
  //         isLoading: false
  //       })
  //     })
  // }

  render() {
    const { peoples } = this.props
    // if (error) {
    //   return <p>{error}</p>
    // }

    // if (isLoading) {
    //   return <p>Loading..</p>
    // }

    return (
      <Container className="container--people">
        <h1 className="container__header">List of character in Ghibli's film</h1>
        <Columns>
          {
            peoples.length !== 0 ?
              peoples.map((people: any, index: number) => {
                return (
                  <Columns.Column key={index} size={12}>
                    <Link to={`people/${people.id}`}>
                      <Card>
                        <Card.Content>
                          <Image src={people.image} alt={people.name} className="is-128x128"/>
                          <Content>
                            <h1>{people.name}</h1>
                            <p><span>Gender:</span> {people.gender}</p>
                            <p><span>Age:</span> {people.age}</p>
                            <p><span>Eye Color:</span> {people.eye_color}</p>
                            <p><span>Hair Color:</span> {people.hair_color}</p>
                          </Content>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Columns.Column>
                )
              })
              :
              <LoaderWrapper/>
          }
        </Columns>
      </Container>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    peoples: state.peoples.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({peoplesFetchRequest}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
