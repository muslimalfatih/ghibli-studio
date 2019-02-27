import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFilms } from '../../store/films/actions'
import { Link } from 'react-router-dom'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  films: [],
  fetchFilms: () => void
}

interface TState {
}

interface TFilm {
  id: number,
  image: string,
  name: string,
  title: string,
  release_date: string,
  description: string
}

class Films extends React.Component<TProps, TState> {
  constructor(props: any) {
    super(props)

    this.truncateText = this.truncateText.bind(this)
  }

  componentDidMount() {
    this.props.fetchFilms()
  }

  truncateText(text: string) {
    if(text.length > 350) return text.substring(0,350)+'...'

    return text
  }

  render(): React.ReactNode {
    const { films } = this.props

    return (
      <Container className="container--film">
        <h1 className="container__header">List of Ghibli's Films</h1>
        <Columns>
          {
            films.length !== 0 ?
            films.map((film: TFilm, index: number) => {
              return (
                <Columns.Column key={index} size={12}>
                  <Link to={`/films/${film.id}`}>
                    <Card>
                      <Card.Content>
                        <Image src={film.image} alt={film.name} className="is-128x128" />
                        <Content>
                          <h1>{film.title} <span>({film.release_date})</span></h1>
                          <p>{this.truncateText(film.description)}</p>
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
    films: state.films.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchFilms }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
