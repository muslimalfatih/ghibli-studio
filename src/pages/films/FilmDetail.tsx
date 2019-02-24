import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFilms } from '../../store/films/actions'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  films: any,
  fetchFilms: any,
  match: any
}

interface TState {
}

class FilmDetail extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchFilms()
  }

  render() {
    const { films } = this.props;
    const detail = films.find((film: any) => film.id === this.props.match.params.id)
    
    return (
      <Container>
        <h1 className="container__header">Film Detail</h1>
        <Columns>
          { detail ?
            <Columns.Column size={12}>
              <Card>
                <Card.Content>
                  <Image src={detail.image} alt={detail.name} className="is-128x128" />
                  <Content>
                    <h1>{detail.title}</h1>
                    <p className="detail-description">{detail.description}</p>
                    <p><span>Director:</span> {detail.director}</p>
                    <p><span>Producer:</span> {detail.producer}</p>
                    <p><span>Release Date:</span> {detail.release_date}</p>
                    <p><span>RT Score:</span> {detail.rt_score}</p>
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
    films: state.films.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchFilms }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail)