import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLocations } from '../../store/locations/actions'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  locations: any,
  fetchLocations: any,
  match: any
}

interface TState {
  data: any
}

class LocationDetail extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    const { locations } = this.props;
    const detail = locations.find((location: any) => location.id === this.props.match.params.id)
    
    return (
      <Container className="container--location">
        <h1 className="container__header">Location Description</h1>
        <Columns>
          { detail ?
            <Columns.Column size={12}>
              <Card>
                <Card.Content>
                  <Image src={detail.image} alt={detail.name} className="is-128x128" />
                  <Content>
                    <h1>{detail.name}</h1>
                    <p><span>Climate:</span> {detail.climate}</p>
                    <p><span>Terrain:</span> {detail.terrain}</p>
                    <p><span>Surface Water:</span> {detail.surface_water}</p>
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
    locations: state.locations.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchLocations }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail)