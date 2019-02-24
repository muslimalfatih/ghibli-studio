import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVehicles } from '../../store/vehicles/actions'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  vehicles: any,
  fetchVehicles: any,
  match: any
}

interface TState {
  data: any
}

class VehicleDetail extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVehicles()
  }

  render() {
    const { vehicles } = this.props;
    const detail = vehicles.find((vehicle: any) => vehicle.id === this.props.match.params.id)
    
    return (
      <Container className="container--vehicle">
        <h1 className="container__header">Vehicle Detail</h1>
        <Columns>
          { detail ?
            <Columns.Column size={12}>
              <Card>
                <Card.Content>
                  <Image src={detail.image} alt={detail.name} className="is-128x128" />
                  <Content>
                    <h1>{detail.name}</h1>
                    <p><span>Description:</span> {detail.description}</p>
                    <p><span>Vehicle Class:</span> {detail.vehicle_class}</p>
                    <p><span>Length:</span> {detail.length}</p>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            :
            <LoaderWrapper />
          }
        </Columns>
      </Container>
    )
    
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

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail)