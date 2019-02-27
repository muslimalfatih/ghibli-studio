import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVehicles } from '../../store/vehicles/actions'
import { Link } from 'react-router-dom'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  vehicles: any,
  fetchVehicles: any
}
interface TState {
}
class Vehicles extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVehicles()
  }

  render() {
    const { vehicles } = this.props

    return (
      <Container className="container--vehicle">
        <h1 className="container__header">List of vehicles in Ghibli's film</h1>
        <Columns>
          {
            vehicles.length !== 0 ?
              vehicles.map((vehicle: any, index: number) => {
                return (
                  <Columns.Column key={index} size={12}>
                    <Link to={{ pathname: `vehicles/${vehicle.id}` }}>
                      <Card>
                        <Card.Content>
                          <Image src={vehicle.image} alt={vehicle.name} className="is-128x128" />
                          <Content>
                            <h1>{vehicle.name}</h1>
                            <p><span>Description:</span> {vehicle.description}</p>
                            <p><span>Vehicles Class:</span> {vehicle.vehicles_colors}</p>
                            <p><span>Length:</span> {vehicle.length}</p>
                          </Content>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Columns.Column>
                )
              })
              :
              <LoaderWrapper />
          }
        </Columns>

      </Container>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    vehicles: state.vehicles.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchVehicles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)
