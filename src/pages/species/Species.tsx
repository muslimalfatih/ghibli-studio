import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSpecies } from '../../store/species/actions'
import { Link } from 'react-router-dom'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  species: any,
  fetchSpecies: any
}
interface TState {
  data: any,
  isLoading: boolean,
  error: null
}
class Species extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: null,
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.props.fetchSpecies()
  }

  render() {
    const { species } = this.props

    return (
      <Container className="container--species">
        <h1 className="container__header">List of species in Ghibli's film</h1>
        <Columns>
          {
            species ?
              species.map((specie: any, index: number) => {
                return (
                  <Columns.Column key={index} size={12}>
                    <Link to={{ pathname: `species/${specie.id}`}}>
                      <Card>
                        <Card.Content>
                          <Content>
                            <h1>{specie.name}</h1>
                            <p><span>Classification:</span> {specie.classification}</p>
                            <p><span>Eye Colors:</span> {specie.eye_colors}</p>
                            <p><span>Hair Colors:</span> {specie.hair_colors}</p>
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
    species: state.species.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchSpecies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Species)
