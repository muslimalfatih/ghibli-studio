import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLocations } from '../../store/locations/actions'
import { Link } from 'react-router-dom'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  locations: any,
  fetchLocations: any
}
interface TState {
  data: any,
  isLoading: boolean,
  error: null
}
class Locations extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: null,
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    const { locations } = this.props

    return (
      <Container className="container--location">
        <h1 className="container__header">List of location in Ghibli's film</h1>
        <Columns>
          {
            locations ?
              locations.map((location: any, index: number) => {
                return (
                  <Columns.Column key={index} size={12}>
                    <Link to={{ pathname: `locations/${location.id}`}}>
                      <Card>
                        <Card.Content>
                          <Image src={location.image} alt={location.name} className="is-128x128" />
                          <Content>
                            <h1>{location.name}</h1>
                            <p><span>Climate:</span> {location.climate}</p>
                            <p><span>Terrain:</span> {location.terrain}</p>
                            <p><span>Surface Water:</span> {location.surface_water}</p>
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
    locations: state.locations.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchLocations }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
