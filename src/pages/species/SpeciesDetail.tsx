import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSpecies } from '../../store/species/actions'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  species: any,
  fetchSpecies: any,
  match: any
}

interface TState {
  data: any
}

class SpeciesDetail extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.props.fetchSpecies()
  }

  render() {
    const { species } = this.props;
    const detail = species.find((specie: any) => specie.id === this.props.match.params.id)
    
    return (
      <Container className="container--species">
        <h1 className="container__header">Species Description</h1>
        <Columns>
          { detail ?
            <Columns.Column size={12}>
              <Card>
                <Card.Content>
                  <Content>
                    <h1>{detail.name}</h1>
                    <p><span>Classification: </span>{detail.classification}</p>
                    <p><span>Eye Colors:</span> {detail.eye_colors}</p>
                    <p><span>Hair Colors:</span> {detail.hair_colors}</p>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            :
            <LoaderWrapper/>
          }
        </Columns>
      </Container>
    )
    
  }

}

function mapStateToProps(state: any) {
  return {
    species: state.species.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchSpecies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDetail)